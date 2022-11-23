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
  import { Command } from '@tauri-apps/api/shell'
  import { useSettingStore } from '@/stores'
  import { select_file } from '@/utils'

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
    const modPath = settingStore.mod.path
    if (modPath) await start(modPath)
    const gamePath = settingStore.launcher.gamePath
    if (gamePath) await start(gamePath)
  }

  async function start(filePath: string) {
    const path = filePath.replace(/\\/g, '/')
    const index = path.lastIndexOf('/')
    const dir = path.slice(0, index + 1)
    const file = path.slice(index + 1)
    const { code, stderr } = await new Command('cmd', ['/C', `cd /d ${dir} && start ${file}`]).execute()
    if (code !== 0) {
      window.$message?.error(stderr)
    }
  }
</script>
