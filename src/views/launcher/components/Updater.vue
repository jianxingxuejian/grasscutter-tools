<template>
  <n-modal v-model:show="showModal" preset="card" class="w-50%">
    <div class="text-5">发现新版本！</div>
    <div id="content"></div>
  </n-modal>
</template>

<script setup lang="ts">
  import snarkdown from 'snarkdown'
  // import {  installUpdate } from '@tauri-apps/api/updater'
  // import { relaunch } from '@tauri-apps/api/process'

  const showModal = ref(false)

  function open(notes?: string) {
    if (notes) {
      showModal.value = true
      nextTick(() => {
        const content = document.getElementById('content')
        if (content) {
          content.innerHTML = snarkdown(notes)
        }
      })
    }
  }

  defineExpose({ open })
</script>

<style lang="scss" scope>
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  ul {
    list-style-type: disc;
    margin-left: 1.5rem;
  }
</style>
