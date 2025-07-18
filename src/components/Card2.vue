<!-- Card.2.vue -->
<script setup lang="ts">
import { computed } from 'vue';
interface Props {
    isDark?: boolean
}
const { isDark } = defineProps<Props>()

const darkBgc = computed(() => {
    return isDark ? 'bg-[#212121]' : 'bg-[#E8E8E8]'
})

</script>

<template>
    <div :class="darkBgc"
        class="min-h-fit px-1 inline-flex justify-center items-center rounded-2xl border-2 border-gray-300">
        <slot></slot>
    </div>
</template>