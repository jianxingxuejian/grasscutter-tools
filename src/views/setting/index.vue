<template>
  <div class="px-10 flex-col items-center">
    <my-divider :title="t('t1')" />
    <n-form ref="serverRef" label-placement="left" inline :model="server" :rules="serverRules" class="flex-center">
      <n-form-item :label="t('l1')" path="ip">
        <n-input-group>
          <n-popselect v-model:value="server.protocol" :options="protocolOptions">
            <n-input-group-label>{{ server.protocol }}</n-input-group-label>
          </n-popselect>
          <n-input v-model:value="server.ip">
            <template #suffix>
              <n-dropdown trigger="hover" :options="history" :render-label="renderDropdownLabel">
                <my-button>
                  <icon-material-symbols-history />
                </my-button>
              </n-dropdown>
            </template>
          </n-input>
        </n-input-group>
      </n-form-item>
      <n-form-item :label="t('l2')" path="username">
        <n-input v-model:value="server.username" />
      </n-form-item>
      <my-button @click="updateServer">
        <icon-line-md-edit-twotone />
        <template #tooltip>
          <span>{{ t('tt1') }}</span>
        </template>
      </my-button>
    </n-form>

    <my-divider :title="t('t2')">
      <span>{{ t('tt2-1') }}</span
      ><br />
      <span>{{ t('tt2-2') }}</span>
    </my-divider>
    <n-space>
      <my-button @click="handleChangeAuthWay">
        <icon-line-md-rotate-270 :class="{ 'animate-spin': loadingChange }" />
        <template #tooltip>
          <span>{{ t('tt3') }}</span>
        </template>
      </my-button>
      <my-button v-if="authWay" :text="t('b1')" @click-async="sendVerifyCode">
        <icon-line-md-email />
        <template #popconfirm>
          <span>{{ t('p1') }}</span>
        </template>
      </my-button>
      <n-form-item v-if="authWay" ref="verifyCodeRef" :show-label="false" :rule="verifyCodeRule">
        <n-input v-model:value="verifyCode" />
      </n-form-item>
      <n-form-item v-else ref="passwordRef" :show-label="false" :rule="passwordRule">
        <n-input v-model:value="password" type="password" />
      </n-form-item>
      <my-button :text="t('b2')" @click-async="handlePlayerAuth">
        <icon-line-md-confirm />
      </my-button>
    </n-space>

    <my-divider :title="t('t3')">
      <span>{{ t('tt4') }}</span>
    </my-divider>
    <n-space>
      <n-form-item ref="adminVoucherRef" :show-label="false" :rule="adminVoucherRule">
        <n-input v-model:value="adminVoucher" type="password" autosize class="w-24rem" />
      </n-form-item>
      <my-button :text="t('b2')" @click-async="handleAdminAuth">
        <icon-line-md-confirm />
      </my-button>
    </n-space>

    <my-divider :title="t('t4')" dashed />
    <n-form ref="accountRef" label-placement="left" inline :model="account" :rules="accountRules" class="flex-center">
      <n-form-item :label="t('l2')" path="username">
        <n-input v-model:value="account.username" />
      </n-form-item>
      <n-form-item :label="t('l3')" path="password">
        <n-input v-model:value="account.password" />
      </n-form-item>
      <my-button :text="t('b3')" @click-async="handleCreateAccount">
        <icon-line-md-account-add />
      </my-button>
    </n-form>

    <my-divider :title="t('t5')" dashed />
    <div class="flex w-full items-center">
      <n-input v-model:value="command" type="textarea" />
      <my-button type="primary" class="ml-10" :text="t('b4')" @click-async="handleAdminCommand">
        <icon-line-md-chevron-small-triple-left />
      </my-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { FormInst, FormItemInst, FormRules, FormItemRule, DropdownOption } from 'naive-ui'
  import { useI18n } from 'vue-i18n'
  import { useThrottleFn } from '@vueuse/core'
  import IconDelete from '~icons/mdi/delete-forever-outline'
  import { MyButton } from '@/components'
  import { useSettingStore } from '@/stores'
  import {
    mailVerifyCode,
    playerAuthByVerifyCode,
    playerAuthByPassword,
    adminAuth,
    adminCreateAccount,
    adminCommand
  } from '@/http'
  import { testUrlOrIP } from '@/utils'

  const { t } = useI18n()

  const settingStore = useSettingStore()
  const { server, updateServer } = settingStore

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
          return new Error(t('r1-1'))
        } else if (!testUrlOrIP(value)) {
          return new Error(t('r1-2'))
        }
        return true
      }
    },
    username: {
      required: true,
      message: t('r2'),
      trigger: ['input', 'blur']
    }
  }

  const history = computed(() => server.history.map(item => ({ key: item, label: item })))

  function renderDropdownLabel(option: DropdownOption) {
    return h('div', { class: 'flex-between' }, [
      h('span', { class: 'mr-2', onClick: () => handleSelectHistory(option.key) }, { default: () => option.label }),
      h(MyButton, { onClick: () => deleteHistory(option.key) }, { default: () => h(IconDelete) })
    ])
  }

  function deleteHistory(key?: string | number) {
    if (key) {
      const history = server.history
      history.splice(
        history.findIndex(item => item === key),
        1
      )
    }
  }

  function handleSelectHistory(key?: string | number) {
    if (key && typeof key === 'string') {
      server.ip = key
      updateServer()
    }
  }

  const loadingChange = ref(false)
  const authWay = ref(true)
  const handleChangeAuthWay = useThrottleFn(function () {
    loadingChange.value = true
    authWay.value = !authWay.value
    setTimeout(() => {
      loadingChange.value = false
    }, 1000)
  }, 1000)

  async function checkService() {
    let check = false
    await serverRef.value?.validate(err => {
      if (!err) {
        check = true
      }
    })
    return check
  }

  async function sendVerifyCode() {
    const check = await checkService()
    if (!check) return

    const result = await mailVerifyCode(server.username)
    if (result?.code === 200) {
      window.$message?.success(t('m1'))
    }
  }

  const verifyCode = ref<string>('')
  const verifyCodeRef = ref<FormItemInst | null>(null)
  const verifyCodeRule: FormItemRule = {
    validator() {
      if (verifyCode.value.length === 0) {
        return new Error(t('r3'))
      }
    },
    trigger: ['input', 'blur']
  }

  const password = ref<string>('')
  const passwordRef = ref<FormItemInst | null>(null)
  const passwordRule: FormItemRule = {
    validator() {
      if (password.value.length === 0) {
        return new Error(t('r4'))
      }
    },
    trigger: ['input', 'blur']
  }

  async function handlePlayerAuth() {
    const check = await checkService()
    if (!check) return

    let result: ApiResult<string> | undefined
    if (authWay.value) {
      await verifyCodeRef.value?.validate().then(async () => {
        result = await playerAuthByVerifyCode(server.username, verifyCode.value)
      })
    } else {
      await passwordRef.value?.validate().then(async () => {
        result = await playerAuthByPassword(server.username, password.value)
      })
    }
    const token = result?.data
    if (token) {
      window.$message?.success(t('m2'))
      settingStore.updateToken(token)
    }
  }

  const adminVoucher = ref<string>('')
  const adminVoucherRef = ref<FormItemInst | null>(null)
  const adminVoucherRule: FormItemRule = {
    validator() {
      if (adminVoucher.value.length === 0) {
        return new Error(t('r5'))
      }
    },
    trigger: ['input']
  }

  async function handleAdminAuth() {
    await adminVoucherRef.value?.validate().then(async () => {
      const result = await adminAuth(adminVoucher.value)
      const token = result?.data
      if (token) {
        window.$message?.success(t('m3'))
        settingStore.updateAdminToken(token)
      }
    })
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
      message: t('r2'),
      trigger: ['input', 'blur']
    },
    password: {
      required: true,
      message: t('r4'),
      trigger: ['input', 'blur']
    }
  }

  async function handleCreateAccount() {
    await accountRef.value?.validate().then(async () => {
      const result = await adminCreateAccount(account)
      if (result?.code === 200) {
        window.$message?.success(t('m4'))
      }
    })
  }

  const command = ref('')

  async function handleAdminCommand() {
    if (command.value.length > 0) {
      const result = await adminCommand(command.value)
      if (result?.code === 200) {
        window.$message?.success(result.msg)
      }
    }
  }
