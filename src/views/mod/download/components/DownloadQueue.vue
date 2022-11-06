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

  interface Download {
    id: number
    name: string
  }

  defineEmits<{
    (e: 'update:modelValue', value: number): void
  }>()
  defineExpose({ open, push })

  const { t } = useI18n()

  const downloadQueue = ref<Download[]>([])
  const show = ref(false)

  function open() {
    show.value = true
  }

  function push(data: any) {
    console.log(data)
  }
</script>
