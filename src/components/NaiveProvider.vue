<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <n-notification-provider placement="bottom-right">
        <n-message-provider>
          <slot></slot>
          <naive-provider-content />
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script setup lang="ts">
  import { useLoadingBar, useDialog, useMessage, useNotification } from 'naive-ui'

  const NaiveProviderContent = defineComponent({
    setup() {
      window.$loadingBar = useLoadingBar()
      window.$dialog = useDialog()
      window.$notification = useNotification()
      window.$message = useMessage()
    },
    render() {
      return h('div')
    }
  })
</script>
