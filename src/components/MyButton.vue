<!-- 按钮+图标+悬浮信息文字or弹出确认 -->
<template>
  <n-popconfirm v-if="$slots.popconfirm" :show-icon="false" @positive-click="test">
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
      <n-button text :loading="loading" @click="test">
        <template #icon>
          <slot></slot>
        </template>
        <span>{{ text }}</span>
      </n-button>
    </template>
    <slot name="tooltip"></slot>
  </n-tooltip>

  <n-button v-else @click="test">
    <template #icon>
      <slot></slot>
    </template>
    <span>{{ text }}</span>
  </n-button>
</template>

<script setup lang="ts">
  const props = defineProps<{
    /** 按钮文本 */
    text?: string
    onClick?: (() => Promise<void>) | (() => void)
  }>()

  const loading = ref(false)
  async function test() {
    if (props.onClick) {
      loading.value = true
      await props.onClick()
      loading.value = false
    }
  }
</script>
