<!-- Button21.vue -->
<script setup lang="ts">
import Pie from './icons/Pie.vue'
import Settings from './icons/Settings.vue'
import Terminal from './icons/Terminal.vue'
</script>

<template>
    <div class="relative group">
        <button type="button"
            class="absolute z-1 p-4 bg-[#ff7f50]/80 text-white/50 border-4 border-[#311703]/80 rounded-lg cursor-pointer inset-shadow-[0_0_10px_#ff7f50] rotate-45 transition-all duration-500 group-hover:-rotate-180 group-hover:-translate-x-18 hover:text-white active:scale-90">
            <Pie class="size-6" />
        </button>
        <button type="button"
            class="relative z-3 p-4 bg-[#019b98]/80 text-white/50 border-4 border-[#311703]/80 rounded-lg cursor-pointer inset-shadow-[0_0_10px_#019b98] rotate-15 transition-all duration-500 group-hover:rotate-0 hover:text-white active:scale-90">
            <Settings class="size-6" />
        </button>
        <button type="button"
            class="absolute left-0 z-2 p-4 bg-[#ffd700]/80 text-white/50 border-4 border-[#311703]/80 rounded-lg cursor-pointer inset-shadow-[0_0_10px_#ffd700] rotate-75 transition-all duration-500 group-hover:rotate-270 group-hover:translate-x-18 hover:text-white active:scale-90">
            <Terminal class="size-6" />
        </button>
    </div>
</template>