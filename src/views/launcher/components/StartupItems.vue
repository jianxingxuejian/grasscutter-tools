<template>
  <n-modal v-model:show="showModal" preset="card" :title="t('startup items')" :auto-focus="false" class="w-70%">
    <div class="flex-col items-center gap-y-5">
      <select-file
        :value="settingStore.launcher.gamePath"
        :button-text="t('select')"
        :placeholder="t('select game')"
        @click="handleSelectGamePath"
      />
      <select-file
        :value="settingStore.mod.path"
        :button-text="t('select')"
        :placeholder="t('select 3dm')"
        @click="handleSelectModPath"
      />
      <select-file
        :value="settingStore.launcher.akebiPath"
        :button-text="t('select')"
        :placeholder="t('select akebi')"
        @click="handleSelectAkebiPath"
      />
    </div>
  </n-modal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useSettingStore } from '@/stores'
  import { select_file, runProgram } from '@/utils'

  defineExpose({ show, launcher })

  const { t } = useI18n()
  const settingStore = useSettingStore()
  const { updateGamePath, updateModPath, updateAkebiPath } = settingStore

  const showModal = ref(false)

  function show() {
    showModal.value = true
  }

  const handleSelectGamePath = () => selectPath(updateGamePath)
  const handleSelectModPath = () => selectPath(updateModPath)
  const handleSelectAkebiPath = () => selectPath(updateAkebiPath)

  async function selectPath(update: (path?: string | undefined) => Promise<void>) {
    const newPath = await select_file()
    if (newPath) {
      await update(newPath)
    }
  }

  async function launcher() {
    try {
      const modPath = settingStore.mod.path
      if (modPath) {
        await runProgram(modPath)
      }
      const akebiPath = settingStore.launcher.akebiPath
      if (akebiPath) {
        await runProgram(akebiPath)
      } else {
        const gamePath = settingStore.launcher.gamePath
        if (gamePath) {
          await runProgram(gamePath)
        }
      }
    } catch (error) {
      window.$message?.error(error as string)
    }
  }
</script>
