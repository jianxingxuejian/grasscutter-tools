<template>
  <div class="px-10 flex-col">
    <span class="flex-center text-5 font-bold mb-5">{{ t('t5') }}</span>

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
        <n-input-number v-model:value="x_item" class="w-35" />
      </div>
      <div class="flex-center">
        <span class="text-4 shrink-0 mr-2">{{ t('t2') }}</span>
        <n-input-number v-model:value="lv_item" class="w-30" />
      </div>
      <div class="flex-center">
        <span class="text-4 shrink-0 mr-2">{{ t('t3') }}</span>
        <n-input-number v-model:value="r_item" class="w-30" />
      </div>
    </div>
    <div class="flex w-full items-center my-5">
      <n-input v-model:value="command_item" />
      <my-button type="primary" class="ml-10" :text="t('b1')" @click-async="sendCommand(1)">
        <icon-line-md-chevron-small-triple-left />
      </my-button>
    </div>

    <span class="flex-center text-5 font-bold mb-5">{{ t('t6') }}</span>
    <div class="flex-evenly gap-x-5">
      <n-cascader
        v-model:value="monster"
        clearable
        filterable
        expand-trigger="hover"
        check-strategy="child"
        :placeholder="t('t4')"
        :options="monsterOptions"
        class="grow"
      />
      <div class="flex-center">
        <span class="text-4 shrink-0 mr-2">{{ t('t1') }}</span>
        <n-input-number v-model:value="x_monster" class="w-45" />
      </div>
      <div class="flex-center">
        <span class="text-4 shrink-0 mr-2">{{ t('t2') }}</span>
        <n-input-number v-model:value="lv_monster" class="w-40" />
      </div>
    </div>
    <div class="flex w-full items-center my-5">
      <n-input v-model:value="command_monster" />
      <my-button type="primary" class="ml-10" :text="t('b1')" @click-async="sendCommand(2)">
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
  const item = ref('')
  const x_item = ref(1)
  const lv_item = ref(90)
  const r_item = ref(5)
  const command_item = computed(() => `/give ${item.value} x${x_item.value} lv${lv_item.value} r${r_item.value}`)

  const monsterOptions = computed<Message['monster']>(() => tm('monster'))

  const monster = ref('')
  const x_monster = ref(1)
  const lv_monster = ref(90)
  const command_monster = computed(() => `/spawn ${monster.value} x${x_monster.value} lv${lv_monster.value}`)

  async function sendCommand(index: number) {
    let result
    switch (index) {
      case 1:
        result = await playerCommand(command_item.value.slice(1))
        break
      case 2:
        result = await playerCommand(command_monster.value.slice(1))
        break
    }

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
  "t5": "物品",
  "t6": "怪物",
  "b1": "执行"
}
</i18n>

<i18n locale="en-US" lang="json">
{
  "t1": "Num",
  "t2": "Lv",
  "t3": "Refinement",
  "t4": "Enter a keyword to search",
  "t5": "Give",
  "t6": "Spawn",
  "b1": "Execute"
}
</i18n>
