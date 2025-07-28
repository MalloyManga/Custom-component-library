<!-- Button19.vue -->
<script setup lang="ts">
import BilibiliUpload from './icons/BilibiliUpload.vue'

interface Prop {
    btn19Content: string
}

const { btn19Content = '投稿' } = defineProps<Prop>()

</script>

<template>
    <div>
        <button type="button"
            class="flex justify-center items-center gap-2 bg-[#FB7299] px-6 py-2 rounded-xl cursor-pointer transition-all duration-300 hover:brightness-115">
            <BilibiliUpload class="text-white" />
            <span class="text-white">
                {{ btn19Content }}
            </span>
        </button>
    </div>



</template>