</script>

<i18n locale="zh-CN" lang="json">
{
  "t1": "服务器配置",
  "t2": "玩家认证",
  "t3": "管理员认证",
  "t4": "创建带有密码的账号",
  "t5": "管理员控制台",
  "l1": "服务器",
  "l2": "用户名",
  "l3": "密码",
  "r1-1": "请输入服务器IP地址",
  "r1-2": "服务器IP地址错误",
  "r2": "请输入用户名",
  "r3": "请输入验证码",
  "r4": "请输入密码",
  "r5": "请输入管理员凭证",
  "b1": "发送验证码",
  "b2": "认证",
  "b3": "创建",
  "b4": "执行",
  "tt1": "保存配置",
  "tt2-1": "邮箱验证会发送一封验证码邮件到游戏，请前往查收",
  "tt2-2": "密码验证需要该账号已设定密码，目前为明文对比",
  "tt3": "更换验证方式",
  "tt4": "管理员凭证会在服务端加载插件后打印出来，或者在配置文件里找到",
  "p1": "是否发送验证码邮件？",
  "m1": "邮件发送成功，请前往游戏邮箱查收",
  "m2": "认证成功",
  "m3": "验证成功",
  "m4": "账号创建成功"
}
</i18n>

<i18n locale="en-US" lang="json">
{
  "t1": "Server Settings",
  "t2": "Player Auth",
  "t3": "Admin Auth",
  "t4": "Create Account with Password",
  "t5": "Admin Console",
  "l1": "Server",
  "l2": "Username",
  "l3": "Password",
  "r1-1": "Please input server ip",
  "r1-2": "Server ip error",
  "r2": "Please input Username",
  "r3": "Please input Code",
  "r4": "Please input Password",
  "r5": "Please input adminVoucher",
  "b1": "Send Code",
  "b2": "Auth",
  "b3": "Create",
  "b4": "Execute",
  "tt1": "Save Settings",
  "tt2-1": "Will send a Code in-game via Mailbox, please check your mail",
  "tt2-2": "Account needs a password for password verification option",
  "tt3": "Change Verify Method",
  "tt4": "Admin Voucher inside plugin config file",
  "p1": "Send Code to mailbox?",
  "m1": "Mailbox send success, please check your mailbox",
  "m2": "Auth Success",
  "m3": "Verify Success",
  "m4": "Account Create Success"
}
</i18n>
