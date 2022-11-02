<template>
  <div ref="modListRef" class="of-auto">
    <div class="grid gap-1 py-1 px-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
      <div
        v-for="(item, index) in modDataList"
        :key="index"
        class="flex-col items-center aspect-ratio-14/17 border-slate-400 border-1 bg-black/10"
      >
        <div class="flex-col items-center text-2 text-center font-bold">
          <span class="cursor-pointer hover:(underline decoration-teal-400)" @click="open(item.url)">{{
            item.name
          }}</span>
          <span class="cursor-pointer hover:(underline decoration-teal-400)" @click="open(item.authorUrl)">{{
            item.author
          }}</span>
        </div>
        <div
          class="w-full grow bg-center bg-no-repeat hover:(cursor-pointer opacity-75 transition-opacity-500)"
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
            <n-button v-if="item.install" text class="w-40%" @click="handleInstallList(item.id)">
              <icon-material-symbols-download preserveAspectRatio="xMaxYMax meet" width="100%" height="100%" />
            </n-button>
            <n-button v-else text @click="handleInstallList(item.id)">
              <icon-material-symbols-download-done preserveAspectRatio="xMaxYMax meet" width="100%" height="100%" />
            </n-button>
          </div>
        </div>
      </div>
    </div>
    <n-popover trigger="manual" :x="positionX" :y="positionY" :show="showDropdown" @clickoutside="handleClickoutside">
      <div class="flex-col items-center text-4 gap-y-2">
        <div>请点击选择进行下载安装</div>
        <div
          v-for="item in installOptions"
          :key="item.id"
          class="w-full flex-center hover:(cursor-pointer bg-gray-500 duration-500)"
          @click="handleInstall(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </n-popover>
  </div>
</template>

<script setup lang="ts">
  import { fetch } from '@tauri-apps/api/http'
  import { open } from '@tauri-apps/api/shell'
  import { useScroll, useMouse } from '@vueuse/core'
  import { useSettingStore } from '@/stores'
  import { download } from '@/utils'

  interface ModDataBody {
    _aMetadata: {
      _nRecordCount: number
    }
    _aRecords: {
      _idRow: number
      _sName: string
      _sProfileUrl: string
      _nViewCount?: number
      _nLikeCount?: number
      _aPreviewMedia: {
        _aImages: { _sBaseUrl: string; _sFile220: string }[]
      }
      _aSubmitter: { _sName: string; _sProfileUrl: string }
    }[]
  }

  interface ModData {
    id: number
    name: string
    url: string
    author: string
    authorUrl: string
    images: string[]
    viewCount: number | string
    likeCount: number | string
    install: boolean
  }

  interface ProfilePage {
    _aCategory: { _idRow: number }
    _aFiles: {
      _idRow: number
      _nFilesize: number
      _sDownloadUrl: string
      _sFile: string
      _sMd5Checksum: string
    }[]
  }

  const props = defineProps<{
    modList: Mod[]
    keyword: string
  }>()

  const settingStore = useSettingStore()

  const pageIndex = ref(1)
  const modDataList = ref<ModData[]>([])
  const modIds = computed(() => props.modList.map(item => item.id))
  const total = ref(0)
  const isEnd = ref(false)
  const loading = ref(false)

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
          ...records.map(({ _idRow, _sName, _sProfileUrl, _aSubmitter, _nViewCount, _nLikeCount, _aPreviewMedia }) => ({
            id: _idRow,
            name: _sName,
            url: _sProfileUrl,
            author: _aSubmitter._sName,
            authorUrl: _aSubmitter._sProfileUrl,
            viewCount: numberFormat(_nViewCount ?? 0),
            likeCount: numberFormat(_nLikeCount ?? 0),
            images: _aPreviewMedia._aImages.map(({ _sBaseUrl, _sFile220 }) => _sBaseUrl + '/' + _sFile220),
            install: !modIds.value.includes(_idRow)
          }))
        )
      }
    } catch (error) {
      window.$message?.error('网络错误')
    }
  }

  interface InstallOption {
    id: number
    url: string
    name: string
  }

  const showDropdown = ref(false)
  const positionX = ref(0)
  const positionY = ref(0)
  const installOptions = ref<InstallOption[]>([])
  const { x, y } = useMouse()

  async function handleInstallList(id: number) {
    if (!settingStore.mod.path) {
      emits('show:setting')
      return
    }
    setTimeout(() => {
      positionX.value = x.value
      positionY.value = y.value
    }, 150)
    try {
      const { status, data } = await fetch<ProfilePage>(`https://gamebanana.com/apiv10/Mod/${id}/ProfilePage`, {
        method: 'GET',
        timeout: 30
      })
      if (status === 200) {
        showDropdown.value = true
        installOptions.value = data._aFiles.map(({ _idRow, _sDownloadUrl, _sFile }) => ({
          id: _idRow,
          url: _sDownloadUrl,
          name: _sFile
        }))
      }
    } catch (error) {
      window.$message?.error('网络错误')
    }
  }

  async function handleInstall(item: InstallOption) {
    const { id, url, name } = item
    try {
      await download(url, settingStore.getModPath + 'gamebanana/' + id + '/' + name)
    } catch (error) {
      window.$message?.error(error as string)
    }
  }

  function handleClickoutside() {
    showDropdown.value = false
  }

  const modListRef = ref<HTMLElement | null>(null)
  const { arrivedState } = useScroll(modListRef, { offset: { bottom: 300 } })
  const { bottom } = toRefs(arrivedState)

  async function infiniteScroll() {
    if (isEnd.value) return

    loading.value = true
    await getModDataBody()
    pageIndex.value++
    loading.value = false

    nextTick(() => {
      if (modListRef.value) {
        const { clientHeight, scrollHeight } = modListRef.value
        if (clientHeight >= scrollHeight - 2) {
          infiniteScroll()
        }
      }
    })
  }

  const emits = defineEmits<{
    (e: 'update:num', value: string): void
    (e: 'show:setting'): void
  }>()

  onActivated(() => {
    emits('update:num', 'total: ' + total.value)
    infiniteScroll()
  })

  watch(bottom, (newVal, _oldVal) => {
    if (newVal) {
      infiniteScroll()
    }
  })

  watchEffect(() => emits('update:num', 'total: ' + total.value))

  function numberFormat(num: number) {
    if (num < 1000) return num
    return (num / 1000).toFixed(1) + 'k'
  }
</script>

<style scoped lang="scss">
  :deep(.n-checkbox .n-checkbox-box) {
    height: 100%;
    width: 100%;
  }
  :deep(.n-checkbox .n-checkbox-box-wrapper) {
    height: 100%;
    width: 100%;
  }
</style>
