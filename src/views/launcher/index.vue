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
      <n-button @click="handleInstallCA">安装证书</n-button>
      <span class="text-5">Start</span>
      <n-switch :value="proxyState" @update-value="handleProxySwitch" />
      <server-input />
    </n-space>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { NButton } from 'naive-ui'
  import { getVersion } from '@tauri-apps/api/app'
  import { checkUpdate } from '@tauri-apps/api/updater'
  import { useSettingStore } from '@/stores'
  import { installCA, setProxyAddr, proxyStart, proxyEnd } from '@/utils'
  import { Updater } from './components'

  const { t } = useI18n()

  const version = ref<string>('')
  const update = ref(false)
  const updateInfo = ref<string>()

  const settingStore = useSettingStore()
  const { updateCheckTime, getServer } = useSettingStore()

  const updaterRef = ref<InstanceType<typeof Updater>>()

  async function checkUpdateTime(click?: boolean) {
    const now = Date.now()
    const last = settingStore.update.lastCheckTime
    if (click || !last || (last && last + 86400000 < now)) {
      try {
        const { shouldUpdate, manifest } = await checkUpdate()
        updateCheckTime(now)
        if (shouldUpdate && manifest?.body) {
          updateInfo.value = JSON.parse(manifest.body)[settingStore.locale]
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

  async function handleInstallCA() {
    try {
      const result = await installCA()
      window.$message?.success(result)
    } catch (error) {
      window.$message?.error(error as string)
    }
  }

  const proxyState = ref(false)

  async function handleProxySwitch(value: boolean) {
    try {
      if (value) {
        await setProxyAddr(getServer)
        await proxyStart()
        proxyState.value = true
      } else {
        await proxyEnd()
        proxyState.value = false
      }
    } catch (error) {
      window.$message?.error(error as string)
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
</script>
