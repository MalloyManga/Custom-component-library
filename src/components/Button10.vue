<!-- Button10.vue -->
<script setup lang="ts">
import EnterRight from './icons/EnterRight.vue';

interface Props {
    btn10Content: string
}
const { btn10Content = 'Discover' } = defineProps<Props>()
const emit = defineEmits<{
    btn10Click: []
}>()
</script>

<template>
    <div>
        <button type="button" @click="emit('btn10Click')"
            class="btn flex gap-2 text-xl leading-8 justify-center items-center bg-[#006AFF] text-white font-bold rounded-full px-8 py-4.5 tracking-wide cursor-pointer transition-all duration-300 border-8 border-[#C0DFFF] hover:bg-[#1b7aff] active:border-4">
            {{ btn10Content }}
            <span class="pt-1">
                <EnterRight class="svg" />
            </span>
        </button>
    </div>

</template>

<style scoped>
.btn:hover .svg {
    animation: jello-vertical 1s 1;
}

@keyframes jello-vertical {
    0% {
        transform: scale3d(1, 1, 1);
    }

    30% {
        transform: scale3d(0.75, 1.25, 1);
    }

    40% {
        transform: scale3d(1.25, 0.75, 1);
    }

    50% {
        transform: scale3d(0.85, 1.15, 1);
    }

    65% {
        transform: scale3d(1.05, 0.95, 1);
    }

    75% {
        transform: scale3d(0.95, 1.05, 1);
    }

    100% {
        transform: scale3d(1, 1, 1);
    }
}
</style>
