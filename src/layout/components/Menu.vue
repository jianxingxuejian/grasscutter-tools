<template>
  <n-menu class="select-none" mode="horizontal" :value="activeKey" :options="menus" @update:value="handleUpdateMenu">
  </n-menu>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/store'
  import type { MenuOption } from 'naive-ui/es/menu/src/interface'

  const { menus } = useAppStore()
  const router = useRouter()
  const route = useRoute()

  // 根据路由找到当前菜单项
  const activeKey = computed(() => {
    return route.name as string
  })

  function handleUpdateMenu(_key: string, item: MenuOption) {
    router.push(item.path as string)
  }
</script>
