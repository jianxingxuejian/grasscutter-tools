<template>
  <div class="flex-col">
    <div class="flex-center mb-1">
      <n-space class="items-center">
        <div class="w-20 flex-center">
          <span class="text-4">{{ num }}</span>
        </div>
        <n-input v-model:value="keyword" clearable />
        <my-button @click="settingRef?.show">
          <icon-ic-outline-settings />
        </my-button>
        <my-button @click="listSort">
          <icon-material-symbols-rotate-right :class="{ 'animate-spin': loadingSort }" />
        </my-button>
        <n-a class="text-4" @click="currentPage ^= 1"> {{ currentText }} </n-a>
      </n-space>
      <setting-modal ref="settingRef" />
    </div>
    <transition name="fade-slide" mode="out-in">
      <keep-alive>
        <mod-local v-if="currentPage === 0" ref="localRef" :mod-list="modList" :keyword="keyword" @update:num="updateNum" />
        <mod-download
          v-else
          ref="downloadRef"
          :mod-list="modList"
          :keyword="keyword"
          @update:num="updateNum"
          @show:setting="settingRef?.showWarning"
        />
      </keep-alive>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useSettingStore } from '@/stores'
  import { get_mod_list } from '@/utils'
  import { SettingModal, ModDownload, ModLocal } from './components'

  const { t } = useI18n()
  const settingStore = useSettingStore()

  const componentsInfo = reactive([computed(() => t('t1')), computed(() => t('t2'))])
  const currentPage = ref(0)
  const currentText = computed(() => componentsInfo[currentPage.value].value)

  const settingRef = ref<InstanceType<typeof SettingModal>>()
  const localRef = ref<InstanceType<typeof ModLocal>>()
  const downloadRef = ref<InstanceType<typeof ModDownload>>()
  const keyword = ref('')
  const loadingSort = ref(false)
  const num = ref('')

  const modList = ref<Mod[]>([])

  const loadModList = async () => {
    modList.value = []
    try {
      modList.value = await get_mod_list(settingStore.getModPath)
      listSort()
    } catch (e) {
      window.$message?.warning(t('t3'))
    }
  }

  loadModList()

  function listSort() {
    loadingSort.value = true
    modList.value.sort((next, pre) => {
      if (next.enabled && !pre.enabled) {
        return -1
      } else if (next.enabled == pre.enabled) {
        return next.name.localeCompare(pre.name, settingStore.locale)
      }
      return 0
    })
    setTimeout(() => {
      loadingSort.value = false
    }, 1000)
  }

  onMounted(() => {
    if (!settingStore.mod.path) {
      settingRef.value?.showWarning()
    }
  })

  function updateNum(value: string) {
    num.value = value
  }
</script>

<i18n locale="zh-CN" lang="json">
{
  "t1": "在线mod下载",
  "t2": "本地mod管理",
  "t3": "没有找到mod路径"
}
</i18n>

<i18n locale="en-US" lang="json">
{
  "t1": "Online Mods Download",
  "t2": "Local Mods Manage",
  "t3": "Didn't found mods path"
}
</i18n>
