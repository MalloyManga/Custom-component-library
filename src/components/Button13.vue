<!-- Button13.vue -->
<script setup lang="ts">
import Star from './icons/Star.vue';

interface Props {
    btn13Content: string
}

const { btn13Content = 'Button' } = defineProps<Props>()
const emit = defineEmits<{
    btn13Click: []
}>()
</script>

<template>
    <div>
        <button type="button" @click="emit('btn13Click')" class="btn13 cursor-pointer p-0.5 rounded-full group">
            <div class="flex justify-center items-center gap-3 bg-white rounded-full py-2 px-4 text-xs ">
                <Star class="transition-transform duration-500 group-hover:rotate-360" />
                <span
                    class="bg-gradient-to-b  from-neutral-950 to-neutral-950/50 bg-clip-text text-xs text-transparent transition-all duration-300 group-hover:scale-105">
                    {{ btn13Content }}
                </span>
            </div>
        </button>
    </div>

</template>

<style scoped>
.btn13 {
    background-image: linear-gradient(135deg, rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63));
}
</style>