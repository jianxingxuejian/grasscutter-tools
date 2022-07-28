<!-- 按钮+图标+悬浮信息文字or弹出确认 -->
<template>
  <n-popconfirm v-if="$slots.popconfirm" :show-icon="false" @positive-click="click">
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
      <n-button text :loading="loading" @click="click">
        <template #icon>
          <slot></slot>
        </template>
        <span>{{ text }}</span>
      </n-button>
    </template>
    <slot name="tooltip"></slot>
  </n-tooltip>

  <n-button v-else :loading="loading" @click="click">
    <template #icon>
      <slot></slot>
    </template>
    <span>{{ text }}</span>
  </n-button>
</template>

<script setup lang="ts">
  import type { Ref } from 'vue'

  const props = defineProps<{
    /** 按钮文本 */
    text?: string
    /** 异步点击事件 */
    onClickAsync?: () => Promise<void>
    /** 点击事件 */
    onClick?: () => void
  }>()

  let loading: Ref<boolean>
  if (props.onClickAsync) {
    loading = ref(false)
  }
  async function click() {
    if (props.onClick) {
      props.onClick()
    }

    if (props.onClickAsync) {
      const timeout = setTimeout(() => {
        loading.value = true
      }, 100)

      await props.onClickAsync().catch(() => {
        return
      })

      if (!loading.value) {
        clearTimeout(timeout)
      } else {
        loading.value = false
      }
    }
  }
</script>
