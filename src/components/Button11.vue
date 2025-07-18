<!-- Button11.vue -->
<script setup lang="ts">
interface Props {
    btn11Content: string
}

const { btn11Content = 'Button' } = defineProps<Props>()
const emit = defineEmits<{
    btn11Click: []
}>()
</script>

<template>
    <div>
        <button type="button" @click="emit('btn11Click')"
            class="relative overflow-hidden text-[#00FA9A] cursor-pointer font-bold border-4 border-[#00FA9A] px-10.5 py-4 rounded-md text-2xl transition-all duration-300 hover:text-[#212121] active:border-[#008080] group">
            <div
                class="absolute z-1 -left-48 -top-18 bg-[#00FA9A]/50 size-54 rounded-full transition-all duration-500 group-hover:translate-x-44 group-active:bg-[#086868]/50">
            </div>
            <div
                class="absolute z-1 -right-48 -top-18 bg-[#00FA9A]/50 size-54 rounded-full transition-all duration-500 group-hover:-translate-x-44 group-active:bg-[#086868]/50">
            </div>
            <span class="relative z-2">
                {{ btn11Content }}
            </span>
        </button>
    </div>

</template>
