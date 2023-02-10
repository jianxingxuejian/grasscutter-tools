<template>
  <div class="flex-col px-10 gap-y-4">
    <div class="flex items-center">
      <div class="text-8">
        <icon-carbon-change-catalog class="cursor-pointer" @click="changelogRef?.open" />
      </div>
      <div class="flex-center grow">
        <span class="text-8 flex-center">Grasscutter-Tools</span>
        <n-tag type="success" size="large" class="ml-2 cursor-pointer" @click="checkUpdateTime(true)">
          v{{ version }}
        </n-tag>
      </div>
      <div class="ml-auto flex text-8 gap-x-2 cursor-pointer">
        <icon-carbon-logo-github @click="shell.open(`https://github.com/jianxingxuejian/grasscutter-tools`)" />
        <icon-carbon-logo-discord @click="shell.open(`https://discord.com/invite/qGyWhAUApU`)" />
        <icon-icon-park-solid-tencent-qq
          v-if="settingStore.locale === 'zh-CN'"
          @click="
            shell.open(
              `https://qm.qq.com/cgi-bin/qm/qr?k=0VnTLjWPz76RSScycDyp2_X68w6b73gO&jump_from=webapi&authKey=AO4rT4mzAw8krhEVDIMECCwFX7wRmGJA9+ui7AK7aQRA3l5BCeS1h/3pXT2MCkzZ`
            )
          "
        />
      </div>
    </div>
    <updater ref="updaterRef" />
    <startup-items ref="startupItemsRef" />
    <changelog ref="changelogRef" />
    <div class="flex-center">
      <n-space>
        <n-button @click="handleInstallCA">{{ t('install ca') }}</n-button>
        <server-input />
        <div class="flex">
          <span class="text-5 mr-2">{{ t('proxy port') }}</span>
          <n-input v-model:value="port" :allow-input="allowInput" class="w-20!" />
        </div>
        <div class="flex-center">
          <span class="text-5 mr-2">{{ t('proxy start') }}</span>
          <n-switch :value="proxyState" @update-value="handleProxySwitch" />
        </div>
      </n-space>
    </div>
    <div class="flex-center">
      <n-space class="items-center">
        <my-button :text="t('startup items')" @click="startupItemsRef?.show">
          <icon-line-md-plus />
        </my-button>
        <my-button :text="t('launch')" @click="handleLaunch">
          <icon-material-symbols-rocket-launch-outline-rounded />
        </my-button>
      </n-space>
    </div>
    <div class="flex-center">
      <n-space class="items-center">
        <div class="flex-center">
          <n-checkbox v-model:checked="launcher.popup" class="h-4 w-4" @update:checked="updateLauncher" />
          <span class="ml-2 text-4">{{ t('borderless window') }}</span>
        </div>
        <div class="flex-center">
          <n-checkbox v-model:checked="launcher.fullscreen" class="h-4 w-4" @update:checked="updateLauncher" />
          <span class="ml-2 text-4">{{ t('fullscreen') }}</span>
        </div>
        <div class="flex-center">
          <n-checkbox v-model:checked="launcher.customResolution" class="h-4 w-4" @update:checked="updateLauncher" />
          <span class="mx-2 text-4">{{ t('custom resolution') }}</span>
          <n-input v-model:value="launcher.height" :allow-input="allowInput" class="w-18!" />
          <span class="text-4 mx-1">x</span>
          <n-input v-model:value="launcher.width" :allow-input="allowInput" class="w-18!" />
        </div>
      </n-space>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { NButton } from 'naive-ui'
  import { app, updater, shell } from '@tauri-apps/api'
  import { useSettingStore } from '@/stores'
  import { installCA, setProxyAddr, proxyStart, proxyEnd, getEnableState } from '@/utils'
  import { Changelog, StartupItems, Updater } from './components'

  const { t } = useI18n()

  const version = ref<string>('')
  const update = ref(false)
  const updateInfo = ref<string>()

  const settingStore = useSettingStore()
  const { updateCheckTime, getServer, launcher, updateLauncher } = useSettingStore()

  const updaterRef = ref<InstanceType<typeof Updater>>()
  const startupItemsRef = ref<InstanceType<typeof StartupItems>>()
  const changelogRef = ref<InstanceType<typeof Changelog>>()

  async function handleInstallCA() {
    try {
      const result = await installCA()
      window.$message?.success(result)
    } catch (error) {
      window.$message?.error(error as string)
    }
  }

  const port = ref<string>('8080')
  const proxyState = ref(false)
  function allowInput(value: string) {
    if (!/^\d+$/.test(value)) return false
    const number = Number(value)
    return number > 0 && number <= 65535
  }

  async function handleProxySwitch(value: boolean) {
    try {
      if (value) {
        await setProxyAddr(getServer)
        await proxyStart(port.value)
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
    await proxyStart(port.value)
    proxyState.value = true
    let args = ''
    const { popup, fullscreen, customResolution, width, height } = launcher
    if (popup) {
      args += ' -popupwindow'
    }
    if (fullscreen) {
      args += ' -screen-fullscreen'
    }
    if (customResolution && width && height) {
      args += ` -screen-height ${height} -screen-width ${width}`
    }
    startupItemsRef.value?.launcherAll(args)
  }

  async function checkUpdateTime(click?: boolean) {
    const now = Date.now()
    const last = settingStore.update.lastCheckTime
    if (click || !last || (last && last + 21600000 < now)) {
      try {
        const { shouldUpdate, manifest } = await updater.checkUpdate()
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

  onMounted(async () => (version.value = await app.getVersion()))
  onActivated(async () => {
    checkUpdateTime()
    proxyState.value = await getEnableState()
  })
</script>

<style scoped lang="scss">
  :deep(.n-checkbox .n-checkbox-box) {
    height: 100%;
    width: 100%;
  }
  :deep(.n-checkbox .n-checkbox-box-wrapper) {
    height: 100%;
    width: 100%;
  }
</style>
