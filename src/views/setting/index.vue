<template>
  <div class="px-10 flex-col items-center">
    <my-divider title="服务器配置" />
    <n-form ref="serverFormRef" label-placement="left" inline :model="server" :rules="serverRules" class="flex-center">
      <n-form-item label="服务器" path="ip">
        <n-input-group>
          <n-popselect v-model:value="server.protocol" :options="protocolOptions">
            <n-input-group-label>{{ server.protocol }}</n-input-group-label>
          </n-popselect>
          <n-input v-model:value="server.ip" />
        </n-input-group>
      </n-form-item>
      <n-form-item label="UID" path="uid">
        <n-input v-model:value="server.uid" />
      </n-form-item>
      <n-tooltip>
        <template #trigger>
          <n-button text @click="updateServer">
            <icon-line-md-edit-twotone class="text-8" />
          </n-button>
        </template>
        <span>保存配置</span>
      </n-tooltip>
    </n-form>

    <my-divider title="玩家认证">
      <span>邮箱验证会发送一封验证码邮件到游戏，请前往查收</span><br />
      <span>密码验证需要该账号已设定密码，目前为明文对比</span>
    </my-divider>
    <n-space>
      <n-tooltip>
        <template #trigger>
          <n-button text @click="handleChangeAuthWay">
            <icon-line-md-rotate-270 class="text-8" :class="{ 'animate-spin': loadingChange }" />
          </n-button>
        </template>
        <span>更换验证方式</span>
      </n-tooltip>
      <n-popconfirm v-if="authWay" :show-icon="false" @positive-click="sendVerifyCode">
        <template #trigger>
          <n-button>
            <template #icon>
              <icon-line-md-email />
            </template>
            发送验证码
          </n-button>
        </template>
        <template #default>
          <span>是否发送验证码邮件？</span>
        </template>
      </n-popconfirm>
      <n-form-item v-if="authWay" ref="verifyCodeItemRef" :show-label="false" :rule="verifyCodeRule">
        <n-input v-model:value="verifyCode" placeholder="请输入验证码" />
      </n-form-item>
      <n-form-item v-else ref="passwordItemRef" :show-label="false" :rule="passwordRule">
        <n-input v-model:value="password" placeholder="请输入密码" type="password" />
      </n-form-item>
      <n-button @click="handlePlayerAuth">
        <template #icon>
          <icon-line-md-confirm />
        </template>
        认证
      </n-button>
    </n-space>

    <my-divider title="管理员认证">
      <span>管理员凭证会在服务端加载插件后打印出来，或者在配置文件里找到</span>
    </my-divider>
    <n-space>
      <n-form-item ref="adminVoucherItemRef" :show-label="false" :rule="adminVoucherRule">
        <n-input v-model:value="adminVoucher" placeholder="请输入管理员凭证" type="password" autosize class="w-24rem" />
      </n-form-item>
      <n-button @click="handleAdminAuth">
        <template #icon>
          <icon-line-md-confirm />
        </template>
        认证
      </n-button>
    </n-space>

    <my-divider title="创建带有密码的账号" dashed />
    <n-form
      ref="accountFormRef"
      label-placement="left"
      inline
      :model="account"
      :rules="accountRules"
      class="flex-center"
    >
      <n-form-item label="用户名" path="username">
        <n-input v-model:value="account.username" />
      </n-form-item>
      <n-form-item label="密码" path="password">
        <n-input v-model:value="account.password" />
      </n-form-item>
      <n-button>
        <template #icon>
          <icon-line-md-plus />
        </template>
        创建
      </n-button>
    </n-form>

    <my-divider title="管理员控制台" dashed />
    <div class="flex w-full items-center">
      <n-input type="textarea" />
      <n-button type="primary" class="ml-10" @click="handleSend"> 发送 </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { FormInst, FormItemInst, FormRules, FormItemRule } from 'naive-ui'
  import { useSettingsStore } from '@/store'
  import { mailVerifyCode, playerAuthByVerifyCode, playerAuthByPassword, adminAuth, adminCommand } from '@/http'

  const settingsStore = useSettingsStore()
  const { server, updateServer } = settingsStore

  const protocolOptions = [
    { label: 'http', value: 'http' },
    { label: 'https', value: 'https' }
  ]

  const serverFormRef = ref<FormInst | null>(null)
  const serverRules: FormRules = {
    ip: {
      required: true,
      trigger: ['input', 'blur'],
      validator(_rule, value) {
        if (!value) {
          return new Error('请输入服务器IP地址')
        } else if (
          !/^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/.test(
            value
          )
        ) {
          return new Error('请输入正确的IP地址')
        }
        return true
      }
    },
    uid: {
      required: true,
      trigger: ['input', 'blur'],
      validator(_rule, value) {
        if (!value) {
          return new Error('请输入uid')
        } else if (!/^\+?[1-9]\d*$/.test(value)) {
          return new Error('请输入正确的uid')
        }
        return true
      }
    }
  }

  const loadingChange = ref(false)
  const authWay = ref(true)
  function handleChangeAuthWay() {
    loadingChange.value = true
    authWay.value = !authWay.value
    setTimeout(() => {
      loadingChange.value = false
    }, 1000)
  }

  async function checkService() {
    let check = false
    await serverFormRef.value?.validate(err => {
      if (!err) {
        check = true
      }
    })
    return check
  }

  async function sendVerifyCode() {
    const check = await checkService()
    if (check) {
      const result = await mailVerifyCode(server.uid)
      console.log(result)
    }
  }

  const verifyCode = ref<string>('')
  const verifyCodeItemRef = ref<FormItemInst | null>(null)
  const verifyCodeRule: FormItemRule = {
    validator() {
      if (verifyCode.value.length === 0) {
        return new Error('请填写验证码')
      }
    },
    trigger: ['input', 'blur']
  }
  const password = ref<string>('')
  const passwordItemRef = ref<FormItemInst | null>(null)
  const passwordRule: FormItemRule = {
    validator() {
      if (password.value.length === 0) {
        return new Error('请填写密码')
      }
    },
    trigger: ['input', 'blur']
  }

  async function handlePlayerAuth() {
    console.log(verifyCode.value)
    if (!checkService) return
    if (authWay.value) {
      verifyCodeItemRef.value?.validate().then(async () => {
        const result = await playerAuthByVerifyCode(server.uid, verifyCode.value)
        const token = result?.data
        if (token) {
          settingsStore.updateToken(token)
        }
      })
    } else {
      passwordItemRef.value?.validate().then(async () => {
        const result = await playerAuthByPassword(server.uid, password.value)
        const token = result?.data
        if (token) {
          settingsStore.updateToken(token)
        }
      })
    }
  }

  const adminVoucher = ref<string>('')
  const adminVoucherItemRef = ref<FormItemInst | null>(null)
  const adminVoucherRule: FormItemRule = {
    validator() {
      if (adminVoucher.value.length === 0) {
        return new Error('请填写管理员凭证')
      }
    },
    trigger: ['input', 'blur']
  }

  function handleAdminAuth() {
    verifyCodeItemRef.value?.validate().then(async () => {
      const result = await adminAuth(adminVoucher.value)
      const token = result?.data
      if (token) {
        settingsStore.updateToken(token)
      }
    })
  }

  interface Account {
    username: string
    password: string
  }

  const accountFormRef = ref<FormInst | null>(null)
  const account = reactive<Account>({
    username: '',
    password: ''
  })
  const accountRules: FormRules = {
    username: {
      required: true,
      message: '请输入用户名',
      trigger: ['input', 'blur']
    },
    password: passwordRule
  }

  const command = ref('')

  async function handleSend() {
    const result = await ad({ command: command.value })
    console.log(result)
  }
</script>
