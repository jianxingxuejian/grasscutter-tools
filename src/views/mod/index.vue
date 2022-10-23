<template>
  <div class="flex-col">
    <div class="flex-center mb-1">
      <n-space class="items-center">
        <my-button v-if="currentPage === 0" @click="listSort">
          <icon-material-symbols-rotate-right :class="{ 'animate-spin': loadingSort }" />
        </my-button>
        <n-input v-model:value="keyword" clearable />
        <my-button @click="settingRef?.show">
          <icon-ic-outline-settings />
        </my-button>
        <span v-if="currentPage === 0" class="text-4">{{ num }}</span>
        <n-a class="text-4" @click="currentPage ^= 1"> {{ currentText }} </n-a>
      </n-space>
      <setting-modal ref="settingRef" />
    </div>
    <transition name="fade-slide" mode="out-in">
      <keep-alive>
        <mod-local v-if="currentPage === 0" ref="localRef" :keyword="keyword" @update:num="updateNum" />
        <mod-download v-else ref="downloadRef" />
      </keep-alive>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { SettingModal, ModDownload, ModLocal } from './components'

  const { t } = useI18n()

  const componentsInfo = reactive([computed(() => t('t1')), computed(() => t('t2'))])
  const currentPage = ref(0)
  const currentText = computed(() => componentsInfo[currentPage.value].value)

  const settingRef = ref<InstanceType<typeof SettingModal>>()
  const localRef = ref<InstanceType<typeof ModLocal>>()
  const downloadRef = ref<InstanceType<typeof ModDownload>>()
  const keyword = ref('')
  const loadingSort = ref(false)
  const num = ref('0/0')

  function listSort() {
    loadingSort.value = true
    localRef.value?.listSort()
    setTimeout(() => {
      loadingSort.value = false
    }, 1000)
  }

  function updateNum(value: string) {
    num.value = value
  }
</script>

<i18n locale="zh-CN" lang="json">
{
  "t1": "在线mod下载",
  "t2": "本地mod管理"
}
</i18n>

<i18n locale="en-US" lang="json">
{
  "t1": "Online Mods Download",
  "t2": "Local Mods Manage"
}
</i18n>
