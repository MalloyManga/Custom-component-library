<!-- ProgressBar.vue -->
<script setup lang="ts">
interface Props {
    prgWidth: string;
    prgBgi?: string; // 接收渐变色相关 绑定到style attr(非TailwindCSS)
    prgBgc?: string; // 接收纯色相关 默认 sky400r
    prgDura?: string;
}
const { prgWidth, prgBgi, prgBgc = 'bg-sky-400', prgDura = 'duration-300' } = defineProps<Props>()
</script>

<template>

    <span class="absolute left-0 bottom-0 h-1 transition-all" :class="[prgDura, prgWidth, prgBgc]"
        :style="prgBgi"></span>
</template>
