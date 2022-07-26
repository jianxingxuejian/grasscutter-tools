<template>
  <n-config-provider :locale="locale" :date-locale="dateLocale" :theme-overrides="themeOverrides">
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
  import { useEventListener } from '@vueuse/core'
  import { zhCN, enUS, dateZhCN, dateEnUS, darkTheme } from 'naive-ui'
  import { useAppStore, useSettingsStore } from '@/store'

  const appStore = useAppStore()
  const settingsStore = useSettingsStore()

  const locale = computed(() => {
    const locale = settingsStore.locale
    return locale === 'zh-CN' ? zhCN : enUS
  })
  const dateLocale = computed(() => {
    const locale = settingsStore.locale
    return locale === 'zh-CN' ? dateZhCN : dateEnUS
  })

  //naive-ui全分辨率适配，由于没有全部适配rem，部分需要转px
  const themeOverrides = reactive({
    common: {
      borderRadius: '0.3rem',
      fontSize: '1rem',
      fontSizeSmall: '0.8rem',
      fontSizeMedium: '1rem',
      fontSizeLarge: '1.2rem',
      heightSmall: '1.5rem',
      heightMedium: computed(() => appStore.fontSize * 2 + 'px'),
      heightLarge: '2.5rem'
    },
    Button: {
      paddingMedium: '0 0.5rem',
      iconMarginMedium: '0.25rem',
      iconSizeMedium: '1.5rem'
    },
    Form: {
      labelFontSizeLeftMedium: '1rem',
      labelFontSizeLeftLarge: '1.2rem',
      labelPaddingHorizontal: '0 0.5rem 0 0',
      feedbackHeightMedium: '1.2rem',
      feedbackFontSizeMedium: '0.8rem',
      feedbackPadding: '0.2rem 0 0 0'
    },
    Menu: {
      fontSize: '1.25rem'
    },
    Message: {
      margin: '0.3rem 0 0.6rem 0',
      padding: '0.4rem 0.8rem',
      fontSize: '1rem',
      iconSize: '1.4rem',
      iconMargin: '0 0.5rem 0 0'
    },
    Popconfirm: {
      fontSize: '1rem'
    },
    Space: {
      gapMedium: computed(() => {
        const fontSize = appStore.fontSize
        return fontSize + 'px ' + fontSize * 1.5 + 'px'
      })
    },
    Tag: {
      fontSizeMedium: '20px',
      padding: '0 0.3rem',
      closeIconSizeMedium: '0.8rem',
      closeMargin: '0 0 0 0.2rem'
    }
  })

  /** 宽度发生变化时修改基准字体大小 */
  function resizeFontSize() {
    let width = document.body.clientWidth
    let fontSize = (width / 1920) * 30 <= 12.5 ? 12.5 : (width / 1920) * 30
    document.documentElement.style.fontSize = fontSize + 'px'
    appStore.updateFontSize(fontSize)
  }

  useEventListener(window, 'resize', () => {
    resizeFontSize()
  })

  onMounted(() => {
    resizeFontSize()
  })
</script>

<style lang="scss">
  @import '@/styles/scss/naive-ui.scss';
</style>
