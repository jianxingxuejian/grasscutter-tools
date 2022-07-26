<!-- 二次封装n-select组件，增加最大可选数量限制 -->
<template>
  <n-select v-model:value="substatArray" :options="options" v-bind="$attrs"></n-select>
</template>

<script setup lang="ts">
  import type { SelectOption } from 'naive-ui'

  const props = defineProps<{
    /** 最大可选数量 */
    maxSelectCount?: number
    value: number[]
    options: SelectOption[]
  }>()

  const substatArray = computed({
    get() {
      return props.value
    },
    set(value: number[]) {
      emit('update:value', value)
    }
  })

  /** 禁选状态 */
  const disabled = ref(false)

  const emit = defineEmits<{
    (e: 'update:value', value: number[]): void
  }>()

  watch(
    () => props.value,
    () => {
      //存在最大值
      if (props.maxSelectCount) {
        //状态为未禁选且数量大于等于最大值
        if (!disabled.value && props.value.length >= props.maxSelectCount) {
          //获取所有的下拉框，zIndex最大的即为当前激活的下拉框
          const parents = Array.from(
            document.getElementsByClassName('v-binder-follower-container') as HTMLCollectionOf<HTMLElement>
          )
          const max = parents.reduce((prev, next) => {
            return prev.style.zIndex > next.style.zIndex ? prev : next
          })
          //获取所有选项，将未选择的设为禁选
          const elements = Array.from(max.getElementsByClassName('n-base-select-option'))
          elements
            .filter(el => !el.classList.contains('n-base-select-option--selected'))
            .forEach(el => {
              el.classList.add('n-base-select-option--disabled')
            })

          props.options.forEach(x => {
            x.disabled = !props.value.includes(x.value as number)
          })

          disabled.value = true
        }
        //数量小于最大值则清除禁选状态
        else {
          const elements: Element[] = Array.from(document.getElementsByClassName('n-base-select-option'))
          elements.forEach(el => {
            el.classList.remove('n-base-select-option--disabled')
          })

          props.options.forEach(x => {
            x.disabled = false
          })

          disabled.value = false
        }
      }
    },
    { deep: true }
  )
</script>
