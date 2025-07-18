<!-- Button6.vue -->
<script setup lang="ts">
interface Props {
    btn6Content: string
}
const { btn6Content = 'Button' } = defineProps<Props>()
const emit = defineEmits<{
    btn6Click: []
}>()
</script>

<template>
    <div>
        <button type="button" @click="emit('btn6Click')"
            class="bg-white px-4 py-2 cursor-pointer transition-all duration-500 rounded-xs shadow-[2px_2px_#E6E6E6,4px_4px_#CCCCCC,6px_6px_#B3B3B3,8px_8px_#999999,10px_10px_#808080,12px_12px_#666666,14px_14px_#4D4D4D,16px_16px_#333333,18px_18px_#1A1A1A] hover:shadow-none hover:text-white hover:bg-[#808080]">
            {{ btn6Content }}
        </button>
    </div>


</template>