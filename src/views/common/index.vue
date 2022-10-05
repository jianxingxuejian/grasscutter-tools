<template>
  <div class="px-10">
    <my-divider :title="t('t1')" />
    <div class="flex-col items-center gap-y-5 mb-5">
      <n-space class="items-center">
        <my-button :text="t('t2')" @click-async="playerCommand('setprop unlockmap 1')">
          <icon-icon-park-twotone-unlock />
        </my-button>
        <my-button :text="t('t3')" @click-async="levelUpAllSkill">
          <template #tooltip>
            <span>{{ t('tt1') }}</span>
          </template>
        </my-button>
        <my-switch v-model="data.inGodMode" :text="t('t4')" command="prop god" />
        <my-switch v-model="data.unLimitedStamina" :text="t('t5')" command="prop ns" />
        <my-switch v-model="data.unLimitedEnergy" :text="t('t6')" command="prop ue" />
      </n-space>

      <n-space>
        <n-popconfirm :show-icon="false">
          <template #trigger>
            <n-button>{{ t('t7') }}</n-button>
          </template>
          <template #action>
            <my-button :text="t('t7-1')" @click-async="playerCommand('clear all')" />
            <my-button :text="t('t7-2')" @click-async="playerCommand('clear wp')" />
            <my-button :text="t('t7-3')" @click-async="playerCommand('clear art')" />
            <my-button :text="t('t7-4')" @click-async="playerCommand('clear mat')" />
          </template>
          {{ t('tt2') }}
        </n-popconfirm>
        <my-button :text="t('t8')" @click-async="playerCommand('unlockall')" />
        <my-button :text="t('t22')" @click-async="cdr">
          <template #tooltip>
            <span>{{ t('tt3') }}</span>
          </template>
        </my-button>
        <my-input-group v-model="data.playerLevel" :label="t('t9')" :text="t('t10')" :min="1" :max="60" command="prop player_level" />
      </n-space>

      <n-space>
        <my-input-group v-model="data.worldLevel" :label="t('t11')" :text="t('t10')" :max="8" command="prop wl" />
        <my-input-group v-model="data.bpLevel" :label="t('t12')" :text="t('t10')" :max="50" command="prop bp" />
        <my-input-group v-model="data.towerLevel" :label="t('t13')" :text="t('t10')" :max="12" command="prop tower" />
      </n-space>

      <n-space class="items-center">
        <span class="text-4">{{ t('t14') }}</span>
        <div class="flex">
          <n-cascader v-model:value="weather" filterable expand-trigger="hover" check-strategy="child" :options="weatherOptions" />
          <my-button :text="t('t10')" @click-async="handleWeatherUpdate" />
        </div>
        <my-switch v-model="data.lockWeather" :text="t('t15')" command="prop is_weather_locked" />
        <my-switch v-model="data.lockGameTime" :text="t('t16')" command="prop is_game_time_locked" />
      </n-space>
    </div>

    <my-divider :title="t('t17')" />
    <div class="flex-col items-center gap-y-5">
      <n-space class="items-center">
        <span class="text-4">{{ t('t18') }}</span>
        <my-input-group v-model="data.skillN" label="N" :text="t('t10')" :max="15" command="talent n" />
        <my-input-group v-model="data.skillE" label="E" :text="t('t10')" :max="12" command="talent e" />
        <my-input-group v-model="data.skillQ" label="Q" :text="t('t10')" :max="12" command="talent q" />
      </n-space>

      <n-space>
        <n-input-group class="w-37">
          <n-input-group-label>{{ t('t19') }}</n-input-group-label>
          <n-input-number :value="data.avatarLevel" :show-button="false" disabled />
        </n-input-group>
        <my-input-group v-model="data.constellation" :label="t('t20')" :text="t('t10')" :max="6" command="setConst" />
        <my-input-group v-model="data.fetterLevel" :label="t('t21')" :text="t('t10')" :max="10" command="setFetterLevel" />
      </n-space>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { playerCommand, levelUpAllSkill, getProps, cdr } from '@/http'
  import { weatherIds } from './weather'

  const { t, tm } = useI18n()

  interface Data {
    inGodMode?: boolean
    unLimitedStamina?: boolean
    unLimitedEnergy?: boolean
    worldLevel: number
    bpLevel: number
    towerLevel: number
    playerLevel: number
    climateType?: number
    weatherId?: number
    lockWeather?: boolean
    lockGameTime?: boolean
    skillN: number
    skillE: number
    skillQ: number
    avatarLevel: number
    constellation: number
    fetterLevel: number
  }

  const data = reactive<Data>({
    worldLevel: 0,
    bpLevel: 0,
    towerLevel: 0,
    playerLevel: 1,
    skillN: 0,
    skillE: 0,
    skillQ: 0,
    avatarLevel: 0,
    constellation: 0,
    fetterLevel: 0
  })

  const weatherOptions = computed(() => {
    const arr: Message['weather'] = tm('weather')
    return arr.map((x, i) => ({
      value: x,
      label: x,
      children: weatherIds[i].map(y => ({ value: i + '_' + y, label: y.toString() }))
    }))
  })
  const weather = ref<string | null>(null)

  async function handleWeatherUpdate() {
    if (!weather.value) return
    const [type, id] = weather.value.split('_')
    const command = `w ${['sunny', 'cloudy', 'rain', 'thunderstorm', 'snow', 'mist', ''][Number(type)]} ${id}`
    const result = await playerCommand(command)
    if (result?.code === 200) {
      window.$message?.success(result.msg)
    }
  }

  onActivated(async () => {
    const result = await getProps()
    if (result?.code === 200) {
      Object.assign(data, result.data)
      weather.value = `${data.climateType}_${data.weatherId}`
    } else {
      Object.assign(data, {})
    }
  })
