<template>
  <n-modal v-model:show="showModal" :mask-closable="false" class="w-50%">
    <n-card>
      <n-spin :show="loading">
        <div class="flex-col items-center">
          <div class="text-5">{{ t('new ver discover') }}</div>
          <div id="content"></div>
          <n-space class="flex-center mt-4">
            <n-button @click="showModal = false">{{ t('cancel') }}</n-button>
            <n-button type="success" @click="handleUpdate">{{ t('update') }}</n-button>
          </n-space>
        </div>
      </n-spin>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import snarkdown from 'snarkdown'
  import { updater, process } from '@tauri-apps/api'

  defineExpose({ open })

  const { t } = useI18n()

  const loading = ref(false)
  const showModal = ref(false)

  async function handleUpdate() {
    try {
      loading.value = true
      await updater.installUpdate()
      window.$dialog?.success({
        title: t('install successful'),
        content: t('whether relaunch'),
        negativeText: t('cancel'),
        positiveText: t('relaunch'),
        onPositiveClick: () => process.relaunch()
      })
    } catch (error) {
      window.$notification?.error({
        title: t('failed to update'),
        description: `error: ${error}`,
        content: t('try again')
      })
    } finally {
      loading.value = false
    }
  }

  function open(notes?: string) {
    if (!notes) return

    showModal.value = true
    nextTick(() => {
      const content = document.getElementById('content')
      if (!content) return
      content.innerHTML = snarkdown(notes)
    })
  }
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
