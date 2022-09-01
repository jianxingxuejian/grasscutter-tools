<template>
  <div>
    <n-input :value="settingStore.mod_path" />
    <n-button @click="handleClick">点击</n-button>
    <n-button @click="getModList">点击</n-button>
    <n-space>
      <n-input-number v-model:value="width" />
      <n-input-number v-model:value="height" />
    </n-space>
    <n-grid cols="s:5 m:6 l:7 xl:8 2xl:9" responsive="screen" class="p-2">
      <n-gi v-for="item in modList" :key="item.path" class="h-auto p-2 flex-col" :style="style">
        <n-input v-model:value="item.name" round size="small" class="text-center" />
        <n-input v-model:value="item.submitter.name" round size="small" class="text-center" />
        <div class="grow relative hover:(cursor-pointer opacity-50 transition-opacity-300)">
          <div class="absolute h-full w-full flex-col flex-center z1 opacity-0 hover:(opacity-100 transition-opacity-300)">
            <n-checkbox class="" />
            <n-button text class="w-30% h-30%">
              <icon-material-symbols-folder-open-outline preserveAspectRatio="xMaxYMax meet" width="100%" height="100%" />
            </n-button>
          </div>
          <n-image
            lazy
            preview-disabled
            :src="item.images[0]"
            :intersection-observer-options="{
              root: '#app'
            }"
            class="rd-3 absolute z0"
            @error="loadLocalImg(item, $event)"
          />
        </div>
      </n-gi>
    </n-grid>
    <div id="img-list" class="grid gap-8 of-auto"></div>
  </div>
</template>

<script setup lang="ts">
  import { open } from '@tauri-apps/api/dialog'
  import { invoke } from '@tauri-apps/api/tauri'
  import { useSettingStore } from '@/store'

  const settingStore = useSettingStore()
  const { getModPath, updateModPath } = settingStore

  const width = ref(9)
  const height = ref(16)
  const style = computed(() => `aspect-ratio: ${width.value}/${height.value}`)

  async function handleClick() {
    const newPath = (await open()) as string
    if (newPath) {
      await updateModPath(newPath)
    }
  }

  interface Mod {
    path: string
    id: number
    name: string
    images: string[]
    submitter: {
      name: string
      url: string
    }
  }

  const modList = ref<Mod[]>([])

  async function getModList() {
    const mod_list = await invoke<Record<string, string>>('get_mod_list', { path: getModPath })
    modList.value = []
    Object.entries(mod_list).forEach(([k, v]) => {
      const mod = JSON.parse(v)
      modList.value.push({ path: k, ...mod })
    })
  }

  async function loadLocalImg(mod: Mod, event: Event) {
    const url = await invoke<string>('read_local_img', { path: mod.path })
    const img = event.target as HTMLImageElement
    img.src = url
  }

  getModList()
</script>

<style lang="scss" scoped>
  .n-checkbox {
  }
  :deep(.n-checkbox .n-checkbox-box-wrapper) {
  }
</style>
