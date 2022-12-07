<template>
  <n-drawer v-model:show="show" width="20rem" @update:value="$emit('update:modelValue', $event)">
    <n-drawer-content :title="t('download queue')">
      <div v-for="item in downloadQueue" :key="item.id">
        <span>{{ item.name }}</span>
        <n-progress processing :percentage="100" :show-indicator="false" />
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useSettingStore } from '@/stores'
  import { download } from '@/utils'
  import { InstallOption } from '../interface'

  interface Download {
    id: number
    name: string
  }

  defineProps<{
    modelValue: boolean
  }>()
  const emits = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
  }>()
  defineExpose({ open, push })

  const { t } = useI18n()

  const settingStore = useSettingStore()

  const downloadQueue = reactive<Download[]>([])
  const show = ref(false)

  watchEffect(() => emits('update:modelValue', downloadQueue.length > 0))

  function open() {
    show.value = true
  }

  async function push(mod: InstallOption) {
    const { id, url, name } = mod
    try {
      downloadQueue.push({ id, name })
      const path = settingStore.getModPath + 'gamebanana/' + id + '/' + name
      await download(url, path, mod)
    } catch (error) {
      window.$message?.error(error as string)
    } finally {
      downloadQueue.splice(
        downloadQueue.findIndex(item => item.id == mod.id),
        1
      )
    }
  }
</script>
