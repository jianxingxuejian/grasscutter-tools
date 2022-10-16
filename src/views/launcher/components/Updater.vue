<template>
  <n-modal v-model:show="showModal" :mask-closable="false" class="w-50%">
    <n-card>
      <n-spin :show="loading">
        <div class="flex-col items-center">
          <div class="text-5">{{ t('t1') }}</div>
          <div id="content"></div>
          <n-space class="flex-center mt-4">
            <n-button @click="showModal = false">{{ t('t2') }}</n-button>
            <n-button type="success" @click="handleUpdate">{{ t('t3') }}</n-button>
          </n-space>
        </div>
      </n-spin>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import snarkdown from 'snarkdown'
  import { installUpdate } from '@tauri-apps/api/updater'
  import { relaunch } from '@tauri-apps/api/process'

  const { t } = useI18n()

  const loading = ref(false)
  const showModal = ref(false)

  async function handleUpdate() {
    try {
      loading.value = true
      await installUpdate()
      window.$dialog?.success({
        title: t('t4'),
        content: t('t5'),
        negativeText: t('t2'),
        positiveText: t('t6'),
        onPositiveClick: () => relaunch()
      })
    } catch (error) {
      window.$notification?.error({
        title: t('n1'),
        description: `error: ${error}`,
        content: t('n2')
      })
    } finally {
      loading.value = false
    }
  }

  function open(notes?: string) {
    if (notes) {
      showModal.value = true
      nextTick(() => {
        const content = document.getElementById('content')
        if (content) {
          content.innerHTML = snarkdown(notes)
        }
      })
    }
  }

  defineExpose({ open })
</script>

<style lang="scss" scope>
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  ul {
    list-style-type: disc;
    margin-left: 1.5rem;
  }
</style>

<i18n locale="zh-CN" lang="json">
{
  "t1": "发现新版本！",
  "t2": "取消",
  "t3": "升级",
  "t4": "安装成功",
  "t5": "是否重新启动",
  "t6": "重新启动",
  "n1": "安装更新包失败",
  "n2": "请尝试重试，如果多次失败则检查网络情况或者在Github提个issue"
}
</i18n>

<i18n locale="en-US" lang="json">
{
  "t1": "Discover the new version!",
  "t2": "Cancle",
  "t3": "Update",
  "t4": "Install success",
  "t5": "Whether to relaunch",
  "t6": "Reluanch",
  "t7": "确定",
  "n1": "Failed to install update package",
  "n2": "Please try to retry, if it fails several times, check the network situation or open an issue in Github"
}
</i18n>
