<template>
  <div class="flex-row select-none">
    <!-- 左侧圣遗物列表选择 -->
    <div class="w-20% of-y-scroll grid grid-cols-2 gap-2 p-2">
      <div v-for="(item, index) in artifactInfo" :key="index">
        <n-popover :delay="300" :keep-alive-on-hover="false" class="w-25rem">
          <template #trigger>
            <img
              class="w-full rd-3 transition hover:scale-110 cursor-pointer"
              :src="item.img"
              @click="handleSelect(item.itemIds, item.img)"
            />
          </template>
          <template #header>
            <div class="font-bold text-center">
              <span> {{ item.name }} </span>
            </div>
          </template>
          <div class="text-sm">
            <span>{{ t('2set') + ': ' + item.desc1 }}</span>
            <br />
            <span>{{ t('4set') + ': ' + item.desc2 }}</span>
          </div>
        </n-popover>
      </div>
    </div>

    <div class="w-80% of-auto py-2 px-4 flex-col gap-y-4">
      <!-- 顶部圣遗物部位和主属性选择 -->
      <div class="flex-center">
        <span class="shrink-0 text-lg mr-2">{{ t('position') }}:</span>
        <n-radio-group v-model:value="position">
          <n-radio-button :value="0" :label="t('flower')" class="px-4!" />
          <n-radio-button :value="1" :label="t('plume')" class="px-4!" />
          <n-radio-button :value="2" :label="t('sands')" class="px-4!" />
          <n-radio-button :value="3" :label="t('goblet')" class="px-4!" />
          <n-radio-button :value="4" :label="t('circlet')" class="px-4!" />
        </n-radio-group>
        <span class="shrink-0 ml-8 text-lg mr-2">{{ t('mainstat') }}:</span>
        <n-select v-model:value="currentMainstat" :options="mainstatOptions"> </n-select>
      </div>
      <!-- 顶部初始词条和档次选择 -->
      <div class="flex-center">
        <span class="shrink-0 text-lg mr-2">{{ t('substats') }}:</span>
        <my-select
          v-model:value="currentSubstats"
          multiple
          clearable
          :placeholder="t('select 4')"
          :options="substatOptions"
          :max-select-count="4"
        />
        <span class="shrink-0 ml-8 text-lg mr-2">{{ t('gear') }}:</span>
        <n-radio-group v-model:value="gear">
          <n-radio-button label="1" :value="0" class="px-3!" />
          <n-radio-button label="2" :value="1" class="px-3!" />
          <n-radio-button label="3" :value="2" class="px-3!" />
          <n-radio-button label="4" :value="3" class="px-3!" />
        </n-radio-group>
      </div>
      <!-- 中间圣遗物展示和强化 -->
      <div class="h-60 flex-evenly">
        <div class="flex-col items-center">
          <img class="h-45 w-45 mt-2" :src="artifact.img" />
        </div>
        <div class="w-75">
          <div v-for="(item, index) in show" :key="index" class="flex-between">
            <span class="text-5">{{ item }}</span>
            <div>
              <my-button @click="handleReduce(index)">
                <icon-line-md-minus-circle />
              </my-button>
              <my-button @click="handleEnhance(index)">
                <icon-line-md-plus-circle />
              </my-button>
            </div>
          </div>
          <div v-show="currentSubstats.length > 0" class="flex-between">
            <span class="shrink-0 mr-4 text-lg">{{ t('set artifact lv') }}</span>
            <n-slider v-model:value="level" :max="20" />
          </div>
          <div class="flex-center">
            <span class="text-4 shrink-0 mr-4">{{ t('num') }}</span>
            <n-input-number v-model:value="num" class="w-30" />
          </div>
        </div>
      </div>
      <!-- 底部命令语句 -->
      <div class="flex w-full items-center">
        <n-input :value="command" type="textarea" size="large" />
        <my-button type="primary" class="ml-4" :text="t('execute')" @click-async="sendCommand">
          <icon-line-md-chevron-small-triple-left />
        </my-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { groupBy, difference, remove } from 'lodash-es'
  import { positionMainstats, substatGears } from './constant'
  import { showSuccessMsg } from '@/utils'
  import { playerCommand } from '@/http'

  const { t, tm } = useI18n()

  const artifactInfo = computed<Message['artifactInfo']>(() => tm('data.artifactInfo'))

  /** 部位 */
  const position = ref<number>(0)

  interface Artifact {
    itemIds: number[]
    img: string
    mainstats: number[]
    substats: {
      itemId: number
      value: number
    }[][]
    levels: number[]
  }

  const artifact = reactive<Artifact>({
    itemIds: artifactInfo.value[0].itemIds,
    img: artifactInfo.value[0].img,
    mainstats: [15001, 15003, 50990, 50950, 30960],
    substats: [[], [], [], [], []],
    levels: [0, 0, 0, 0, 0]
  })

  /** 左侧选择圣遗物 */
  function handleSelect(itemIds: number[], img: string) {
    artifact.itemIds = itemIds
    artifact.img = img
  }

  const statIds = [
    30960, 30950, 50880, 50990, 50980, 50970, 15003, 15001, 15005, 10960, 50950, 50960, 50940, 50930, 50910, 50920,
    50900, 50890, 30940
  ]
  /** 属性列表 */
  const stats = computed(() => statIds.map(id => ({ value: id, label: t(id) })))

  //主属性选择
  const mainstatOptions = computed(() => positionMainstats[position.value].map(id => stats.value[id]))
  const currentMainstat = computed({
    get: () => artifact.mainstats[position.value],
    set: (value: number) => (artifact.mainstats[position.value] = value)
  })

  /** 词条档次 */
  const gear = ref(3)

  //副属性选择
  const substatOptions = computed(() =>
    stats.value.slice(0, 10).map((stat, index) => ({ value: index, label: stat.label }))
  )
  const positionSubstats = reactive<number[][]>([[], [], [], [], []])
  const currentSubstats = computed({
    get: () => positionSubstats[position.value],
    set: (value: number[]) => (positionSubstats[position.value] = value)
  })

  //监测副属性变化
  watch(
    () => [positionSubstats[position.value], position.value] as [number[], number],
    (newVal, oldVal) => {
      if (newVal[1] == oldVal[1]) {
        const [a, b] = [newVal[0], oldVal[0]]
        if (a.length > b.length) {
          const diff = difference(a, b)
          diff.forEach(i => {
            const { id, value } = substatGears[i][gear.value]
            artifact.substats[position.value].push({ itemId: id, value })
          })
        } else {
          const diff = difference(b, a)
          remove(artifact.substats[position.value], x =>
            diff.includes(substatGears.findIndex(a => a.map(b => b.id).includes(x.itemId)))
          )
        }
      }
    }
  )

  /** 展示的圣遗物副属性 */
  const show = computed(() => {
    const group = groupBy(artifact.substats[position.value], a =>
      substatGears.findIndex(b => b.map(b => b.id).includes(a.itemId))
    )
    return currentSubstats.value.map(i => {
      let text = t(stats.value[i].value)
      let number = group[i].reduce((a, b) => a + b.value, 0)
      return [2, 6, 7, 8].includes(i)
        ? text + '+' + Math.floor(number)
        : text.replace('%', '') + '+' + (number * 100).toFixed(1) + '%'
    })
  })

  function handleEnhance(index: number) {
    if (artifact.levels[position.value] < 20) {
      artifact.levels[position.value] += 4
    }
    const { id, value } = substatGears[currentSubstats.value[index]][gear.value]
    artifact.substats[position.value].push({ itemId: id, value })
  }

  function handleReduce(index: number) {
    const substats = artifact.substats[position.value]

    if (artifact.levels[position.value] >= 4 && substats.length < 10) {
      artifact.levels[position.value] -= 4
    }

    const gearIds = substatGears[currentSubstats.value[index]].map(item => item.id)
    const count = substats.filter(item => gearIds.includes(item.itemId)).length
    if (count > 1) {
      const i = substats.findIndex(item => gearIds.includes(item.itemId))
      substats.splice(i, 1)
    } else if (count === 1) {
      currentSubstats.value.splice(index, 1)
    }
  }

  const level = computed({
    get: () => artifact.levels[position.value],
    set: (value: number) => (artifact.levels[position.value] = value)
  })

  const num = ref<number>(1)

  /** 命令文本 */
  const command = computed(
    () =>
      '/give ' +
      artifact.itemIds[position.value] +
      ` lv${artifact.levels[position.value]}` +
      ` x${num.value}` +
      ' ' +
      artifact.mainstats[position.value] +
      ' ' +
      Object.entries(groupBy(artifact.substats[position.value], 'itemId'))
        .map(([k, v]) => k + ',' + v.length)
        .join(' ')
  )

  async function sendCommand() {
    const result = await playerCommand(command.value.slice(1))
    showSuccessMsg(result)
  }
</script>
