<!-- Button9.vue -->
<script setup lang="ts">
interface Props {
    btn9Content: string
}
const { btn9Content = 'Button' } = defineProps<Props>()
const emit = defineEmits<{
    btn9Click: []
}>()
</script>

<template>
    <div>
        <button type="button" @click="emit('btn9Click')"
            class="btn9 flex group justify-center items-center cursor-pointer text-white p-[3px] rounded-lg transition-all duration-300 active:scale-90">
            <span
                class="px-10.5 group-hover:bg-transparent bg-[#05062D] rounded-md py-3 size-full transition-all duration-300">
                {{ btn9Content }}
            </span>
        </button>
    </div>

</template>

<style scoped>
.btn9 {
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    /* 会覆盖掉圆角属性 源码巧妙地用了 内部span */
}
</style>