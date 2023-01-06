<template>
  <div class="h-full w-full">
    <transition name="fade-slide" mode="out-in">
      <keep-alive>
        <mod-local
          v-if="currentPage === 0"
          ref="localRef"
          :mod-list="modList"
          @list:reload="loadModList"
          @page:change="currentPage = $event"
        />
        <mod-download v-else ref="downloadRef" :mod-list="modList" @page:change="currentPage = $event" />
      </keep-alive>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import ModLocal from './local/index.vue'
  import ModDownload from './download/index.vue'
  import { useSettingStore } from '@/stores'
  import { get_mod_list } from '@/utils'

  const { t } = useI18n()
  const settingStore = useSettingStore()

  const currentPage = ref(0)

  const modList = ref<Mod[]>([])

  const loadModList = async () => {
    modList.value = []
    try {
      modList.value = await get_mod_list(settingStore.getModPath)
      modList.value.sort((next, pre) => {
        if (next.enabled && !pre.enabled) {
          return -1
        } else if (next.enabled == pre.enabled) {
          return next.name.localeCompare(pre.name, settingStore.locale)
        }
        return 0
      })
    } catch (e) {
      window.$message?.warning(t('not found mod path'))
    }
  }

  watchEffect(() => {
    if (currentPage.value === 0) {
      loadModList()
    }
  })
</script>
