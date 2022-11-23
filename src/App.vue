<template>
  <n-config-provider :locale="locale" :date-locale="dateLocale" :theme-overrides="themeOverrides" :theme="theme">
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
  import { useEventListener } from '@vueuse/core'
  import { zhCN, enUS, jaJP, dateZhCN, dateEnUS, dateJaJP, lightTheme, darkTheme } from 'naive-ui'
  import { useAppStore, useSettingStore } from '@/stores'

  const appStore = useAppStore()
  const settingStore = useSettingStore()

  const locale = computed(() => {
    switch (settingStore.locale) {
      case 'zh-CN':
        return zhCN
      case 'en':
        return enUS
      case 'ja-JP':
        return jaJP
      default:
        return enUS
    }
  })
  const dateLocale = computed(() => {
    switch (settingStore.locale) {
      case 'zh-CN':
        return dateZhCN
      case 'en':
        return dateEnUS
      case 'ja-JP':
        return dateJaJP
      default:
        return dateEnUS
    }
  })
  const theme = computed(() => {
    switch (settingStore.theme) {
      case 'light':
        return lightTheme
      case 'dark':
        return darkTheme
      default:
        return lightTheme
    }
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
    Divider: {
      color: 'rgb(236,236,242)'
    },
    Drawer: {
      titleFontSize: '1.5rem'
    },
    Form: {
      labelFontSizeLeftMedium: '1rem',
      labelFontSizeLeftLarge: '1.2rem',
      labelPaddingHorizontal: '0 0.5rem 0 0',
      feedbackHeightMedium: '1.2rem',
      feedbackFontSizeMedium: '0.8rem',
      feedbackPadding: '0.2rem 0 0 0.2rem'
    },
    Progress: {
      railHeight: '0.5rem'
    },
    Input: {
      paddingMedium: '0 1rem'
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
    Notification: {
      closeMargin: '1rem 0.75rem',
      closeSize: '2rem',
      closeIconSize: '1.5rem',
      width: '25rem',
      padding: '1rem',
      titleFontSize: '1.5rem',
      descriptionFontSize: '1rem'
    },
    Popconfirm: {
      fontSize: '1rem'
    },
    Radio: {
      radioSizeMedium: '1.5rem'
    },
    Rate: {
      sizeMedium: '1.5rem'
    },
    Slider: {
      railHeight: '0.25rem',
      handleSize: '1.125rem'
    },
    Space: {
      gapMedium: computed(() => {
        const fontSize = appStore.fontSize
        return fontSize + 'px ' + fontSize * 1.5 + 'px'
      })
    },
    Switch: {
      buttonHeightMedium: '1.4rem',
      buttonWidthMedium: '1.4rem',
      buttonWidthPressedMedium: '1.8rem',
      railHeightMedium: '1.6rem',
      railWidthMedium: '3.5rem'
    },
    Tag: {
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

  useEventListener(window, 'resize', () => resizeFontSize())

  onMounted(() => resizeFontSize())
</script>

<style lang="scss">
  @import '@/styles/scss/naive-ui.scss';
</style>
