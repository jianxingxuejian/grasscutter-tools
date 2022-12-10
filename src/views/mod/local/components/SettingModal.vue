<template>
  <n-modal v-model:show="showModal" preset="card" :title="t('mod settings')" :auto-focus="false" class="w-80%">
    <div class="flex-col items-center gap-y-5">
      <select-file
        :value="mod.path"
        :button-text="t('select')"
        :placeholder="t('select 3dm')"
        @click="handleSelectPath"
      />
      <n-space class="items-center">
        <span>{{ t('img aspect ratio') }}</span>
        <n-input-number v-model:value="mod.width" class="w-50" />
        <n-input-number v-model:value="mod.height" class="w-50" />
      </n-space>
      <n-space>
        <span>{{ t('show name') }}</span>
        <n-switch v-model:value="mod.showName" />
        <span>{{ t('show author') }}</span>
        <n-switch v-model:value="mod.showAuthor" />
      </n-space>
      <n-button type="success" @click="updateModPath()">{{ t('save') }}</n-button>
    </div>
  </n-modal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useSettingStore } from '@/stores'
  import { select_file } from '@/utils'

  const emits = defineEmits<{ (e: 'update:modList'): void }>()
  defineExpose({ show, showWarning })

  const { t } = useI18n()
  const settingStore = useSettingStore()
  const { mod, updateModPath } = settingStore

  const showModal = ref(false)

  async function handleSelectPath() {
    const newPath = await select_file()
    if (newPath) {
      await updateModPath(newPath)
      emits('update:modList')
    }
  }

  function show() {
    showModal.value = true
  }

  function showWarning() {
    showModal.value = true
    window.$message?.warning(t('select 3dm'))
  }
</script>

<style lang="scss" scoped>
  .n-base-close {
    font-size: 2rem;
  }
  .n-base-close::before {
    height: 2rem;
    width: 2rem;
  }
  .n-base-close.n-base-close--absolute {
    height: 2rem;
    width: 2rem;
  }
</style>
