<template>
  <div class="flex-center flex-col gap-5 text-5">
    <span>{{ t('auther') }}: null</span>
    <span>{{ t('client ver') }}: 1.4.11</span>
    <span>{{ t('plugin ver') }}: 1.4.1</span>
    <div>
      <span>{{ t('project addr') }}: </span>
      <n-a href="https://github.com/jianxingxuejian/grasscutter-tools" target="_blank">
        https://github.com/jianxingxuejian/grasscutter-tools
      </n-a>
    </div>
    <div>
      <span>{{ t('server plugin') }}: </span>
      <n-a href="https://github.com/jianxingxuejian/grasscutter-plugin" target="_blank">
        https://github.com/jianxingxuejian/grasscutter-plugin
      </n-a>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>
