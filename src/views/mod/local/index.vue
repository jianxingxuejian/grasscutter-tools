<template>
  <div class="h-full w-full flex-col">
    <div class="flex-center mb-1">
      <n-space class="items-center">
        <n-cascader
          v-model:value="select"
          :options="optionsHas"
          multiple
          clearable
          filterable
          trigger="hover"
          check-strategy="parent"
          max-tag-count="responsive"
          class="w-50"
          @update:value="select = $event"
        />
        <span class="text-4">{{ enabledNum + '/' + modList.length }}</span>
        <n-input v-model:value="keyword" clearable class="w-37!" />
        <my-button @click="settingRef?.show">
          <icon-ic-outline-settings />
        </my-button>
        <my-button @click="handleReload">
          <icon-material-symbols-rotate-right :class="{ 'animate-spin': loadingReload }" />
        </my-button>
        <n-a class="text-4" @click="emits('page:change', 1)"> {{ t('mods download') }} </n-a>
      </n-space>
      <setting-modal ref="settingRef" />
    </div>
    <n-grid cols="s:5 m:6 l:7 xl:8 2xl:9" responsive="screen" class="px-4 of-auto">
      <n-gi
        v-for="item in showList"
        :key="item.path"
        class="h-auto m-0.5 flex-col border-slate-400 border-1"
        :style="style"
      >
        <n-input
          v-show="mod.showName"
          v-model:value="item.name"
          size="small"
          class="text-center bg-black/10"
          style="border-radius: 0"
          @change="write_file(item)"
        />
        <n-input
          v-show="mod.showAuthor"
          v-model:value="item.submitter.name"
          size="small"
          class="text-center bg-black/10"
          style="border-radius: 0"
          @change="write_file(item)"
        />
        <div class="grow relative bg-black/10 hover:(cursor-pointer opacity-50 transition-opacity-300)">
          <div
            class="absolute h-full w-full flex-col flex-center z1 opacity-0 hover:(opacity-100 transition-opacity-300)"
          >
            <n-checkbox :checked="item.enabled" class="w-25% h-auto aspect-ratio-1" @click="handleCheck(item)" />
            <n-button text class="w-30% h-30%">
              <icon-material-symbols-folder-open-outline
                preserveAspectRatio="xMaxYMax meet"
                width="100%"
                height="100%"
                @click="open_dir(item.path)"
              />
            </n-button>
            <n-dropdown
              trigger="hover"
              :options="optionsAll"
              key-field="value"
              @select="handleSelectType($event, item)"
            >
              <n-button text class="w-30%">
                <icon-carbon-category preserveAspectRatio="xMaxYMax meet" width="100%" height="100%" />
              </n-button>
            </n-dropdown>
          </div>
          <n-image
            lazy
            preview-disabled
            object-fit="contain"
            :src="item.src"
            :intersection-observer-options="{ root: '#app' }"
            class="rd-1 absolute z0 h-full w-full justify-center p-1 border-slate-400"
          />
        </div>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useThrottleFn } from '@vueuse/core'
  import { uniq } from 'lodash-es'
  import { SettingModal } from './components'
  import { useSettingStore } from '@/stores'
  import { open_dir, rename, write_file } from '@/utils'
  import { characterIds } from '../constant'

  const props = defineProps<{
    modList: Mod[]
  }>()
  const emits = defineEmits<{
    (e: 'list:reload'): void
    (e: 'page:change', value: number): void
  }>()

  const { t } = useI18n()

  const settingRef = ref<InstanceType<typeof SettingModal>>()

  const settingStore = useSettingStore()
  const { mod } = settingStore

  const select = ref<number[]>([])
  const optionsHas = computed(() => [
    {
      value: 1,
      label: t('characters'),
      children: uniq(props.modList.filter(item => item.modId).map(item => item.modId)).map(item => ({
        value: item,
        label: t(item!)
      }))
    },
    { value: 2, label: t('weapons') },
    { value: 3, label: t('npc') },
    { value: 4, label: t('enemy') },
    { value: 10, label: t('misc') }
  ])
  const optionsAll = computed(() => [
    { value: 1, label: t('characters'), children: characterIds.map(item => ({ value: item, label: t(item) })) },
    { value: 2, label: t('weapons') },
    { value: 3, label: t('npc') },
    { value: 4, label: t('enemy') },
    { value: 10, label: t('misc') }
  ])

  function handleSelectType(key: number, mod: Mod) {
    if (key > 10) {
      mod.type = 1
      mod.modId = key
    } else {
      mod.type = key
    }
    write_file(mod)
  }

  const keyword = ref('')
  const enabledNum = computed(() => props.modList.filter(item => item.enabled).length)
  const loadingReload = ref(false)

  const showList = computed(() =>
    props.modList
      .filter(
        item =>
          select.value.length == 0 ||
          (item.type && select.value.includes(item.type)) ||
          (item.modId && select.value.includes(item.modId))
      )
      .filter(item => item.name.includes(keyword.value) || item.submitter.name.includes(keyword.value))
  )

  const style = computed(() => `aspect-ratio: ${mod.width}/${mod.height}`)

  async function handleCheck(mod: Mod) {
    const { enabled, path } = mod
    const index = path.lastIndexOf('/') + 1
    let newPath
    if (enabled) {
      newPath = path.slice(0, index) + 'DISABLED_' + path.slice(index)
    } else {
      newPath = path.replace('DISABLED_', '')
    }
    await rename(path, newPath)
    mod.path = newPath
    mod.enabled = !enabled
  }

  const handleReload = useThrottleFn(() => {
    loadingReload.value = true
    emits('list:reload')
    setTimeout(() => (loadingReload.value = false), 1000)
  }, 1000)

  onMounted(() => {
    if (!mod.path) settingRef.value?.showWarning()
  })
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
