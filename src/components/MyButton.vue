<!-- 按钮+图标+悬浮信息文字or弹出确认 -->
<template>
  <n-popconfirm v-if="$slots.popconfirm" :show-icon="false" @positive-click="clickDebounced">
    <template #trigger>
      <n-button :loading="loading">
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
      <n-button text :loading="loading" @click="clickDebounced">
        <template #icon>
          <slot></slot>
        </template>
        <span>{{ text }}</span>
      </n-button>
    </template>
    <slot name="tooltip"></slot>
  </n-tooltip>

  <n-button v-else :loading="loading" @click="clickDebounced">
    <template #icon>
      <slot></slot>
    </template>
    <span>{{ text }}</span>
  </n-button>
</template>

<script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'

  const props = defineProps<{
    /** 按钮文本 */
    text?: string
    /** 异步点击事件 */
    onClickAsync?: () => Promise<void>
    /** 点击事件 */
    onClick?: () => void
  }>()

  const TIMEOUT = 100
  const loading = ref(false)

  const clickDebounced = useDebounceFn(click, TIMEOUT)

  async function click() {
    if (props.onClick) {
      props.onClick()
    }

    if (props.onClickAsync) {
      const timeout = setTimeout(() => {
        loading.value = true
      }, TIMEOUT)
      try {
        await props.onClickAsync()
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
