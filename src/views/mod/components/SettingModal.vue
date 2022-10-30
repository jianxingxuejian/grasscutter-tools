<template>
  <n-modal v-model:show="showModal" preset="card" :title="t('t1')" :auto-focus="false" class="w-80%">
    <div class="flex-col items-center gap-y-5">
      <n-input-group>
        <n-input :value="settingStore.mod.path" />
        <n-tooltip>
          <template #trigger>
            <n-button type="primary" @click="handleSelectPath"> {{ t('b1') }} </n-button>
          </template>
          <span>{{ t('tt1') }}</span>
        </n-tooltip>
      </n-input-group>
      <n-space class="items-center">
        <span>{{ t('t2') }}</span>
        <n-input-number v-model:value="settingStore.mod.width" class="w-50" />
        <n-input-number v-model:value="settingStore.mod.height" class="w-50" />
      </n-space>
      <n-space>
        <span>{{ t('t3') }}</span>
        <n-switch v-model:value="settingStore.mod.showName" />
        <span>{{ t('t4') }}</span>
        <n-switch v-model:value="settingStore.mod.showAuthor" />
      </n-space>
      <n-button type="success" @click="updateModPath()">{{ t('b2') }}</n-button>
    </div>
  </n-modal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useSettingStore } from '@/stores'
  import { select_file } from '@/utils'

  const { t } = useI18n()

  const emits = defineEmits<{
    (e: 'update:modList'): void
  }>()

  const settingStore = useSettingStore()
  const { updateModPath } = settingStore

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
    window.$message?.warning(t('tt1'))
  }

  defineExpose({
    show,
    showWarning
  })
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

<i18n locale="zh-CN" lang="json">
{
  "t1": "Mod设置",
  "t2": "图片长宽比",
  "t3": "显示名字",
  "t4": "显示作者",
  "b1": "选择",
  "b2": "保存",
  "tt1": "请选择你的3DMigoto Loader.exe"
}
</i18n>

<i18n locale="en-US" lang="json">
{
  "t1": "Mod Setting",
  "t2": "Image Aspect Ratio",
  "t3": "Show Name",
  "t4": "Show Author",
  "b1": "Select",
  "b2": "Save",
  "tt1": "Please select your 3DMigoto Loader.exe"
}
</i18n>
