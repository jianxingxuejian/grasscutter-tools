<template>
  <div class="flex-col px-10">
    <updater ref="updaterRef" />
    <div class="text-6 flex-center">TODO</div>
    <n-space class="flex-center">
      <span class="text-6">{{ t('t1') }}</span>
      <n-switch :value="setting.proxy.enable" @update:value="updateProxy({ enable: $event })" />
      <!-- <n-input-number v-if="setting.proxy.enable" :show-button="false" class="w-22!" /> -->
    </n-space>
    <div>
      <n-button type="success" @click="handleCheckUpdate">Update Version</n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useSettingStore } from '@/stores'
  import { checkUpdate } from '@tauri-apps/api/updater'
  import { Updater } from './components'

  const { t } = useI18n()

  const setting = useSettingStore()
  const { updateProxy } = useSettingStore()

  const updaterRef = ref<InstanceType<typeof Updater>>()

  async function handleCheckUpdate() {
    try {
      // const test =
      //   '## [1.4.3] - 2022-10-10\n### Features\n- Test\n- Test\n- Test\n- Test\n- Test\n- Test\n### Bug Fixes\n- Test\n## [1.4.2] - 2022-10-10\n### Features\n- Add system proxy switch\n### Bug Fixes\n- Fix the wrong artifact id'
      // updaterRef.value?.open(test)
      const { shouldUpdate, manifest } = await checkUpdate()
      if (shouldUpdate && manifest?.body) {
        updaterRef.value?.open(JSON.parse(manifest.body)['zh-CN'])
      }
    } catch (error) {
      console.log(error)
    }
  }
</script>

<i18n locale="zh-CN" lang="json">
{
  "t1": "系统代理"
}
</i18n>

<i18n locale="en-US" lang="json">
{
  "t1": "Proxy System"
}
</i18n>
