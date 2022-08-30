<template>
  <div>
    <n-input :value="settingStore.mod_path" />
    <n-button @click="handleClick">点击</n-button>
    <n-button @click="getModList">点击</n-button>
  </div>
</template>

<script setup lang="ts">
  import { open } from '@tauri-apps/api/dialog'
  import { invoke } from '@tauri-apps/api/tauri'
  import { useSettingStore } from '@/store'

  const settingStore = useSettingStore()
  const { getModPath, updateModPath } = settingStore

  async function handleClick() {
    const newPath = (await open()) as string
    if (newPath) {
      await updateModPath(newPath)
    }
  }

  async function getModList() {
    const mod_list = await invoke<Record<string, string>>('get_mod_list', { path: getModPath })
    Object.entries(mod_list).forEach(([k, v]) => {
      console.log(k)
      console.log(JSON.parse(v))
    })
  }
</script>
