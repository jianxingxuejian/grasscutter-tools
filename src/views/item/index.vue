<template>
  <div class="px-10 flex-col">
    <span class="flex-center text-5 font-bold mb-5">{{ t('give') }}</span>

    <div class="flex">
      <div class="grow mr-4">
        <n-cascader
          v-model:value="item"
          clearable
          filterable
          expand-trigger="hover"
          check-strategy="child"
          :placeholder="t('to search')"
          :options="itemOptions"
        />
      </div>
      <div class="flex-center mr-2">
        <span class="text-4 shrink-0 mr-2">{{ t('num') }}</span>
        <n-input-number v-model:value="x_item" class="w-30" />
      </div>
      <div class="flex-center mr-2">
        <span class="text-4 shrink-0 mr-2">{{ t('lv') }}</span>
        <n-input-number v-model:value="lv_item" class="w-26" />
      </div>
      <div class="flex-center">
        <span class="text-4 shrink-0 mr-2">{{ t('refinement') }}</span>
        <n-input-number v-model:value="r_item" class="w-24" />
      </div>
    </div>
    <div class="flex w-full items-center my-5">
      <n-input v-model:value="command_item" />
      <my-button type="primary" class="ml-10" :text="t('execute')" @click-async="sendCommand(1)">
        <icon-line-md-chevron-small-triple-left />
      </my-button>
    </div>

    <span class="flex-center text-5 font-bold mb-5">{{ t('spawn') }}</span>
    <div class="flex">
      <div class="grow mr-4">
        <n-cascader
          v-model:value="monster"
          clearable
          filterable
          expand-trigger="hover"
          check-strategy="child"
          :placeholder="t('to search')"
          :options="monsterOptions"
        />
      </div>
      <div class="flex-center mr-2">
        <span class="text-4 shrink-0 mr-2">{{ t('num') }}</span>
        <n-input-number v-model:value="x_monster" class="w-35" />
      </div>
      <div class="flex-center">
        <span class="text-4 shrink-0 mr-2">{{ t('lv') }}</span>
        <n-input-number v-model:value="lv_monster" class="w-30" />
      </div>
    </div>
    <div class="flex w-full items-center my-5">
      <n-input v-model:value="command_monster" />
      <my-button type="primary" class="ml-10" :text="t('execute')" @click-async="sendCommand(2)">
        <icon-line-md-chevron-small-triple-left />
      </my-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { playerCommand } from '@/http'
  import { showSuccessMsg } from '@/utils'

  const { t, tm } = useI18n()

  const itemOptions = computed<Item[]>(() => tm('data.item'))
  const item = ref<string>()
  const x_item = ref(1)
  const lv_item = ref(90)
  const r_item = ref(5)
  const command_item = computed(() => `/give ${item.value || ''} x${x_item.value} lv${lv_item.value} r${r_item.value}`)

  const monsterOptions = computed<Message['monster']>(() => tm('data.monster'))

  const monster = ref<string>()
  const x_monster = ref(1)
  const lv_monster = ref(90)
  const command_monster = computed(() => `/spawn ${monster.value || ''} x${x_monster.value} lv${lv_monster.value}`)

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

    showSuccessMsg(result)
  }
</script>
