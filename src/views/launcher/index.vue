<template>
  <div class="flex-col px-10">
    <div class="text-6 flex-center">TODO</div>
    <n-space class="flex-center">
      <span class="text-6">{{ t('t1') }}</span>
      <n-switch :value="setting.proxy.enable" @update:value="updateProxy({ enable: $event })" />
      <!-- <n-input-number v-if="setting.proxy.enable" :show-button="false" class="w-22!" /> -->
    </n-space>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useSettingStore } from '@/stores'

  const { t } = useI18n()

  const setting = useSettingStore()
  const { updateProxy } = useSettingStore()
</script>

<i18n locale="zh-CN" lang="json">
{
  "t1": "系统代理"
}
</i18n>

<i18n locale="en-US" lang="json">
{
  "t1": "Proxy System"
}
</i18n>
