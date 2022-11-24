<template>
  <div class="flex-center">
    <n-popselect v-model:value="settingStore.locale" :options="languageOptions" @update:value="updateLocale">
      <icon-ion-language class="text-8 outline-unset" />
    </n-popselect>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useSettingStore } from '@/stores'

  const languageOptions = [
    { label: '中文', value: 'zh-CN' },
    { label: 'English', value: 'en' },
    { label: '日本語', value: 'ja-JP' },
    { label: 'Español', value: 'es' }
  ]

  const settingStore = useSettingStore()
  const { updateLocale } = settingStore

  const { locale } = useI18n({ useScope: 'global' })
  watchEffect(() => (locale.value = settingStore.locale))
</script>
