<template>
  <div class="h-full w-full flex-col">
    <div class="flex-center mb-1">
      <n-space class="items-center">
        <n-a href="https://gamebanana.com/mods/games/8552" target="_blank" class="text-5 underline"> gamebanana </n-a>
        <span class="text-4">{{ t('total') + ': ' + total }}</span>
        <my-button @click="settingRef?.show">
          <icon-ic-outline-settings />
        </my-button>
        <my-button :text="t('download manage')" @click="downloadQueueRef?.open">
          <icon-line-md-downloading-loop v-if="downloading" />
          <icon-mdi-progress-download v-else />
        </my-button>
        <n-a class="text-4" @click="emits('page:change', 0)"> {{ t('mods manage') }} </n-a>
      </n-space>
      <setting-modal ref="settingRef" />
      <download-queue ref="downloadQueueRef" v-model="downloading" />
    </div>
    <div ref="modListRef" class="of-auto">
      <div class="grid gap-1 py-1 px-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
        <div
          v-for="(item, index) in modDataList"
          :key="index"
          class="flex-col items-center aspect-ratio-14/17 border-slate-400 border-1 bg-black/10"
        >
          <div class="flex-col items-center text-2 text-center font-bold">
            <span class="cursor-pointer hover:(underline decoration-teal-400)" @click="open(item.url)">
              {{ item.name }}
            </span>
            <span class="cursor-pointer hover:(underline decoration-teal-400)" @click="open(item.authorUrl)">
              {{ item.author }}
            </span>
          </div>
          <div
            class="w-full grow bg-center bg-no-repeat hover:(cursor-pointer opacity-75 transition-opacity-500)"
            :class="{ 'blur-md': item.nsfw && mod.nsfw }"
            :style="{ backgroundImage: `url(${item.images[0]})` }"
          ></div>
          <div class="w-full flex-evenly">
            <div class="flex-center">
              <icon-icon-park-solid-like preserveAspectRatio="xMaxYMax meet" width="25%" height="25%" class="mr-0.5" />
              <span class="text-2">{{ item.likeCount }}</span>
            </div>
            <div class="flex-center">
              <icon-ic-baseline-remove-red-eye
                preserveAspectRatio="xMaxYMax meet"
                width="25%"
                height="25%"
                class="mr-0.5"
              />
              <span class="text-2">{{ item.viewCount }}</span>
            </div>
            <div class="flex-center">
              <n-button text class="w-40%" @click="handleInstallList(item)">
                <icon-material-symbols-download preserveAspectRatio="xMaxYMax meet" width="100%" height="100%" />
              </n-button>
            </div>
          </div>
        </div>
      </div>
      <n-popover trigger="manual" :x="posX" :y="posY" :show="showDropdown" @clickoutside="showDropdown = false">
        <div class="flex-col items-center text-4 gap-y-2">
          <div>{{ t('to install') }}</div>
          <div
            v-for="item in installOptions"
            :key="item.id"
            class="w-full flex-center hover:(cursor-pointer bg-gray-400 duration-500)"
            @click="handleInstall(item)"
          >
            <span class="mr-2">{{ item.name }}</span>
            <n-button v-if="item.isInstall" text>
              <icon-material-symbols-download class="text-5" />
            </n-button>
            <n-button v-else text>
              <icon-material-symbols-download-done class="text-5" />
            </n-button>
          </div>
        </div>
      </n-popover>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { fetch } from '@tauri-apps/api/http'
  import { open } from '@tauri-apps/api/shell'
  import { useInfiniteScroll, useMouse } from '@vueuse/core'
  import { SettingModal, DownloadQueue } from './components'
  import type { ModDataBody, ModData, ProfilePage, InstallOption } from './interface'
  import { useSettingStore } from '@/stores'

  const props = defineProps<{
    modList: Mod[]
  }>()
  const emits = defineEmits<{
    (e: 'page:change', value: number): void
  }>()

  const { t } = useI18n()

  const settingRef = ref<InstanceType<typeof SettingModal>>()
  const downloadQueueRef = ref<InstanceType<typeof DownloadQueue>>()

  const settingStore = useSettingStore()
  const { mod } = settingStore

  const pageIndex = ref(1)
  const modDataList = ref<ModData[]>([])
  const modIds = computed(() => props.modList.map(item => item.id))
  const total = ref(0)
  const isEnd = ref(false)
  const requesting = ref(false)
  const downloading = ref(false)

  async function getModDataBody() {
    try {
      const { status, data } = await fetch<ModDataBody>(
        `https://gamebanana.com/apiv10/Mod/Index?_nPage=${pageIndex.value}&_nPerpage=50&_aFilters%5BGeneric_Game%5D=8552`,
        { method: 'GET', timeout: 30 }
      )
      if (status === 200) {
        total.value = data._aMetadata._nRecordCount
        const records = data._aRecords
        const size = records.length
        if (size == 0) {
          isEnd.value = true
          return
        }
        modDataList.value.push(
          ...records.map(
            ({
              _idRow,
              _sName,
              _sProfileUrl,
              _aSubmitter,
              _nViewCount,
              _nLikeCount,
              _aPreviewMedia,
              _sInitialVisibility
            }) => ({
              id: _idRow,
              name: _sName,
              url: _sProfileUrl,
              author: _aSubmitter._sName,
              authorUrl: _aSubmitter._sProfileUrl,
              viewCount: numberFormat(_nViewCount ?? 0),
              likeCount: numberFormat(_nLikeCount ?? 0),
              nsfw: _sInitialVisibility !== 'show',
              images: _aPreviewMedia._aImages.map(({ _sBaseUrl, _sFile220 }) => _sBaseUrl + '/' + _sFile220)
            })
          )
        )
      }
    } catch (error) {
      window.$message?.error(t('network error'))
    }
  }

  const showDropdown = ref(false)
  const posX = ref(0)
  const posY = ref(0)
  const installOptions = ref<InstallOption[]>([])
  const { x, y } = useMouse()

  async function handleInstallList(item: ModData) {
    if (!mod.path) {
      settingRef.value?.showWarning()
      return
    }
    setTimeout(() => {
      posX.value = x.value
      posY.value = y.value
    }, 150)
    try {
      const { id, images, author, authorUrl } = item
      const { status, data } = await fetch<ProfilePage>(`https://gamebanana.com/apiv10/Mod/${id}/ProfilePage`, {
        method: 'GET',
        timeout: 30
      })
      if (status === 200) {
        const submitter = { name: author, url: authorUrl }
        showDropdown.value = true
        installOptions.value = data._aFiles.map(({ _idRow, _sDownloadUrl, _sFile }) => ({
          id: _idRow,
          url: _sDownloadUrl,
          name: _sFile,
          isInstall: !modIds.value.includes(_idRow),
          images,
          submitter
        }))
      }
    } catch (error) {
      window.$message?.error(t('network error'))
    }
  }

  async function handleInstall(mod: InstallOption) {
    if (installOptions.value.length === 1) {
      showDropdown.value = false
    }

    await downloadQueueRef.value?.push(mod)
  }

  const modListRef = ref<HTMLElement | null>(null)
  useInfiniteScroll(modListRef, () => infiniteScroll(), { distance: 300 })

  async function infiniteScroll() {
    if (isEnd.value) return
    requesting.value = true
    await getModDataBody()
    pageIndex.value++
    requesting.value = false
  }

  async function init() {
    await infiniteScroll()
    nextTick(() => {
      if (!modListRef.value) return
      const { clientHeight, scrollHeight } = modListRef.value
      if (clientHeight >= scrollHeight - 2) infiniteScroll()
    })
  }

  onMounted(() => init())

  function numberFormat(num: number) {
    if (num < 1000) return num
    return (num / 1000).toFixed(1) + 'k'
  }
</script>
