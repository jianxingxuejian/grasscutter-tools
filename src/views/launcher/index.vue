<template>
  <div class="flex-col px-10 gap-y-4">
    <div class="flex items-center">
      <div class="text-8">
        <icon-carbon-change-catalog />
      </div>
      <div class="flex-center grow">
        <span class="text-8 flex-center">Grasscutter-Tools</span>
        <n-tag type="success" size="large" class="ml-2 cursor-pointer" @click="checkUpdateTime(true)">
          v{{ version }}
        </n-tag>
      </div>
      <div class="ml-auto flex text-8 gap-x-2">
        <icon-carbon-logo-github />
        <icon-carbon-logo-discord />
        <icon-icon-park-solid-tencent-qq />
      </div>
    </div>
    <updater ref="updaterRef" />
    <startup-items ref="startupItemsRef" />
    <div class="flex-center">
      <n-space>
        <n-button @click="handleInstallCA">{{ t('install ca') }}</n-button>
        <server-input />
        <span class="text-5">{{ t('proxy start') }}</span>
        <n-switch :value="proxyState" @update-value="handleProxySwitch" />
      </n-space>
    </div>
    <div class="flex-center">
      <n-space>
        <my-button :text="t('startup items')" @click="startupItemsRef?.show">
          <icon-line-md-plus />
        </my-button>
        <my-button :text="t('launch')" @click="handleLaunch">
          <icon-material-symbols-rocket-launch-outline-rounded />
        </my-button>
      </n-space>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { NButton } from 'naive-ui'
  import { useEventListener } from '@vueuse/core'
  import { getVersion } from '@tauri-apps/api/app'
  import { checkUpdate } from '@tauri-apps/api/updater'
  import { useSettingStore } from '@/stores'
  import { installCA, setProxyAddr, proxyStart, proxyEnd } from '@/utils'
  import { StartupItems, Updater } from './components'

  const { t } = useI18n()

  const version = ref<string>('')
  const update = ref(false)
  const updateInfo = ref<string>()

  const settingStore = useSettingStore()
  const { updateCheckTime, getServer } = useSettingStore()

  const updaterRef = ref<InstanceType<typeof Updater>>()
  const startupItemsRef = ref<InstanceType<typeof StartupItems>>()

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

  async function handleLaunch() {
    await setProxyAddr(getServer)
    await proxyStart()
    proxyState.value = true
    startupItemsRef.value?.launcherAll()
  }

  async function checkUpdateTime(click?: boolean) {
    const now = Date.now()
    const last = settingStore.update.lastCheckTime
    if (click || !last || (last && last + 21600000 < now)) {
      try {
        const { shouldUpdate, manifest } = await checkUpdate()
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
      } finally {
        updateCheckTime(now)
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

  onMounted(async () => (version.value = await getVersion()))
  onActivated(async () => checkUpdateTime())

  useEventListener(window, 'beforeunload', () => {
    if (proxyState.value) proxyEnd()
  })
</script>
