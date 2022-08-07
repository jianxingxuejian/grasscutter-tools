<template>
  <div class="px-10 flex-col">
    <n-space class="flex-center">
      <span class="text-4">{{ t('t1') }}</span>
      <n-input-number v-model:value="n" :min="0" :max="15" class="w-30" />
      <n-input-number v-model:value="e" :min="0" :max="15" class="w-30" />
      <n-input-number v-model:value="q" :min="0" :max="15" class="w-30" />
      <my-button @click="handleEditSkill">
        <icon-line-md-pencil />
        <template #tooltip>
          <span>{{ t('tt1') }}</span>
        </template>
      </my-button>
      <my-button :text="t('t2')" @click="handleLevelUpAllSkill" />
    </n-space>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { playerCommand, levelUpAllSkill } from '@/http'

  const { t } = useI18n()

  const n = ref(15)
  const e = ref(15)
  const q = ref(15)

  async function handleEditSkill() {
    let result
    await Promise.all([
      playerCommand('talent n ' + n.value),
      playerCommand('talent e ' + e.value),
      (result = await playerCommand('talent q ' + q.value))
    ])
    if (result?.code === 200) {
      window.$message?.success(t('t3'))
    }
  }

  async function handleLevelUpAllSkill() {
    const result = await levelUpAllSkill()
    if (result?.code === 200) {
      window.$message?.success(result.msg)
    }
  }
</script>

<i18n locale="zh-CN" lang="json">
{
  "t1": "修改当前人物技能等级",
  "t2": "升满所有人物技能",
  "t3": "操作成功",
  "tt1": "进行修改"
}
</i18n>

<i18n locale="en-US" lang="json">
{
  "t1": "change current avatar skill level",
  "t2": "level up all avatar skills",
  "t3": "success",
  "tt1": "level up"
}
</i18n>
