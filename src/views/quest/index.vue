<template>
  <div class="px-10 flex-col">
    <span class="flex-center text-5 font-bold mb-5">{{ t('quests') }}</span>
    <div class="flex-evenly gap-x-5">
      <n-cascader
        v-model:value="quest"
        clearable
        filterable
        :filter="filterIgnoreCase"
        expand-trigger="hover"
        check-strategy="child"
        :placeholder="t('to search')"
        :options="questOptions"
      />
    </div>
    <div class="flex-center my-5">
      <n-input v-model:value="command_quest" />
      <n-radio-group v-model:value="status" class="shrink-0 ml-10">
        <n-space class="flex-center">
          <span>{{ t('start') }}</span>
          <n-radio value="add" />
          <span>{{ t('finish') }}</span>
          <n-radio value="finish" />
        </n-space>
      </n-radio-group>
      <my-button type="primary" class="ml-10" :text="t('execute')" @click-async="sendCommand(1)">
        <icon-line-md-chevron-small-triple-left />
      </my-button>
    </div>

    <span class="flex-center text-5 font-bold mb-5">{{ t('scenes') }}</span>
    <div class="flex-evenly gap-x-5">
      <n-select
        v-model:value="scene"
        clearable
        filterable
        expand-trigger="hover"
        :placeholder="t('to search')"
        :options="sceneOptions"
        class="grow"
      />
      <div class="flex-center">
        <span class="text-4 shrink-0 mr-2">x</span>
        <n-input v-model:value="x" class="w-35" />
      </div>
      <div class="flex-center">
        <span class="text-4 shrink-0 mr-2">y</span>
        <n-input v-model:value="y" class="w-30" />
      </div>
      <div class="flex-center">
        <span class="text-4 shrink-0 mr-2">z</span>
        <n-input v-model:value="z" class="w-30" />
      </div>
    </div>
    <div class="flex-center my-5">
      <n-input v-model:value="command_scene" />
      <my-button type="primary" class="ml-10" :text="t('execute')" @click-async="sendCommand(2)">
        <icon-line-md-chevron-small-triple-left />
      </my-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { playerCommand } from '@/http'
  import { showSuccessMsg, filterIgnoreCase } from '@/utils'

  const { t, tm } = useI18n()

  const quest = ref<string>()
  const questOptions = computed<QuestItem[]>(() => tm('data.quest'))
  const status = ref('add')
  const command_quest = computed(() => `/quest ${status.value} ${quest.value || ''}`)

  const scene = ref<string>('3')
  const x = ref('0')
  const y = ref('0')
  const z = ref('0')
  const sceneOptions = computed<Item[]>(() => tm('data.scene'))
  const command_scene = computed(() => `/tp ${x.value} ${y.value} ${z.value} ${scene.value || ''}`)

  async function sendCommand(index: number) {
    let result
    switch (index) {
      case 1:
        result = await playerCommand(command_quest.value.slice(1))
        break
      case 2:
        result = await playerCommand(command_scene.value.slice(1))
        break
    }

    showSuccessMsg(result)
  }
</script>
