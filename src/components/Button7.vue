<!-- Button7.vue -->
<!-- 源码没看 -->
<script setup lang="ts">
interface Props {
    btn7Content: string
}
const { btn7Content = 'Button' } = defineProps<Props>()
const emit = defineEmits<{
    btn7Click: []
}>()
</script>

<template>
    <div>
        <button type="button" @click="emit('btn7Click')"
            class="bg-transparent px-[30px] py-[15px] text-[#725AC1] border-2 border-[#725AC1] rounded-xl tracking-wider transition-all duration-500 cursor-pointer hover:shadow-[inset_0px_-60px_#725AC1] hover:text-white active:scale-90 ">
            {{ btn7Content }}
        </button>
    </div>


</template>