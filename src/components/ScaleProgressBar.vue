<!-- ScaleProgressBar.vue -->
<!-- 注意父组件需要一个 flag 来进行信号的传递 以及 具体样式的调整 -->
<!-- 操作方式为子绝父相 注意父元素定位 -->

<script setup lang="ts">
interface Prop {
    prgBgi?: string
    prgWidth?: string
    prgBgc?: string
    prgDura?: string
    prgScale: string
    prgOri?: string
    prgHt?: string
    prgPos?: string
}

const { prgBgi, prgWidth, prgBgc = 'bg-sky-300', prgDura = 'duration-300', prgScale, prgHt = 'h-1', prgOri, prgPos = 'left-0 bottom-0' } = defineProps < Prop > ()

</script>

<template>
    <span class="absolute transition-all" :class="[prgDura, prgWidth, prgScale, prgOri, prgBgc, prgHt, prgPos]"
        :style="prgBgi"></span>

</template>