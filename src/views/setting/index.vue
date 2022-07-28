<template>
  <div class="px-10 flex-col items-center">
    <my-divider title="服务器配置" />

    <n-form ref="serverRef" label-placement="left" inline :model="server" :rules="serverRules" class="flex-center">
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
      <my-button @click="updateServer">
        <icon-line-md-edit-twotone class="text-8" />
        <template #tooltip>
          <span>保存配置</span>
        </template>
      </my-button>
      <!-- <n-tooltip>
        <template #trigger>
          <n-button text @click="updateServer">
            <icon-line-md-edit-twotone class="text-8" />
          </n-button>
        </template>
        <span>保存配置</span>
      </n-tooltip> -->
    </n-form>

    <my-divider title="玩家认证">
      <span>邮箱验证会发送一封验证码邮件到游戏，请前往查收</span><br />
      <span>密码验证需要该账号已设定密码，目前为明文对比</span>
    </my-divider>

    <n-space>
      <my-button @click="handleChangeAuthWay">
        <icon-line-md-rotate-270 class="text-8" :class="{ 'animate-spin': loadingChange }" />
        <template #tooltip>
          <span>更换验证方式</span>
        </template>
      </my-button>
      <!-- <n-tooltip>
        <template #trigger>
          <n-button text @click="handleChangeAuthWay">
            <icon-line-md-rotate-270 class="text-8" :class="{ 'animate-spin': loadingChange }" />
          </n-button>
        </template>
        <span>更换验证方式</span>
      </n-tooltip> -->

      <my-button v-if="authWay" text="发送验证码" :loading="loadingSend" @click="sendVerifyCode">
        <icon-line-md-email />
        <template #popconfirm>
          <span>是否发送验证码邮件？</span>
        </template>
      </my-button>
      <!-- <n-popconfirm v-if="authWay" :show-icon="false" @positive-click="sendVerifyCode">
        <template #trigger>
          <n-button :loading="loadingSend">
            <template #icon>
              <icon-line-md-email />
            </template>
            发送验证码
          </n-button>
        </template>
        <template #default>
          <span>是否发送验证码邮件？</span>
        </template>
      </n-popconfirm> -->
      <n-form-item v-if="authWay" ref="verifyCodeRef" :show-label="false" :rule="verifyCodeRule">
        <n-input v-model:value="verifyCode" placeholder="请输入验证码" />
      </n-form-item>

      <n-form-item v-else ref="passwordRef" :show-label="false" :rule="passwordRule">
        <n-input v-model:value="password" placeholder="请输入密码" type="password" />
      </n-form-item>

      <my-button name="认证" :loading="loadingPlayerAuth" @click="handlePlayerAuth">
        <icon-line-md-confirm />
      </my-button>
      <!-- <n-button @click="handlePlayerAuth">
        <template #icon>
          <icon-line-md-confirm />
        </template>
        认证
      </n-button> -->
    </n-space>

    <my-divider title="管理员认证">
      <span>管理员凭证会在服务端加载插件后打印出来，或者在配置文件里找到</span>
    </my-divider>

    <n-space>
      <n-form-item ref="adminVoucherRef" :show-label="false" :rule="adminVoucherRule">
        <n-input v-model:value="adminVoucher" placeholder="请输入管理员凭证" type="password" autosize class="w-24rem" />
      </n-form-item>
      <my-button name="认证" :loading="loadingAdminAuth" @click="handleAdminAuth">
        <icon-line-md-confirm />
      </my-button>
      <!-- <n-button @click="handleAdminAuth">
        <template #icon>
          <icon-line-md-confirm />
        </template>
        认证
      </n-button> -->
    </n-space>

    <my-divider title="创建带有密码的账号" dashed />
    <n-form ref="accountRef" label-placement="left" inline :model="account" :rules="accountRules" class="flex-center">
      <n-form-item label="用户名" path="username">
        <n-input v-model:value="account.username" />
      </n-form-item>
      <n-form-item label="密码" path="password">
        <n-input v-model:value="account.password" />
      </n-form-item>
      <n-button :loading="loadingCreateAccount" @click="handleCreateAccount">
        <template #icon>
          <icon-line-md-plus />
        </template>
        创建
      </n-button>
    </n-form>

    <my-divider title="管理员控制台" dashed />
    <div class="flex w-full items-center">
      <n-input v-model:value="command" type="textarea" />
      <n-button type="primary" class="ml-10" :loading="loadingCommand" @click="handleAdminCommand"> 发送 </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { FormInst, FormItemInst, FormRules, FormItemRule } from 'naive-ui'
  import { useSettingsStore } from '@/store'
  import { mailVerifyCode, playerAuthByVerifyCode, playerAuthByPassword, adminAuth, adminCreateAccount } from '@/http'
  import MyButton from '../../components/MyButton.vue'

  const settingsStore = useSettingsStore()
  const { server, updateServer } = settingsStore

  const protocolOptions = [
    { label: 'http', value: 'http' },
    { label: 'https', value: 'https' }
  ]
  const serverRef = ref<FormInst | null>(null)
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
    await serverRef.value?.validate(err => {
      if (!err) {
        check = true
      }
    })
    return check
  }

  const loadingSend = ref(false)
  async function sendVerifyCode() {
    loadingSend.value = true
    const check = await checkService()
    if (check) {
      const result = await mailVerifyCode(server.uid)
      if (result) {
        window.$message?.success('邮件发送成功，请前往游戏邮箱查收')
      }
    }
    loadingSend.value = false
  }

  const verifyCode = ref<string>('')
  const verifyCodeRef = ref<FormItemInst | null>(null)
  const verifyCodeRule: FormItemRule = {
    validator() {
      if (verifyCode.value.length === 0) {
        return new Error('请填写验证码')
      }
    },
    trigger: ['input', 'blur']
  }

  const password = ref<string>('')
  const passwordRef = ref<FormItemInst | null>(null)
  const passwordRule: FormItemRule = {
    validator() {
      if (password.value.length === 0) {
        return new Error('请填写密码')
      }
    },
    trigger: ['input', 'blur']
  }

  const loadingPlayerAuth = ref(false)
  async function handlePlayerAuth() {
    console.log(verifyCode.value)
    const check = await checkService()
    if (!check) return
    loadingPlayerAuth.value = true
    if (authWay.value) {
      verifyCodeRef.value?.validate().then(async () => {
        const result = await playerAuthByVerifyCode(server.uid, verifyCode.value)
        const token = result?.data
        if (token) {
          settingsStore.updateToken(token)
        }
      })
    } else {
      passwordRef.value?.validate().then(async () => {
        const result = await playerAuthByPassword(server.uid, password.value)
        const token = result?.data
        if (token) {
          settingsStore.updateToken(token)
        }
      })
    }
    loadingPlayerAuth.value = false
  }

  const adminVoucher = ref<string>('')
  const adminVoucherRef = ref<FormItemInst | null>(null)
  const adminVoucherRule: FormItemRule = {
    validator() {
      if (adminVoucher.value.length === 0) {
        return new Error('请填写管理员凭证')
      }
    },
    trigger: ['input', 'blur']
  }

  const loadingAdminAuth = ref(false)
  async function handleAdminAuth() {
    loadingAdminAuth.value = true
    await verifyCodeRef.value?.validate().then(async () => {
      const result = await adminAuth(adminVoucher.value)
      const token = result?.data
      if (token) {
        window.$message?.success('验证成功')
        settingsStore.updateToken(token)
      }
    })
    loadingAdminAuth.value = false
  }

  interface Account {
    username: string
    password: string
  }

  const accountRef = ref<FormInst | null>(null)
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
    password: {
      required: true,
      message: '请输入密码',
      trigger: ['input', 'blur']
    }
  }

  const loadingCreateAccount = ref(false)
  async function handleCreateAccount() {
    loadingCreateAccount.value = true
    await accountRef.value?.validate(async err => {
      if (!err) {
        const result = await adminCreateAccount(account)
        if (result) {
          window.$message?.success('账号创建成功')
        }
      }
    })
    loadingCreateAccount.value = false
  }

  const command = ref('')

  const loadingCommand = ref(false)
  async function handleAdminCommand() {
    loadingCommand.value = true
    const result = await adminAuth(command.value)
    console.log(result)
    loadingCommand.value = false
  }
</script>
