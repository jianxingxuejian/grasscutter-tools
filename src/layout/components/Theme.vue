<template>
  <div class="flex-center" @click="updateTheme">
    <icon-line-md-sun-rising-loop v-if="settingStore.theme === 'light'" class="text-8 outline-unset cursor-pointer" />
    <icon-line-md-moon-twotone v-else class="text-8 outline-unset cursor-pointer" />
  </div>
</template>

<script setup lang="ts">
  import { useSettingStore } from '@/stores'

  const settingStore = useSettingStore()
  const { updateTheme } = settingStore
</script>
