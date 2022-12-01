<template>
  <div class="flex-col flex-center gap-5 text-5">
    <span class="w-75%">{{ t('about project') }}</span>
    <span>{{ t('auther') }}: null</span>
    <div class="flex text-10 gap-x-4 cursor-pointer">
      <a href="https://github.com/jianxingxuejian/grasscutter-tools" target="_blank">
        <icon-carbon-logo-github />
      </a>
      <a href="https://discord.com/invite/qGyWhAUApU" target="_blank">
        <icon-carbon-logo-discord />
      </a>
      <a
        href="https://qm.qq.com/cgi-bin/qm/qr?k=0VnTLjWPz76RSScycDyp2_X68w6b73gO&jump_from=webapi&authKey=AO4rT4mzAw8krhEVDIMECCwFX7wRmGJA9+ui7AK7aQRA3l5BCeS1h/3pXT2MCkzZ"
        target="_blank"
      >
        <icon-icon-park-solid-tencent-qq v-if="settingStore.locale === 'zh-CN'" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useSettingStore } from '@/stores'

  const settingStore = useSettingStore()

  const { t } = useI18n()
</script>
