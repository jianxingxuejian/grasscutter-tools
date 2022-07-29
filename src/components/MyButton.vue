<!-- 按钮+图标+悬浮信息文字or弹出确认 -->
<template>
  <n-popconfirm v-if="$slots.popconfirm" :show-icon="false" @positive-click="click">
    <template #trigger>
      <n-button :loading="debounce">
        <template #icon>
          <slot></slot>
        </template>
        <span>{{ text }}</span>
      </n-button>
    </template>
    <slot name="popconfirm"></slot>
  </n-popconfirm>

  <n-tooltip v-else-if="$slots.tooltip">
    <template #trigger>
      <n-button text :loading="debounce" @click="click">
        <template #icon>
          <slot></slot>
        </template>
        <span>{{ text }}</span>
      </n-button>
    </template>
    <slot name="tooltip"></slot>
  </n-tooltip>

  <n-button v-else :loading="debounce" @click="click">
    <template #icon>
      <slot></slot>
    </template>
    <span>{{ text }}</span>
  </n-button>
</template>

<script setup lang="ts">
  import { refDebounced } from '@vueuse/core'

  const props = defineProps<{
    /** 按钮文本 */
    text?: string
    /** 点击事件 */
    onClick?: (() => Promise<void>) | (() => void)
  }>()

  const loading = ref(false)
  const debounce = refDebounced(loading, 100)

  async function click() {
    if (props.onClick) {
      const timeout = setTimeout(() => {
        loading.value = true
      }, 100)

      try {
        await props.onClick()
        // eslint-disable-next-line no-empty
      } catch (err) {
      } finally {
        if (!loading.value) {
          clearTimeout(timeout)
        } else {
          loading.value = false
        }
      }
    }
  }
</script>
