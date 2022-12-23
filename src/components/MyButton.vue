<!-- 按钮+图标+悬浮信息文字or弹出确认 -->
<template>
  <n-popconfirm v-if="$slots.popconfirm" :show-icon="false" @positive-click="ckick">
    <template #trigger>
      <n-button :text="!text" :loading="loading" v-bind="$attrs">
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
      <n-button :text="!text" :loading="loading" v-bind="$attrs" class="text-8" @click="ckick">
        <slot></slot>
        <span class="text-4">{{ text }}</span>
      </n-button>
    </template>
    <slot name="tooltip"></slot>
  </n-tooltip>

  <n-button v-else :text="!text" :loading="loading" v-bind="$attrs" @click="ckick">
    <template #icon>
      <slot></slot>
    </template>
    <span>{{ text }}</span>
  </n-button>
</template>

<script setup lang="ts">
  import { type Ref, useSlots } from 'vue'
  import { useThrottleFn } from '@vueuse/core'
  import { showSuccessMsg } from '@/utils'

  const props = defineProps<{
    /** 按钮文本 */
    text?: string
    /** 异步点击事件 */
    onClickAsync?: () => Promise<void | ApiResult<null>> | void
    /** 点击事件 */
    onClick?: () => void
  }>()

  defineExpose({ clickAsync })

  let loading: Ref<boolean>
  if (useSlots().default) {
    loading = ref(false)
  }

  async function clickAsync() {
    if (!props.onClickAsync) return

    let timeout
    if (loading) {
      timeout = setTimeout(() => {
        loading.value = true
      }, 20)
    }

    try {
      const result = await props.onClickAsync()
      showSuccessMsg(result)
      // eslint-disable-next-line no-empty
    } catch (err) {
    } finally {
      if (loading) {
        if (!loading.value) {
          clearTimeout(timeout)
        } else {
          loading.value = false
        }
      }
    }
  }

  const clickThrottle = useThrottleFn(clickAsync, 1000)

  async function ckick() {
    if (props.onClick) {
      props.onClick()
    }
    clickThrottle()
  }
</script>
