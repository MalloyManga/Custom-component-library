<!-- Button15.vue -->
<script setup lang="ts">
import Code from './icons/Code.vue'

// navigator.clipboard.writeText(text)
const emit = defineEmits<{
    btn15Click: []
}>()

</script>

<template>
    <div class="flex items-center justify-center">
        <button type="button" @click="emit('btn15Click')"
            class="overflow-hidden relative flex justify-center items-center rounded-xl text-lg text-white tracking-wider bg-black px-5 py-3 cursor-pointer group active:scale-95">
            <div
                class="btnBg absolute right-0 z-1 size-48 origin-bottom-right -rotate-58 transition-transform duration-500 group-hover:rotate-0">
            </div>
            <span class="relative z-2 flex gap-2 justify-center items-center">
                <Code class="size-5" />
                Code
            </span>
        </button>
    </div>

</template>

<style scoped>
.btnBg {
    background-image: linear-gradient(to right, #8e2de2, #4a00e0);
}
</style>