<template>
  <n-layout class="min-w-800px h-screen flex-col">
    <n-layout-header class="flex h-10%">
      <layout-menu class="flex-evenly flex-1" />
      <language class="mr-6" />
      <theme class="mr-6" />
    </n-layout-header>
    <n-layout-content class="h-90%">
      <layout-main class="h-full w-full" />
    </n-layout-content>
  </n-layout>
</template>

<script setup lang="ts">
  import { Language, LayoutMain, LayoutMenu, Theme } from './components'
</script>