</script>

<i18n locale="zh-CN" lang="json">
{
  "t1": "通用设定",
  "t2": "解锁地图",
  "t3": "一键升级",
  "t4": "god模式",
  "t5": "无限体力",
  "t6": "无限能量",
  "t7": "清理背包",
  "t7-1": "全部",
  "t7-2": "武器",
  "t7-3": "圣遗物",
  "t7-4": "材料",
  "t8": "解锁开放状态",
  "t9": "冒险等级",
  "t10": "修改",
  "t11": "世界等级",
  "t12": "纪行等级",
  "t13": "深渊层数",
  "t14": "天气",
  "t15": "锁定天气",
  "t16": "锁定时间",
  "t17": "当前角色",
  "t18": "技能等级",
  "t19": "角色等级",
  "t20": "命座",
  "t21": "好感度",
  "t22": "无CD",
  "tt1": "一键升级所有角色等级、技能、命座、好感度",
  "tt2": "请选择清理的选项",
  "tt3": "所有角色的冷却缩减置为100%"
}
</i18n>

<i18n locale="en-US" lang="json">
{
  "t1": "General Settings",
  "t2": "Unlock Map",
  "t3": "level-up all",
  "t4": "God Mode",
  "t5": "Unlimited Stamina",
  "t6": "Unlimited Energy",
  "t7": "Clear Inventory",
  "t7-1": "All",
  "t7-2": "Weapons",
  "t7-3": "Artifacts",
  "t7-4": "Materials",
  "t8": "Unlock Open States",
  "t9": "Player level",
  "t10": "edit",
  "t11": "World level",
  "t12": "BP level",
  "t13": "Tower level",
  "t14": "Weather",
  "t15": "Lock Weather",
  "t16": "Lock Time",
  "t17": "Current Avatar",
  "t18": "Talent level",
  "t19": "Avatar level",
  "t20": "Constellation",
  "t21": "Friendship",
  "t22": "No CD",
  "tt1": "Level up all avatar, level, talents, constellation, friendship",
  "tt2": "Please select an option",
  "tt3": "All avatars cooldown reduction set to 100%"
}
</i18n>
