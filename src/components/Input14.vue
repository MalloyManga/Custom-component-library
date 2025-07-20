<!-- Input14.vue -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import Send from './icons/Send.vue'
import Upload2 from './icons/Upload2.vue'

const isFocused = ref(false)
const ipt14Value = defineModel<string>('ipt14Value')
const isActive = computed(() => {
    return isFocused.value || (ipt14Value.value == '')
})
</script>

<template>
    <div>
        <div
            class="inline-flex justify-center items-center bg-[#2D2D2D] w-60 h-10 rounded-lg border-2 border-[#3f3f3f] transition-all duration-300 focus-within:border-[#6e6e6e]">
            <label class="inline-block cursor-pointer text-[#6C6C6C] hover:text-white">
                <div>
                    <Upload2 class="w-[18px] h-[18px] transition-all duration-300" />
                </div>
                <input type="file" class="hidden">
            </label>
            <input type="text" placeholder="Message..." @focus="isFocused = true" @blur="isFocused = false"
                v-model="ipt14Value" class="outline-none h-full w-44 p-2 text-white placeholder:text-[#6C6C6C] ">
            <div>
                <Send :class="isActive ? 'text-white' : 'text-[#6c6c6c]'"
                    class="w-[18px] h-[18px] transition-all duration-300 " />
            </div>
        </div>
    </div>



</template>