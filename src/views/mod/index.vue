<template>
  <div>
    <div class="flex-center">
      <n-space>
        <n-input v-model:value="keyword" @input="filterAndSort" />
        <my-button @click="settingRef?.show">
          <icon-ic-outline-settings />
        </my-button>
      </n-space>
    </div>
    <setting-modal ref="settingRef" @update:mod-list="loadModList" />
    <n-grid cols="s:5 m:6 l:7 xl:8 2xl:9" responsive="screen" class="p-2">
      <n-gi v-for="(item, index) in showList" :key="index" class="h-auto p-1 flex-col" :style="style">
        <n-input v-model:value="item.name" size="small" class="text-center" @change="writeFile(item)" />
        <n-input v-model:value="item.submitter.name" size="small" class="text-center" @change="writeFile(item)" />
        <div class="grow relative hover:(cursor-pointer opacity-50 transition-opacity-300)">
          <div class="absolute h-full w-full flex-col flex-center z1 opacity-0 hover:(opacity-100 transition-opacity-300)">
            <n-checkbox
              :checked="item.enabled"
              class="w-25% h-auto aspect-ratio-1"
              @click="handleCheck(item)"
              @mouseleave="filterAndSort"
            />
            <n-button text class="w-30% h-30%">
              <icon-material-symbols-folder-open-outline
                preserveAspectRatio="xMaxYMax meet"
                width="100%"
                height="100%"
                @click="open_dir(item.path)"
              />
            </n-button>
          </div>
          <n-image
            lazy
            preview-disabled
            object-fit="contain"
            :src="item.images[0]"
            :intersection-observer-options="{
              root: '#app'
            }"
            class="rd-1 absolute z0 h-full w-full"
            @error="loadLocalImg(item, $event)"
          />
        </div>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
  import { SettingModal } from './components'
  import { useSettingStore } from '@/stores'
  import { get_mod_list, read_local_img, open_dir, rename, write_file } from '@/utils'

  const settingRef = ref<InstanceType<typeof SettingModal>>()

  const settingStore = useSettingStore()

  const modList = ref<Mod[]>([])
  const showList = ref<Mod[]>([])
  const keyword = ref('')

  const style = computed(() => `aspect-ratio: ${settingStore.mod.width}/${settingStore.mod.height}`)

  async function writeFile(mod: Mod) {
    await write_file(mod)
    filterAndSort()
  }

  function filterAndSort() {
    showList.value = modList.value
      .filter(item => item.name && (item.name.includes(keyword.value) || item.submitter.name.includes(keyword.value)))
      .sort((next, pre) => {
        if (next.enabled && !pre.enabled) {
          return -1
        } else if (next.enabled == pre.enabled) {
          return next.name.localeCompare(pre.name, settingStore.locale)
        }
        return 0
      })
  }

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

  async function loadLocalImg(mod: Mod, event: Event) {
    if (/(http|https):\/\/([\w.]+\/?)\S*/.test(mod.images[0])) return
    const url = await read_local_img(mod.path)
    const img = event.target as HTMLImageElement
    img.src = url
  }

  async function loadModList() {
    modList.value = []
    showList.value = []
    try {
      modList.value = await get_mod_list(settingStore.getModPath)
      showList.value = modList.value
      filterAndSort()
    } catch (e) {
      window.$message?.warning("didn't found mods path")
    }
  }

  loadModList()
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
