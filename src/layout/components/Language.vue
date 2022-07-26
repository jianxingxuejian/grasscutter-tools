<template>
  <div class="flex-center">
    <n-popselect v-model:value="settingsStore.locale" :options="languageOptions" @update:value="updateLocale">
      <icon-ion-language class="text-8 outline-unset" />
    </n-popselect>
  </div>
</template>

<script setup lang="ts">
  import { useSettingsStore } from '@/store'

  const languageOptions = [
    { label: '中文', value: 'zh-CN' },
    { label: 'English', value: 'en-US' }
  ]

  const settingsStore = useSettingsStore()
  const { updateLocale } = settingsStore
</script>
