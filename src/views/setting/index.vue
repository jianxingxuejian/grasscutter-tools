<template>
  <div class="px-10 flex-col items-center">
    <my-divider v-if="isTauri" :title="t('app settings')" />
    <n-space v-if="isTauri" class="mb-4">
      <div class="flex-center">
        <span class="text-4 mr-2">{{ t('always on top') }}</span>
        <n-switch v-model:value="settingStore.alwaysOnTop" @update:value="updateAlwaysOnTop()" />
      </div>
      <div class="flex-center">
        <span class="text-4 mr-2">{{ t('use proxy system') }}</span>
        <n-switch v-model:value="proxy.enable" @update:value="updateProxy" />
      </div>
    </n-space>

    <my-divider :title="t('server settings')" />
    <n-form ref="serverRef" label-placement="left" inline :model="server" :rules="serverRules" class="flex-center">
      <n-form-item :label="t('server')" path="ip">
        <server-input />
      </n-form-item>
      <n-form-item :label="t('username')" path="username">
        <n-input v-model:value="server.username" />
      </n-form-item>
      <my-button @click="updateServer">
        <icon-line-md-edit-twotone />
        <template #tooltip>
          <span>{{ t('save settings') }}</span>
        </template>
      </my-button>
    </n-form>

    <my-divider :title="t('player auth')">
      <span>{{ t('send code mail') }}</span>
      <br />
      <span>{{ t('password verify') }}</span>
    </my-divider>
    <n-space>
      <my-button @click="handleChangeAuthWay">
        <icon-line-md-rotate-270 :class="{ 'animate-spin': loadingChange }" />
        <template #tooltip>
          <span>{{ t('change verify') }}</span>
        </template>
      </my-button>
      <my-button v-if="authWay" :text="t('send code')" @click-async="sendVerifyCode">
        <icon-line-md-email />
        <template #popconfirm>
          <span>{{ t('whether send code') }}</span>
        </template>
      </my-button>
      <n-form-item v-if="authWay" ref="verifyCodeRef" :show-label="false" :rule="verifyCodeRule">
        <n-input v-model:value="verifyCode" />
      </n-form-item>
      <n-form-item v-else ref="passwordRef" :show-label="false" :rule="passwordRule">
        <n-input v-model:value="password" type="password" />
      </n-form-item>
      <my-button :text="t('auth')" @click-async="handlePlayerAuth">
        <icon-line-md-confirm />
      </my-button>
    </n-space>

    <my-divider :title="t('admin auth')">
      <span>{{ t('adv find') }}</span>
    </my-divider>
    <n-space>
      <n-form-item ref="adminVoucherRef" :show-label="false" :rule="adminVoucherRule">
        <n-input v-model:value="adminVoucher" type="password" autosize class="w-24rem" />
      </n-form-item>
      <my-button :text="t('auth')" @click-async="handleAdminAuth">
        <icon-line-md-confirm />
      </my-button>
    </n-space>

    <my-divider :title="t('create account')" dashed />
    <n-form ref="accountRef" label-placement="left" inline :model="account" :rules="accountRules" class="flex-center">
      <n-form-item :label="t('username')" path="username">
        <n-input v-model:value="account.username" />
      </n-form-item>
      <n-form-item :label="t('password')" path="password">
        <n-input v-model:value="account.password" />
      </n-form-item>
      <my-button :text="t('create')" @click-async="handleCreateAccount">
        <icon-line-md-account-add />
      </my-button>
    </n-form>

    <my-divider :title="t('admin console')" dashed />
    <div class="flex w-full items-center">
      <n-input v-model:value="command" type="textarea" />
      <my-button type="primary" class="ml-10" :text="t('execute')" @click-async="handleAdminCommand">
        <icon-line-md-chevron-small-triple-left />
      </my-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { FormInst, FormItemInst, FormRules, FormItemRule } from 'naive-ui'
  import { useI18n } from 'vue-i18n'
  import { useThrottleFn } from '@vueuse/core'
  import { useSettingStore } from '@/stores'
  import {
    mailVerifyCode,
    playerAuthByVerifyCode,
    playerAuthByPassword,
    adminAuth,
    adminCreateAccount,
    adminCommand
  } from '@/http'
  import { testUrlOrIP, showSuccessMsg } from '@/utils'
  import isTauri from '@/utils/is-tauri'

  const { t } = useI18n()

  const settingStore = useSettingStore()
  const { server, proxy, updateServer, updateProxy, updateAlwaysOnTop } = settingStore

  const serverRef = ref<FormInst | null>(null)
  const serverRules: FormRules = {
    ip: {
      required: true,
      trigger: ['input', 'blur'],
      validator(_rule, value) {
        if (!value) {
          return new Error(t('input server'))
        } else if (!testUrlOrIP(value)) {
          return new Error(t('server error'))
        }
        return true
      }
    },
    username: { required: true, message: t('input username'), trigger: ['input', 'blur'] }
  }

  const loadingChange = ref(false)
  const authWay = ref(true)
  const handleChangeAuthWay = useThrottleFn(() => {
    loadingChange.value = true
    authWay.value = !authWay.value
    setTimeout(() => (loadingChange.value = false), 1000)
  }, 1000)

  async function checkService() {
    try {
      await serverRef.value?.validate()
    } catch (error) {
      return false
    }
    return true
  }

  async function sendVerifyCode() {
    const check = await checkService()
    if (!check) return

    const result = await mailVerifyCode(server.username)
    showSuccessMsg(result?.code, t('send code success'))
  }

  const verifyCode = ref<string>('')
  const verifyCodeRef = ref<FormItemInst | null>(null)
  const verifyCodeRule: FormItemRule = {
    validator() {
      if (verifyCode.value.length === 0) {
        return new Error(t('input code'))
      }
    },
    trigger: ['input', 'blur']
  }

  const password = ref<string>('')
  const passwordRef = ref<FormItemInst | null>(null)
  const passwordRule: FormItemRule = {
    validator() {
      if (password.value.length === 0) {
        return new Error(t('input password'))
      }
    },
    trigger: ['input', 'blur']
  }

  async function handlePlayerAuth() {
    const check = await checkService()
    if (!check) return

    let result: ApiResult<string> | undefined | null
    if (authWay.value) {
      await verifyCodeRef.value?.validate()
      result = await playerAuthByVerifyCode(server.username, verifyCode.value)
    } else {
      await passwordRef.value?.validate()
      result = await playerAuthByPassword(server.username, password.value)
    }
    const token = result?.data
    if (token) {
      window.$message?.success(t('auth success'))
      settingStore.updateToken(token)
    }
  }

  const adminVoucher = ref<string>('')
  const adminVoucherRef = ref<FormItemInst | null>(null)
  const adminVoucherRule: FormItemRule = {
    validator() {
      if (adminVoucher.value.length === 0) {
        return new Error(t('input adv'))
      }
    },
    trigger: ['input']
  }

  async function handleAdminAuth() {
    await adminVoucherRef.value?.validate().then(async () => {
      const result = await adminAuth(adminVoucher.value)
      const token = result?.data
      if (token) {
        window.$message?.success(t('verify success'))
        settingStore.updateAdminToken(token)
      }
    })
  }

  interface Account {
    username: string
    password: string
  }

  const accountRef = ref<FormInst | null>(null)
  const account = reactive<Account>({ username: '', password: '' })
  const accountRules: FormRules = {
    username: { required: true, message: t('input username'), trigger: ['input', 'blur'] },
    password: { required: true, message: t('input password'), trigger: ['input', 'blur'] }
  }

  async function handleCreateAccount() {
    await accountRef.value?.validate()
    const result = await adminCreateAccount(account)
    showSuccessMsg(result?.code, t('accout create success'))
  }

  const command = ref('')

  async function handleAdminCommand() {
    if (command.value.length > 0) {
      const result = await adminCommand(command.value)
      showSuccessMsg(result)
    }
  }
</script>
