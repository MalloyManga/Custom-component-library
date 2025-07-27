<!-- Input10.vue -->
<script setup lang="ts">
import { computed, ref } from 'vue'

const isFocused = ref(false)
const ipt10Value = defineModel<string>('ipt10Value', { default: '' })
const isActive = computed(() => {
  return isFocused.value || (ipt10Value.value != '' && ipt10Value.value.trim() != '')
})

interface Props {
  ipt10Label: string
}

const { ipt10Label = 'Name' } = defineProps<Props>()
</script>

<template>
  <div>
    <div class="inline-flex flex-col justify-end h-20">
      <label for="ipt10" :class="isActive ? 'text-[#45F3FF] pl-0' : 'text-gray-400 pl-2'"
        class="cursor-text transition-all duration-500">
        {{ ipt10Label }}
      </label>
      <div :class="isActive ? 'h-11' : 'h-[3px]'"
        class="inline-block relative bg-[#45F3FF] rounded-md transition-all duration-500 w-48">
        <input type="text" id="ipt10" v-model="ipt10Value" @focus="isFocused = true" @blur="isFocused = false"
          class="absolute bg-transparent w-48 h-11 pl-2 left-0 bottom-0 outline-none">
      </div>
    </div>
  </div>

</template>