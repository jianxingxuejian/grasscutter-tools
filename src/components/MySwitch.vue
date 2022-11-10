<template>
  <div class="flex justify-center">
    <span class="text-4 mr-3">{{ text }}</span>
    <n-switch :value="modelValue" :loading="loading" :disabled="disable" @update:value="clickThrottle" />
  </div>
</template>

<script setup lang="ts">
  import { useThrottleFn } from '@vueuse/core'
  import { playerCommand } from '@/http'

  const props = defineProps<{
    /** 绑定值 */
    modelValue?: boolean
    /** 文本 */
    text: string
    /**  禁用 */
    disable?: boolean
    /** 指令 */
    command: string
  }>()
  const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
  }>()

  const loading = ref(false)

  async function click(value: boolean) {
    loading.value = true
    try {
      const result = await playerCommand(props.command + ' ' + value)
      if (result?.code == 200) {
        window.$message?.success(result.msg)
        emit('update:modelValue', value)
      } else {
        emit('update:modelValue', !value)
      }
      // eslint-disable-next-line no-empty
    } catch (err) {
    } finally {
      loading.value = false
    }
  }

  const clickThrottle = useThrottleFn(click, 1000)
</script>
