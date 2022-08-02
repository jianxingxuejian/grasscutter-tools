<template>
  <div class="flex-row select-none">
    <!--左侧圣遗物列表选择-->
    <div class="w-20% of-scroll grid grid-cols-2 gap-2 p-2">
      <div v-for="(item, index) in artifacts" :key="index">
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
        <n-radio-group v-model:value="artifact.position">
          <n-radio-button :value="0" label="生之花" class="px-4!" />
          <n-radio-button :value="1" label="死之羽" class="px-4!" />
          <n-radio-button :value="2" label="时之沙" class="px-4!" />
          <n-radio-button :value="3" label="空之杯" class="px-4!" />
          <n-radio-button :value="4" label="理之冠" class="px-4!" />
        </n-radio-group>
        <span class="shrink-0 ml-8 text-lg">主属性：</span>
        <n-select v-model:value="currentMainstat" :options="mainstatOptions" @update:value="selectMainstat"> </n-select>
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
      <div class="h-50 flex-around">
        <div class="flex-col items-center">
          <n-button type="success" :disabled="currentSubstats.length != 4" class="h-6 w-15"> 生成 </n-button>
          <img class="h-40 w-40 mt-2" :src="artifact.img" />
        </div>
        <div class="">123</div>
        <div>123</div>
      </div>
      <!--底部命令语句-->
      <div class="">
        <n-input type="textarea" size="large" :value="command" />
      </div>
      <div class="flex-center">
        <n-button type="primary" @click="sendCommand"> 生成圣遗物 </n-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { stats, positionMainstats, artifacts } from './constant'
  import { getImageUrl } from '@/utils'

  const { t } = useI18n()

  artifacts.forEach(item => (item.img = getImageUrl(item.img)))

  interface Artifact {
    itemIds: number[]
    img: string
    position: 0 | 1 | 2 | 3 | 4
    mainId: number
    subs: {
      itemId: number
      count: number
    }[]
    level: number
  }

  const artifact = reactive({ itemIds: artifacts[0].itemIds, img: artifacts[0].img, position: 0 }) as Artifact

  //左侧点击选择圣遗物
  function selectArtifact(itemIds: number[], img: string) {
    artifact.itemIds = itemIds
    artifact.img = img
  }

  /** 5个部位对应的主属性数组 */
  const positionMainstatArr = reactive([7, 8, 3, 10, 0])
  /** 可选主属性列表 */
  const mainstatOptions = computed(() => positionMainstats[artifact.position])
  /** 当前部位的主属性 */
  const currentMainstat = computed({
    get() {
      return positionMainstatArr[artifact.position]
    },
    set(value: number) {
      positionMainstatArr[artifact.position] = value
    }
  })

  /** 词条档次 */
  const gear = ref(3)
  /** 可选副属性列表 */
  const substatOptions = computed(() => stats.slice(0, 10).filter(x => x.value != currentMainstat.value))
  /** 5个部位的副属性列表二维数组 */
  const positionSubstats = reactive<number[][]>([[], [], [], [], []])
  /** 当前部位副属性已选id列表 */
  const currentSubstats = computed({
    get() {
      return positionSubstats[artifact.position]
    },
    set(value: number[]) {
      positionSubstats[artifact.position] = value
    }
  })

  /** 选择主属性后，删除副属性中的相同属性 */
  function selectMainstat(value: number) {
    let index = currentSubstats.value.findIndex(x => x == value)
    if (index != -1) {
      currentSubstats.value.splice(index, 1)
    }
  }

  const command = ref('')
  function sendCommand() {
    console.log(t('hello'))
  }
</script>

<i18n lang="json" locale="zh-CN">
{
  "hello": "hello world!"
}
</i18n>

<i18n lang="json" locale="en-US">
{
  "hello": "hello world!"
}
</i18n>
