<template>
  <div class="px-10 flex-col items-center">
    <div class="flex w-full items-center">
      <n-input v-model:value="command" type="textarea" />
      <my-button type="primary" class="ml-10" :text="t('b1')" @click-async="sendCommand">
        <icon-line-md-chevron-small-triple-left />
      </my-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { playerCommand } from '@/http'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const command = ref('')

  async function sendCommand() {
    const result = await playerCommand(command.value.slice(1))
    if (result?.msg) {
      window.$message?.success(result.msg)
    }
  }
</script>

<i18n locale="zh-CN" lang="json">
{
  "b1": "执行"
}
</i18n>

<i18n locale="en-US" lang="json">
{
  "b1": "Execute"
}
</i18n>
