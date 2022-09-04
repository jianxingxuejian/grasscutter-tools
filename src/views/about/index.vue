<template>
  <div class="flex-center flex-col gap-5 text-5">
    <span>{{ t('t1') }}null</span>
    <span>{{ t('t2') }}1.3.0</span>
    <span>{{ t('t3') }}1.2.2</span>
    <div>
      <span>{{ t('t4') }}</span>
      <n-a href="https://github.com/jianxingxuejian/grasscutter-tools" target="_blank">
        https://github.com/jianxingxuejian/grasscutter-tools
      </n-a>
    </div>
    <div>
      <span>{{ t('t5') }}</span>
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
  "t2": "客户端版本：",
  "t3": "插件版本：",
  "t4": "项目地址：",
  "t5": "服务端所需插件："
}
</i18n>

<i18n locale="en-US" lang="json">
{
  "t1": "Author：",
  "t2": "Client version：",
  "t3": "Plugin version：",
  "t4": "Project address：",
  "t5": "Server plugins："
}
</i18n>
