<template>
  <n-input-group>
    <n-input :value="value" :placeholder="placeholder" />
    <n-tooltip>
      <template #trigger>
        <n-button type="primary" @click="onClick"> {{ buttonText }} </n-button>
      </template>
      <span>{{ placeholder }}</span>
    </n-tooltip>
  </n-input-group>
</template>

<script setup lang="ts">
  defineProps<{
    value: string
    buttonText: string
    placeholder: string
    onClick?: () => void
  }>()
</script>
