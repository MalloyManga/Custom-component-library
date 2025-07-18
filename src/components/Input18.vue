<!-- Input18.vue -->
<script setup lang="ts">
import { ref } from 'vue';

const isHovered = ref(false)
</script>

<template>
    <div>
        <div @mouseenter="isHovered = true" @mouseleave="isHovered = false"
            class="inline-flex relative items-end bg-sky-400 w-48 h-36 p-2 rounded-2xl bg-linear-135 from-[#6dd5ed] to-[#2193b0] shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
            <div :class="isHovered ? 'scale-105' : ''"
                class="folder absolute top-[-10px] left-[calc(50%-60px)] transition-transform duration-300">
                <!-- folder -->

                <div :class="isHovered ? 'rotate-x-[40deg] skew-x-[15deg]' : ''"
                    class="absolute z-2 origin-bottom transition-all duration-300">
                    <!-- front-cover -->
                    <div
                        class="absolute z-3 -top-[10px] w-20 h-5 rounded-t-[10px] bg-linear-135 from-[#ff9a56] to-[#ff6f56]">
                    </div>
                    <!-- tip -->

                    <div
                        class="w-[120px] h-20 rounded-[10px] bg-linear-135 from-[#ffe563] to-[#ffc663] shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
                    </div>
                    <!-- side -->
                </div>
                <div :class="isHovered ? 'rotate-x-[5deg] skew-x-[5deg]' : ''"
                    class="w-[120px] h-20 rounded-[10px] absolute z-1 bg-white/50 origin-bottom transition-all duration-300">
                    <!-- content -->
                </div>
                <div :class="isHovered ? 'rotate-x-[15deg] skew-x-12' : ''"
                    class="w-[120px] h-20 rounded-[10px] absolute z-1 bg-white/50 origin-bottom transition-all duration-300">
                    <!-- content -->
                </div>

                <div
                    class="w-[120px] h-20 rounded-[10px] absolute bg-linear-135 from-[#ffe563] to-[#ffc663] shadow-[0_15px_30px_rgba(0,0,0,0.3)] origin-bottom transition-all duration-300">
                    <!-- back-cover -->
                </div>
            </div>
            <label
                class="inline-flex justify-center items-center rounded-lg bg-white/20 w-44 h-11 text-white cursor-pointer transition-all duration-300 hover:bg-white/40">
                <span>Choose a file</span>
                <input type="file" class="hidden">
            </label>
        </div>
    </div>
</template>

<style scoped>
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.folder {
    animation: float 3s infinite;
}
</style>