<template>
  <div class="flex-center flex-col gap-5 text-5">
    <span>{{ t('t1') }}null</span>
    <span>{{ t('t2') }}1.0.0</span>
    <div>
      <span>{{ t('t3') }}</span>
      <n-a href="https://github.com/jianxingxuejian/grasscutter-tools" target="_blank">
        https://github.com/jianxingxuejian/grasscutter-tools
      </n-a>
    </div>
    <div>
      <span>{{ t('t4') }}</span>
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

<i18n locale="zh-CN" lang="json">
{
  "t1": "作者：",
  "t2": "版本：",
  "t3": "项目地址：",
  "t4": "服务端所需插件："
}
</i18n>

<i18n locale="en-US" lang="json">
{
  "t1": "Author：",
  "t2": "Version：",
  "t3": "Project address：",
  "t4": "Server plugins："
}
</i18n>
