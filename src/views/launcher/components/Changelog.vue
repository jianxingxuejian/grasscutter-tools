<template>
  <n-modal v-model:show="showModal" class="w-40% of-auto">
    <n-card class="h-80vh">
      <div class="flex-col items-center">
        <div class="text-8">{{ t('changelog') }}</div>
        <div id="content"></div>
      </div>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import snarkdown from 'snarkdown'
  import { useSettingStore } from '@/stores'
  import { parseMd } from '@/utils'
  import changelog_ch from '~/CHANGELOG.zh-CN.md?raw'
  import changelog_en from '~/CHANGELOG.en-US.md?raw'

  defineExpose({ open })

  const { t } = useI18n()
  const settingStore = useSettingStore()

  const showModal = ref(false)

  function open() {
    showModal.value = true
    nextTick(() => {
      const content = document.getElementById('content')
      if (!content) return

      let changelog: string
      if (settingStore.locale === 'zh-CN') {
        changelog = changelog_ch
      } else {
        changelog = changelog_en
      }
      content.innerHTML = snarkdown(parseMd(changelog))
    })
  }
</script>

<style lang="scss" scope>
  h2 {
    font-size: 1.75rem !important;
    margin-top: 0.5rem;
    text-align: center;
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }
  ul {
    list-style-type: disc;
    margin-left: 1.5rem;
  }
</style>
