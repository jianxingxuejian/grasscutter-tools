<template>
  <div>
    <n-input :value="settingStore.mod_path" />
    <n-button @click="handleClick">点击</n-button>
    <n-button @click="getModList">点击</n-button>
    <n-space>
      <n-input-number v-model:value="width" />
      <n-input-number v-model:value="height" />
    </n-space>
    <n-grid cols="s:4 m:5 l:6 xl:7 2xl:8" responsive="screen" class="p-2">
      <n-gi v-for="item in modList" :key="item.path" class="h-auto p-2 flex-col" :style="style">
        <n-input v-model:value="item.name" round />
        <n-image
          lazy
          preview-disabled
          :src="item.images[0]"
          :intersection-observer-options="{
            root: '#app'
          }"
          class="rd-3"
          @error="loadLocalImg(item)"
        />
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
    console.log(modList.value)
  }

  function loadLocalImg(mod: Mod) {
    console.log(mod.path)
  }
</script>
