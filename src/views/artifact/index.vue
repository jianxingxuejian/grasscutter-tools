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
        <div class="w-70">
          <div v-for="(item, index) in show" :key="index" class="flex-between">
            <span class="text-5">{{ item }}</span>
            <my-button @click="handleEnhance(index)">
              <icon-line-md-plus-circle />
            </my-button>
          </div>
          <div class="flex-between">
            <span class="shrink-0 mr-4 text-lg">{{ t('set artifact lv') }}</span>
            <n-slider v-model:value="level" :max="20" />
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
  import { getImageUrl } from '@/utils'
  import { playerCommand } from '@/http'

  const { t, tm } = useI18n()

  const artifactInfo = computed(() =>
    (tm('data.artifactInfo') as Message['artifactInfo']).map(item => ({ ...item, img: getImageUrl(item.img) }))
  )

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

  const level = computed({
    get: () => artifact.levels[position.value],
    set: (value: number) => (artifact.levels[position.value] = value)
  })

  /** 命令文本 */
  const command = computed(
    () =>
      '/give ' +
      artifact.itemIds[position.value] +
      ' lv' +
      artifact.levels[position.value] +
      ' ' +
      artifact.mainstats[position.value] +
      ' ' +
      Object.entries(groupBy(artifact.substats[position.value], 'itemId'))
        .map(([k, v]) => k + ',' + v.length)
        .join(' ')
  )

  async function sendCommand() {
    const result = await playerCommand(command.value.slice(1))
    if (result?.msg) {
      window.$message?.success(result.msg)
    }
  }
</script>

<i18n locale="zh-CN" lang="json">
{
  "30960": "暴击率",
  "30950": "暴击伤害",
  "50880": "元素精通",
  "50990": "攻击力%",
  "50980": "生命值%",
  "50970": "防御力%",
  "15003": "攻击力",
  "15001": "生命值",
  "15005": "防御力",
  "10960": "元素充能效率",
  "50950": "雷元素伤害加成",
  "50960": "火元素伤害加成",
  "50940": "冰元素伤害加成",
  "50930": "水元素伤害加成",
  "50910": "岩元素伤害加成",
  "50920": "风元素伤害加成",
  "50900": "草元素伤害加成",
  "50890": "物理伤害加成",
  "30940": "治疗加成"
}
</i18n>

<i18n locale="en-US" lang="json">
{
  "30960": "CRIT Rate",
  "30950": "CRIT DMG",
  "50880": "EM",
  "50990": "ATK%",
  "50980": "HP%",
  "50970": "DEF%",
  "15003": "ATK",
  "15001": "HP",
  "15005": "DEF",
  "10960": "ER",
  "50950": "Electro DMG Bonus",
  "50960": "Pyro DMG Bonus",
  "50940": "Cyro DMG Bonus",
  "50930": "Hydro DMG Bonus",
  "50910": "Geo DMG Bonus",
  "50920": "Anemo DMG Bonus",
  "50900": "Dendro DMG Bonus",
  "50890": "Physical DMG Bonus",
  "30940": "Healing Bonus"
}
</i18n>
