<template>
  <n-modal v-model:show="showModal" preset="card" title="Mod设置" class="w-80%">
    <div class="flex-col items-center gap-y-5">
      <n-input-group>
        <n-input :value="settingStore.mod.path" />
        <n-tooltip>
          <template #trigger>
            <n-button type="primary" @click="handleSelectPath"> 选择 </n-button>
          </template>
          <span>请选择你的3DMigoto Loader.exe</span>
        </n-tooltip>
      </n-input-group>
      <n-space>
        <span>图片长宽比</span>
        <n-input-number />
        <n-input-number />
      </n-space>
    </div>
  </n-modal>
</template>

<script setup lang="ts">
  import { useSettingStore } from '@/stores'
  import { select_file } from '@/utils'

  const emits = defineEmits<{
    (e: 'update:modList'): void
  }>()

  const settingStore = useSettingStore()
  console.log(settingStore.mod)
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
  defineExpose({
    show
  })
</script>
