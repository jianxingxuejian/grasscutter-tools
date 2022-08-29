<template>
  <div>
    <n-input :value="settingStore.mod_path" />
    <n-button @click="handleClick">点击</n-button>
  </div>
</template>

<script setup lang="ts">
  import { open } from '@tauri-apps/api/dialog'
  import { useSettingStore } from '@/store'

  const settingStore = useSettingStore()
  const { updateModPath } = settingStore

  async function handleClick() {
    const path = (await open()) as string
    if (path) {
      await updateModPath(path)
    }
  }
</script>
