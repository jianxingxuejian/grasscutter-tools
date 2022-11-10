<template>
  <div class="flex-col px-10 gap-y-4">
    <div class="flex-center">
      <span class="text-8 flex-center">Grasscutter-Tools</span>
      <n-tag type="success" size="large" class="ml-2 cursor-pointer" @click="checkUpdateTime(true)">
        v{{ version }}
      </n-tag>
    </div>
    <updater ref="updaterRef" />
    <n-space class="flex-center">
      <span class="text-6">{{ t('use proxy system') }}</span>
      <n-switch :value="setting.proxy.enable" @update:value="updateProxy({ enable: $event })" />
      <!-- <n-input-number v-if="setting.proxy.enable" :show-button="false" class="w-22!" /> -->
    </n-space>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { getVersion } from '@tauri-apps/api/app'
  import { useSettingStore } from '@/stores'
  import { checkUpdate } from '@tauri-apps/api/updater'
  import { Updater } from './components'
  import { NButton } from 'naive-ui'

  const { t } = useI18n()

  const version = ref<string>('')
  const update = ref(false)
  const updateInfo = ref<string>()

  const setting = useSettingStore()
  const { updateProxy, updateCheckTime } = useSettingStore()

  const updaterRef = ref<InstanceType<typeof Updater>>()

  async function checkUpdateTime(click?: boolean) {
    const now = Date.now()
    const last = setting.update.lastCheckTime
    if (click || !last || (last && last + 86400000 < now)) {
      try {
        const { shouldUpdate, manifest } = await checkUpdate()
        updateCheckTime(now)
        if (shouldUpdate && manifest?.body) {
          updateInfo.value = JSON.parse(manifest.body)[setting.locale]
          update.value = true
        } else {
          window.$message?.success(t('latest ver now'))
        }
      } catch (error) {
        window.$notification?.error({
          title: t('failed get update info'),
          description: `error: ${error}`,
          content: t('retry manually')
        })
      }
    }
  }

  watchEffect(() => {
    if (update.value) {
      const notification = window.$notification?.info({
        title: t('new ver discover'),
        content: t('whether upgrade'),
        action: () =>
          h(
            NButton,
            {
              text: true,
              type: 'primary',
              onClick: () => {
                notification?.destroy()
                updaterRef.value?.open(updateInfo.value)
              }
            },
            { default: () => t('confirm') }
          )
      })
    }
  })

  onActivated(async () => {
    version.value = await getVersion()
    checkUpdateTime()
  })

  // function test() {
  //   update.value = true
  //   updateInfo.value = '## [1.4.3] - 2022-10-12\n### Features\n- Test\n- Test\n### Bug Fixes\n- Test'
  //   window.$notification?.error({
  //     title: t('n1'),
  //     description: 'err',
  //     content: t('n2')
  //   })
  // }
</script>
