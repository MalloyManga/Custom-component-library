<!-- Button12.vue -->
<script setup lang="ts">
interface Props {
    btn12Content: string
}

const { btn12Content = 'Button' } = defineProps<Props>()
const emit = defineEmits<{
    btn12Click: []
}>()
</script>

<template>
    <div>
        <button type="button" @click="emit('btn12Click')"
            class="flex justify-center items-center gap-2 cursor-pointer bg-[#645BFF] text-white py-3 px-7 rounded-full font-bold transition-all duration-300 hover:bg-black group">
            <span>
                {{ btn12Content }}
            </span>
            <div class="relative w-2 h-0.5 transition-all duration-300 bg-[#645BFF] group-hover:bg-white">
                <div
                    class="absolute -top-[3px] left-[1px] inline-block size-2 bg-transparent border-r-2 border-t-2 border-white dark:border-white rotate-45 transition-all duration-300 -translate-x-0.5 group-hover:translate-x-0">
                </div>
            </div>
        </button>

    </div>


</template>