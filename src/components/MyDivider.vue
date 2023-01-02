<!-- 分割线+标题+图标 -->
<template>
  <n-divider v-if="!vertical" class="mb-2! mt-0! px-10%" :dashed="dashed">
    <span v-if="!dashed" class="text-5 font-bold">{{ title }}</span>
    <span v-else class="text-4">{{ title }}</span>
    <n-tooltip v-if="$slots.default">
      <template #trigger>
        <slot name="icon">
          <icon-line-md-question-circle class="text-5" />
        </slot>
      </template>
      <slot></slot>
    </n-tooltip>
  </n-divider>
  <n-divider v-else vertical class="text-8 mx-2!" />
</template>

<script setup lang="ts">
  defineProps<{
    title?: string
    dashed?: boolean
    vertical?: boolean
  }>()
</script>
