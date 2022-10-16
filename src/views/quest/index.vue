<template>
  <div class="px-10 flex-col">
    <span class="flex-center text-5 font-bold mb-5">{{ t('t1') }}</span>

    <div class="flex-evenly gap-x-5">
      <n-cascader
        v-model:value="quest"
        clearable
        filterable
        expand-trigger="hover"
        check-strategy="child"
        :placeholder="t('t2')"
        :options="questOptions"
      />
    </div>
    <div class="flex-center my-5">
      <n-input v-model:value="command" />
      <n-radio-group v-model:value="status" class="shrink-0 ml-10">
        <n-space class="flex-center">
          <span>开始</span>
          <n-radio value="add" />
          <span>结束</span>
          <n-radio value="finish" />
        </n-space>
      </n-radio-group>
      <my-button type="primary" class="ml-10" :text="t('b1')" @click-async="sendCommand">
        <icon-line-md-chevron-small-triple-left />
      </my-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { playerCommand } from '@/http'
  import { useI18n } from 'vue-i18n'

  const { t, tm } = useI18n()

  const quest = ref('')
  const questOptions = computed<QuestItem[]>(() => tm('quest'))
  const status = ref('add')
  const command = computed(() => `/quest ${status.value} ${quest.value}`)

  async function sendCommand() {
    const result = await playerCommand(command.value.slice(1))
    console.log(command.value.slice(1))
    if (result?.code === 200) {
      window.$message?.success(result.msg)
    }
  }
</script>

<style lang="scss" scope>
  .n-cascader-menu {
    .n-cascader-submenu.n-cascader-submenu--virtual {
      width: auto;
    }
    .n-cascader-option {
      min-width: 28rem;
    }
    .n-cascader-submenu {
      min-width: 29.5rem;
    }
  }
</style>

<i18n locale="zh-CN" lang="json">
{
  "t1": "任务",
  "t2": "输入关键字搜索",
  "b1": "执行"
}
</i18n>

<i18n locale="en-US" lang="json">
{
  "t1": "Quest",
  "t2": "Enter a keyword to search",
  "b1": "Execute"
}
</i18n>
