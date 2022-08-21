<template>
  <div class="flex-center">
    <icon-line-md-sun-rising-loop v-if="settingsStore.theme === 'light'" class="text-8 outline-unset cursor-pointer" @click="handleDark" />
    <icon-line-md-moon-twotone v-else class="text-8 outline-unset cursor-pointer" @click="handleLight" />
  </div>
</template>

<script setup lang="ts">
  import { useSettingsStore } from '@/store'

  const settingsStore = useSettingsStore()
  const { updateTheme } = settingsStore

  function handleDark() {
    settingsStore.theme = 'dark'
    updateTheme()
  }
  function handleLight() {
    settingsStore.theme = 'light'
    updateTheme()
  }
</script>
