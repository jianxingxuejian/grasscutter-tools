<template>
  <div class="flex-row select-none">
    <!--左侧圣遗物列表选择-->
    <div class="w-20% of-scroll grid grid-cols-2 gap-2 p-2">
      <div v-for="(item, index) in artifactInfo" :key="index">
        <n-popover :delay="300" :keep-alive-on-hover="false" class="w-25rem">
          <template #trigger>
            <img
              class="w-full rd-3 transition hover:scale-110 cursor-pointer"
              :src="item.img"
              @click="selectArtifact(item.itemIds, item.img)"
            />
          </template>
          <template #header>
            <div class="font-bold text-center">
              <span> {{ item.name }} </span>
            </div>
          </template>
          <div class="text-sm">
            <span>二件套：{{ item.description1 }}</span>
            <br />
            <span>四件套：{{ item.description2 }}</span>
          </div>
        </n-popover>
      </div>
    </div>

    <div class="w-80% of-auto py-2 px-4 flex-col gap-y-4">
      <!--顶部圣遗物部位和主属性选择-->
      <div class="flex-center">
        <span class="shrink-0 text-lg">部位：</span>
        <n-radio-group v-model:value="position">
          <n-radio-button :value="0" label="生之花" class="px-4!" />
          <n-radio-button :value="1" label="死之羽" class="px-4!" />
          <n-radio-button :value="2" label="时之沙" class="px-4!" />
          <n-radio-button :value="3" label="空之杯" class="px-4!" />
          <n-radio-button :value="4" label="理之冠" class="px-4!" />
        </n-radio-group>
        <span class="shrink-0 ml-8 text-lg">主属性：</span>
        <n-select v-model:value="currentMainstat" :options="mainstatOptions"> </n-select>
      </div>
      <!--顶部初始词条和档次选择-->
      <div class="flex-center">
        <span class="shrink-0 text-lg">词条：</span>
        <my-select
          v-model:value="currentSubstats"
          multiple
          clearable
          placeholder="请选择4个初始词条"
          :options="substatOptions"
          :max-select-count="4"
        />
        <span class="shrink-0 ml-8 text-lg">档次：</span>
        <n-radio-group v-model:value="gear">
          <n-radio-button label="1档" :value="0" class="px-3!" />
          <n-radio-button label="2档" :value="1" class="px-3!" />
          <n-radio-button label="3档" :value="2" class="px-3!" />
          <n-radio-button label="4档" :value="3" class="px-3!" />
        </n-radio-group>
      </div>
      <!--中间圣遗物展示和强化-->
      <div class="h-60 flex-around">
        <div class="flex-col items-center">
          <n-button type="success" :disabled="currentSubstats.length != 4" class="h-6 w-15"> 生成 </n-button>
          <img class="h-45 w-45 mt-2" :src="artifact.img" />
        </div>
        <div class="">123</div>
        <div>123</div>
      </div>
      <!--底部命令语句-->
      <div class="flex w-full items-center">
        <n-input :value="command" type="textarea" size="large" />
        <my-button type="primary" class="ml-4" text="发送" @click="sendCommand">
          <icon-line-md-chevron-small-triple-left />
        </my-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { positionMainstats, artifactInfo } from './constant'
  import { getImageUrl } from '@/utils'

  const { t } = useI18n()

  artifactInfo.forEach(item => (item.img = getImageUrl(item.img)))

  const position = ref<number>(0)

  interface Artifact {
    itemIds: number[]
    img: string
    mainstats: number[]
    levels: number[]
  }

  const artifact = reactive<Artifact>({
    itemIds: artifactInfo[0].itemIds,
    img: artifactInfo[0].img,
    mainstats: [15001, 15003, 50990, 50950, 30960],
    levels: [0, 0, 0, 0, 0]
  })

  //左侧点击选择圣遗物
  function selectArtifact(itemIds: number[], img: string) {
    artifact.itemIds = itemIds
    artifact.img = img
  }

  const statIds = [
    30960, 30950, 50880, 50990, 50980, 50970, 15003, 15001, 15005, 10960, 50950, 50960, 50940, 50930, 50910, 50920,
    50890, 30940
  ]
  const stats = computed(() => statIds.map(id => ({ value: id, label: t(id) })))

  /** 可选主属性列表 */
  const mainstatOptions = computed(() => positionMainstats[position.value].map(id => stats.value[id]))
  /** 当前部位的主属性 */
  const currentMainstat = computed({
    get() {
      return artifact.mainstats[position.value]
    },
    set(value: number) {
      artifact.mainstats[position.value] = value
    }
  })

  /** 词条档次 */
  const gear = ref(3)
  /** 可选副属性列表 */
  const substatOptions = computed(() => stats.value.slice(0, 10))
  /** 5个部位的副属性列表二维数组 */
  const positionSubstats = reactive<number[][]>([[], [], [], [], []])
  /** 当前部位副属性已选id列表 */
  const currentSubstats = computed({
    get() {
      return positionSubstats[position.value]
    },
    set(value: number[]) {
      positionSubstats[position.value] = value
    }
  })

  /** 选择主属性后，删除副属性中的相同属性 */
  // function selectMainstat(value: number) {
  //   let index = currentSubstats.value.findIndex(x => x == value)
  //   if (index != -1) {
  //     currentSubstats.value.splice(index, 1)
  //   }
  // }

  const command = computed(
    () =>
      '/give' +
      ' ' +
      artifact.itemIds[position.value] +
      ' lv' +
      artifact.levels[position.value] +
      ' ' +
      artifact.mainstats[position.value]
  )
  function sendCommand() {
    console.log(currentSubstats.value)
  }
</script>

<i18n locale="zh-CN" lang="yaml">
{
  30960: '暴击率',
  30950: '暴击伤害',
  50880: '元素精通',
  50990: '攻击力%',
  50980: '生命值%',
  50970: '防御力%',
  15003: '攻击力',
  15001: '生命值',
  15005: '防御力',
  10960: '元素充能效率',
  50950: '雷元素伤害加成',
  50960: '火元素伤害加成',
  50940: '冰元素伤害加成',
  50930: '水元素伤害加成',
  50910: '岩元素伤害加成',
  50920: '风元素伤害加成',
  50890: '物理伤害加成',
  30940: '治疗加成'
}
</i18n>

<i18n locale="en-US" lang="yaml">
{
  30960: '',
  30950: '',
  50880: '',
  50990: '%',
  50980: '%',
  50970: '%',
  15003: '',
  15001: '',
  15005: '',
  10960: '',
  50950: '',
  50960: '',
  50940: '',
  50930: '',
  50910: '',
  50920: '',
  50890: '',
  30940: ''
}
</i18n>
