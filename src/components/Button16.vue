<!-- Button16.vue -->
<script setup lang="ts">
interface Props {
    btn16Content: string
}

const { btn16Content = 'Button' } = defineProps<Props>()
const emit = defineEmits<{
    btn16Click: []
}>()

</script>

<template>
    <div>
        <button type="button" @click="emit('btn16Click')"
            class="relative z-1 cursor-pointer text-lg text-white font-semibold border-2 px-10 py-4 group">
            <div
                class="absolute z-2 -inset-x-0.5 inset-y-2 transition-all duration-700 bg-[#212121] group-hover:inset-y-full ">
            </div>
            <span class="relative z-3">
                {{ btn16Content }}
            </span>
            <div
                class="absolute z-2 -inset-y-0.5 inset-x-2 transition-all duration-700 delay-700 bg-[#212121] group-hover:inset-x-full">
            </div>
        </button>
    </div>

</template>
