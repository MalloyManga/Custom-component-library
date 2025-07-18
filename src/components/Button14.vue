<!-- Button14.vue -->
<script setup lang="ts">
import Codepen from './icons/Codepen.vue';
import Github from './icons/Github.vue';
import Jike from './icons/Jike.vue';

interface Props {
    btn14Content: string
}
const { btn14Content = 'Button' } = defineProps<Props>()
const emit = defineEmits<{
    btn14Click: []
}>()
</script>

<template>
    <div class="flex justify-center">
        <button type="button" @click="emit('btn14Click')"
            class="w-[15em] h-[4em] bg-white rounded-full group overflow-hidden">
            <span
                class="inline-block relative z-2 leading-16 bg-black text-white size-full rounded-full tracking-widest transition-all duration-500 group-hover:w-0 group-hover:z-0">
                {{ btn14Content }}
            </span>
            <div
                class="relative z-1 flex justify-around items-center -translate-y-12 transition-all duration-500 scale-0 origin-left group-hover:scale-100">
                <a href="#">
                    <Jike class="size-9" />
                </a>
                <a href="##">
                    <Codepen class="size-9" />
                </a>
                <a href="###">
                    <Github class="size-9" />
                </a>
            </div>
        </button>
    </div>
</template>