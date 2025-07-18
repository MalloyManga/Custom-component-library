<!-- Button8.vue -->
<script setup lang="ts">
interface Props {
    btn8Content: string
}
const { btn8Content = 'Button' } = defineProps<Props>()
const emit = defineEmits<{
    btn8Click: []
}>()
</script>

<template>
    <div>
        <button type="button" @click="emit('btn8Click')"
            class="relative z-0 px-6 py-2 tracking-[2px] cursor-pointer bg-[#f0f0f0] text-[#FF0072] font-bold border-3 shadow-md border-[#FF0072] transition-all duration-500 hover:text-[#f0f0f0] after:content-[''] after:absolute after:-z-1 after:opacity-0 after:transition-all after:duration-500 after:bg-[#FF0072] after:inset-0 after:scale-x-0 hover:after:scale-x-100 hover:after:opacity-100 active:scale-90">
            {{ btn8Content }}
        </button>
    </div>

</template>