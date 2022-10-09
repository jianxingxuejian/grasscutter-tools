<template>
  <div class="flex-col items-center">
    <div class="text-6">TODO</div>
    <div class="flex justify-center">
      <span class="text-4 mr-4">System Proxy</span>
      <n-switch v-model:value="setting.proxy.enable" />
      <n-input-number v-if="setting.proxy.enable" v-model:value="setting.proxy.port" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useSettingStore } from '@/stores'

  const setting = useSettingStore()
</script>
