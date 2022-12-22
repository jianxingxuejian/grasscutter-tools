<template>
  <div class="flex-col p-2">
    <div ref="domRef" class="of-auto grow"></div>
    <div class="flex-center mt-2">
      <n-space>
        <n-button @click="selectPath">select compiler</n-button>
        <my-button type="primary" :text="t('execute')" @click="execute">
          <icon-line-md-chevron-small-triple-left />
        </my-button>
      </n-space>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import * as monaco from 'monaco-editor'
  import { useSettingStore } from '@/stores'
  import { executeLuac, select_file } from '@/utils'

  const { t } = useI18n()
  const settingStore = useSettingStore()
  const { updateLuacPath } = settingStore

  const domRef = ref<HTMLElement>()
  let codeEditor: monaco.editor.IStandaloneCodeEditor
  const code = ref<string>()

  async function selectPath() {
    const newPath = await select_file()
    if (newPath) {
      await updateLuacPath(newPath)
    }
  }

  async function execute() {
    const luacPath = settingStore.seed.luacPath
    if (!luacPath) return
    const result = await executeLuac(luacPath, codeEditor.getValue())
    console.log(result)
  }

  onMounted(() => {
    if (!domRef.value) return
    codeEditor = monaco.editor.create(domRef.value, {
      language: 'lua',
      value: code.value
    })
  })
</script>
