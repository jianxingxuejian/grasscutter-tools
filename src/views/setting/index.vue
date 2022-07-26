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
      <n-form-item label="用户名" path="username">
        <n-input v-model:value="server.username" />
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
        <n-input placeholder="请输入验证码" />
      </n-form-item>
      <n-form-item v-else ref="passwordItemRef" :show-label="false" :rule="passwordRule">
        <n-input placeholder="请输入密码" type="password" />
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
      <n-form-item :show-label="false">
        <n-input placeholder="请输入管理员凭证" type="password" autosize class="w-24rem" />
      </n-form-item>

      <n-button>
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
  import { adminCommand, mailVerifyCode } from '@/http'

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
      },
      trigger: ['input', 'blur']
    },
    username: {
      required: true,
      message: '请输入用户名',
      trigger: ['input', 'blur']
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

  function sendVerifyCode() {
    serverFormRef.value?.validate(async err => {
      if (err) {
        return
      }
      const result = await mailVerifyCode({ username: server.username })
      console.log(result)
    })
  }

  const verifyCodeItemRef = ref<FormItemInst | null>(null)
  const verifyCodeRule: FormItemRule = {
    required: true,
    message: '请输入验证码',
    trigger: ['input', 'blur']
  }
  const passwordItemRef = ref<FormItemInst | null>(null)
  const passwordRule: FormItemRule = {
    required: true,
    message: '请输入密码',
    trigger: ['input', 'blur']
  }

  async function handlePlayerAuth() {
    if (authWay.value) {
      verifyCodeItemRef.value?.validate()
    }
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
    const result = await adminCommand({ command: command.value })
    console.log(result)
  }
</script>
