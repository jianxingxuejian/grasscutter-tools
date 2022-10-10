<template>
  <n-modal v-model:show="showModal">
    <div id="content" class="w-100 h-100"></div>
  </n-modal>
</template>

<script setup lang="ts">
  import snarkdown from 'snarkdown'

  const showModal = ref(false)

  function open(notes?: string) {
    if (notes) {
      showModal.value = true
      const content = document.getElementById('content')
      if (content) {
        content.innerHTML = snarkdown(notes)
      }
    }
  }

  defineExpose({ open })
</script>
