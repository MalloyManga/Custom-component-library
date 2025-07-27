<!-- Input11.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const isFocused = ref(false)
const ipt11Value = defineModel<string>('ipt11Value')
interface Props {
    ipt11Label: string
}
const { ipt11Label = 'SMOOTH BRUTALIST' } = defineProps<Props>()


</script>

<template>
    <div>
        <label :class="isFocused ? 'scale-110 bg-[#4A90E2]' : '-rotate-1 bg-black'" for="ipt11"
            class="font-[monospace] block font-bold py-[5px] px-[10px] mb-1 text-[14px] text-white w-fit transition-all duration-300">
            {{ ipt11Label }}
        </label>
        <input type="text" @focus="isFocused = true" @blur="isFocused = false" placeholder="TYPE HERE" id="ipt11"
            v-model="ipt11Value"
            class="ipt11 outline-none font-bold bg-white w-56 h-12 pl-3 border-4 shadow-[5px_5px,10px_10px_#4A90E2] transition-all duration-300 placeholder:transition-opacity placeholder:duration-300 focus:placeholder:opacity-0">
    </div>
</template>

<style scoped>
@keyframes borderFlash {

    0%,
    100% {
        border-color: black;
    }

    50% {
        border-color: #4A90E2;
    }
}

.ipt11:focus {
    animation: borderFlash infinite 2s alternate;
}
</style>