<template>
  <div class="p-10 flex-col gap-10">
    <div class="flex-evenly gap-x-5">
      <n-cascader
        v-model:value="item"
        clearable
        filterable
        expand-trigger="hover"
        check-strategy="child"
        :placeholder="t('t4')"
        :options="itemOptions"
        class="grow"
      />
      <div class="flex-center">
        <span class="text-4 shrink-0 mr-2">{{ t('t1') }}</span>
        <n-input-number v-model:value="x" class="w-35" />
      </div>
      <div class="flex-center">
        <span class="text-4 shrink-0 mr-2">{{ t('t2') }}</span>
        <n-input-number v-model:value="lv" class="w-30" />
      </div>
      <div class="flex-center">
        <span class="text-4 shrink-0 mr-2">{{ t('t3') }}</span>
        <n-input-number v-model:value="r" class="w-30" />
      </div>
    </div>
    <div class="flex w-full items-center">
      <n-input v-model:value="command" type="textarea" />
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

  const itemOptions = computed<Item[]>(() => tm('item'))
  const item = ref(null)

  const x = ref(1)
  const lv = ref(90)
  const r = ref(5)

  const command = computed(() => `/give ${item.value} x${x.value} lv${lv.value} r${r.value}`)

  async function sendCommand() {
    const result = await playerCommand(command.value.slice(1))
    if (result?.code === 200) {
      window.$message?.success(result.msg)
    }
  }
</script>

<i18n locale="zh-CN" lang="json">
{
  "t1": "数量",
  "t2": "等级",
  "t3": "精炼",
  "t4": "输入关键字搜索",
  "b1": "执行"
}
</i18n>

<i18n locale="en-US" lang="json">
{
  "t1": "Num",
  "t2": "Lv",
  "t3": "Refinement",
  "t4": "Enter a keyword to search",
  "b1": "Execute"
}
</i18n>
