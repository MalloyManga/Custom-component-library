<!-- Button5.vue -->
<script setup lang="ts">
interface Props {
    btn5Content: string
    btn5W?: string
    btn5H?: string
}
const { btn5Content = 'Button' } = defineProps<Props>()

</script>

<template>
    <div>
        <button type="button" :class="[btn5W, btn5H]"
            class="bg-white outline-none px-4 py-2 rounded-sm border-2 border-[#323232] font-bold text-[#323232] cursor-pointer shadow-[3px_3px] active:shadow-[0px_0px] active:translate-[3px]">
            {{ btn5Content }}
        </button>
    </div>
</template>