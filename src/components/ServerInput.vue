<template>
  <n-input-group>
    <n-popselect v-model:value="server.protocol" :options="protocolOptions">
      <n-input-group-label>{{ server.protocol }}</n-input-group-label>
    </n-popselect>
    <n-input v-model:value="server.ip">
      <template #suffix>
        <n-dropdown trigger="hover" :options="history" :render-label="renderDropdownLabel">
          <my-button>
            <icon-material-symbols-history />
          </my-button>
        </n-dropdown>
      </template>
    </n-input>
  </n-input-group>
</template>

<script setup lang="ts">
  import type { DropdownOption } from 'naive-ui'
  import IconDelete from '~icons/mdi/delete-forever-outline'
  import { useSettingStore } from '@/stores'
  import { MyButton } from './'

  const settingStore = useSettingStore()
  const { server, updateServer } = settingStore

  const protocolOptions = [
    { label: 'http', value: 'http' },
    { label: 'https', value: 'https' }
  ]

  const history = computed(() => server.history.map(item => ({ key: item, label: item })))

  function renderDropdownLabel(option: DropdownOption) {
    return h('div', { class: 'flex-between' }, [
      h('span', { class: 'mr-2', onClick: () => handleSelectHistory(option.key) }, { default: () => option.label }),
      h(MyButton, { onClick: () => deleteHistory(option.key) }, { default: () => h(IconDelete) })
    ])
  }

  function deleteHistory(key?: string | number) {
    if (key) {
      const history = server.history
      history.splice(
        history.findIndex(item => item === key),
        1
      )
    }
  }

  function handleSelectHistory(key?: string | number) {
    if (key && typeof key === 'string') {
      server.ip = key
      updateServer()
    }
  }
</script>
