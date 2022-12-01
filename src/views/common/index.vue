<template>
  <div class="px-0">
    <my-divider :title="t('general settings')" />
    <div class="flex-col items-center gap-y-5 mb-5">
      <n-space class="items-center">
        <my-button :text="t('unlock map')" @click-async="playerCommand('setprop unlockmap 1')">
          <icon-ic-round-lock-open />
        </my-button>
        <n-popconfirm :show-icon="false">
          <template #trigger>
            <n-button>{{ t('level-up all') }}</n-button>
          </template>
          <template #action>
            <my-button :text="t('all')" @click-async="levelUpAll(0)" />
            <my-button :text="t('avatar lv')" @click-async="levelUpAll(1)" />
            <my-button :text="t('talent lv')" @click-async="levelUpAll(2)" />
            <my-button :text="t('friendship')" @click-async="levelUpAll(3)" />
          </template>
          {{ t('level-up all options') }}
        </n-popconfirm>
        <my-switch v-model="data.inGodMode" :text="t('god mode')" command="prop god" />
        <my-switch v-model="data.unLimitedStamina" :text="t('un stamina')" command="prop ns" />
        <my-switch v-model="data.unLimitedEnergy" :text="t('un energy')" command="prop ue" />
      </n-space>

      <n-space>
        <n-popconfirm :show-icon="false">
          <template #trigger>
            <n-button>{{ t('clear inventory') }}</n-button>
          </template>
          <template #action>
            <div class="flex-col gap-y-2">
              <n-space class="items-center">
                <span>{{ t('max lv') }}: </span>
                <n-input-number v-model:value="maxLv" :min="0" :max="90" class="w-35" />
              </n-space>
              <n-space class="items-center">
                <span>{{ t('max refinement') }}: </span>
                <n-input-number v-model:value="maxRefinement" :min="0" :max="5" class="w-30" />
              </n-space>
              <n-space class="items-center">
                <span>{{ t('max rarity') }}: </span>
                <n-rate v-model:value="maxRarity" />
              </n-space>
              <div class="flex-center">
                <my-button :text="t('all')" @click-async="playerCommand('clear all' + cleanParam)" />
                <my-button :text="t('weapons')" @click-async="playerCommand('clear wp' + cleanParam)" />
                <my-button :text="t('artifacts')" @click-async="playerCommand('clear art' + cleanParam)" />
                <my-button :text="t('materials')" @click-async="playerCommand('clear mat' + cleanParam)" />
              </div>
            </div>
          </template>
          {{ t('select a option') }}
        </n-popconfirm>
        <my-button :text="t('unlock open')" @click-async="playerCommand('unlockall')" />
        <my-button :text="t('no cd')" @click-async="cdr">
          <template #tooltip>
            <span>{{ t('all avatars cd 100%') }}</span>
          </template>
        </my-button>
        <my-input-group
          v-model="data.playerLevel"
          :label="t('player lv')"
          :text="t('edit')"
          :min="1"
          :max="60"
          command="prop player_level"
        />
      </n-space>

      <n-space>
        <my-input-group v-model="data.worldLevel" :label="t('world lv')" :text="t('edit')" :max="8" command="prop wl" />
        <my-input-group v-model="data.bpLevel" :label="t('bp lv')" :text="t('edit')" :max="50" command="prop bp" />
        <my-input-group
          v-model="data.towerLevel"
          :label="t('tower lv')"
          :text="t('edit')"
          :max="12"
          command="prop tower"
        />
      </n-space>

      <n-space class="items-center">
        <span class="text-4">{{ t('weather') }}</span>
        <div class="flex">
          <n-cascader
            v-model:value="weather"
            filterable
            :filter="filterIgnoreCase"
            expand-trigger="hover"
            check-strategy="child"
            :options="weatherOptions"
            class="w-100"
          />
          <my-button :text="t('edit')" @click-async="handleWeatherUpdate" />
        </div>
        <my-switch v-model="data.lockWeather" :text="t('lock weather')" command="prop is_weather_locked" />
        <my-switch v-model="data.lockGameTime" :text="t('lock time')" command="prop is_game_time_locked" />
      </n-space>
    </div>

    <my-divider :title="t('current avatar')" />
    <div class="flex-col items-center gap-y-5">
      <n-space class="items-center">
        <span class="text-4">{{ t('talent lv') }}</span>
        <my-input-group v-model="data.skillN" label="N" :text="t('edit')" :max="15" command="talent n" />
        <my-input-group v-model="data.skillE" label="E" :text="t('edit')" :max="12" command="talent e" />
        <my-input-group v-model="data.skillQ" label="Q" :text="t('edit')" :max="12" command="talent q" />
      </n-space>

      <n-space>
        <n-input-group class="text-center">
          <n-input-group-label>{{ t('avatar lv') }}</n-input-group-label>
          <n-input-number :value="data.avatarLevel" :show-button="false" disabled class="w-15!" />
        </n-input-group>
        <my-input-group
          v-model="data.constellation"
          :label="t('constellation')"
          :text="t('edit')"
          :max="6"
          command="setConst"
        />
        <my-input-group
          v-model="data.fetterLevel"
          :label="t('friendship')"
          :text="t('edit')"
          :max="10"
          command="setFetterLevel"
        />
      </n-space>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { playerCommand, levelUpAll, getProps, cdr } from '@/http'
  import { showSuccessMsg, filterIgnoreCase } from '@/utils'

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

  const maxLv = ref(1)
  const maxRefinement = ref(1)
  const maxRarity = ref(4)
  const cleanParam = computed(() => ` lv${maxLv.value} r${maxRefinement.value} ${maxRarity.value}*`)

  const weatherOptions = computed<Message['weather']>(() => tm('data.weather'))
  const weather = ref<string | null>(null)

  async function handleWeatherUpdate() {
    if (!weather.value) return
    const [type, id] = weather.value.split('_')
    const command = `w ${['sunny', 'cloudy', 'rain', 'thunderstorm', 'snow', 'mist'][Number(type)]} ${id}`
    const result = await playerCommand(command)
    showSuccessMsg(result)
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
