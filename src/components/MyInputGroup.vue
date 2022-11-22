<template>
  <n-input-group>
    <n-input-group-label>{{ label }}</n-input-group-label>
    <n-input-number
      :value="modelValue"
      :min="min"
      :max="max"
      :disabled="disable"
      :style="{ width: max.toString().length + 5 + 'rem' }"
      @update:value="$emit('update:modelValue', $event)"
    />
    <my-button :text="text" :disabled="disable" @click-async="onClick" />
  </n-input-group>
</template>

<script setup lang="ts">
  import { playerCommand } from '@/http'
  import { showSuccessMsg } from '@/utils'

  const props = withDefaults(
    defineProps<{
      /** 绑定值 */
      modelValue: number
      /** 禁用 */
      disable?: boolean
      /** 标签文本 */
      label: string
      /** 最小值 */
      min?: number
      /** 最大值 */
      max: number
      /** 按钮文本 */
      text: string
      /** 按钮指令 */
      command: string
    }>(),
    {
      min: 0
    }
  )
  defineEmits<{
    (e: 'update:modelValue', value: number): void
  }>()

  async function onClick() {
    const result = await playerCommand(props.command + ' ' + props.modelValue)
    showSuccessMsg(result)
  }
</script>
