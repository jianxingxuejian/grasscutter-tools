<template>
  <n-modal v-model:show="showModal" preset="card" :title="t('startup items')" :auto-focus="false" class="w-70%">
    <div class="flex-col items-center gap-y-5">
      <div class="flex-center w-full">
        <n-checkbox v-model:checked="launcher.GCStart" class="w-7 mr-4" @update:checked="updateLauncher" />
        <select-file
          :value="launcher.GCPath"
          :button-text="t('select')"
          :placeholder="t('select gc')"
          @click="handleSelectGCPath"
        />
      </div>
      <div class="flex-center w-full">
        <n-checkbox v-model:checked="launcher.gameStart" class="w-7 mr-4" @update:checked="updateLauncher" />
        <select-file
          :value="launcher.gamePath"
          :button-text="t('select')"
          :placeholder="t('select game')"
          @click="handleSelectGamePath"
        />
      </div>
      <div class="flex-center w-full">
        <n-checkbox v-model:checked="launcher.modStart" class="w-7 mr-4" @update:checked="updateLauncher" />
        <select-file
          :value="mod.path"
          :button-text="t('select')"
          :placeholder="t('select 3dm')"
          @click="handleSelectModPath"
        />
      </div>
      <div class="flex-center w-full">
        <n-checkbox v-model:checked="launcher.akebiStart" class="w-7 mr-4" @update:checked="updateLauncher" />
        <select-file
          :value="launcher.akebiPath"
          :button-text="t('select')"
          :placeholder="t('select akebi')"
          @click="handleSelectAkebiPath"
        />
      </div>
    </div>
  </n-modal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useSettingStore } from '@/stores'
  import { select_file, runProgram, runJar } from '@/utils'

  defineExpose({ show, launcherAll })

  const { t } = useI18n()
  const settingStore = useSettingStore()
  const { launcher, mod, updateGamePath, updateModPath, updateAkebiPath, updateLauncher, updateGCPath } = settingStore

  const showModal = ref(false)

  function show() {
    showModal.value = true
  }

  const handleSelectGCPath = () => selectPath(updateGCPath)
  const handleSelectGamePath = () => selectPath(updateGamePath)
  const handleSelectModPath = () => selectPath(updateModPath)
  const handleSelectAkebiPath = () => selectPath(updateAkebiPath)

  async function selectPath(update: (path?: string | undefined) => Promise<void>) {
    const newPath = await select_file()
    if (newPath) {
      await update(newPath)
    }
  }

  async function launcherAll(args: string) {
    try {
      const GCPath = launcher.GCPath
      if (GCPath && launcher.GCStart) {
        await runJar(GCPath)
      }

      const modPath = mod.path
      if (modPath && launcher.modStart) {
        await runProgram(modPath)
      }
      const akebiPath = launcher.akebiPath
      if (akebiPath && launcher.akebiStart) {
        await runProgram(akebiPath)
      } else {
        const gamePath = launcher.gamePath
        if (gamePath && launcher.gameStart) {
          await runProgram(gamePath, args)
        }
      }
    } catch (error) {
      window.$message?.error(error as string)
    }
  }
</script>

<style scoped lang="scss">
  :deep(.n-checkbox .n-checkbox-box) {
    height: 100%;
    width: 100%;
  }
  :deep(.n-checkbox .n-checkbox-box-wrapper) {
    height: 100%;
    width: 100%;
  }
</style>
