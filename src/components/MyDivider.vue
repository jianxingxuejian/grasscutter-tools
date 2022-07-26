<!-- 二次封装n-divider组件 -->
<template>
  <n-divider class="mb-2! mt-0!" :dashed="dashed">
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
</template>

<script setup lang="ts">
  defineProps<{
    title: string
    dashed?: boolean
  }>()
</script>
