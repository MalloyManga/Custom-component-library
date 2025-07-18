<!-- Input5.vue -->
<script setup lang="ts">
import { computed, ref } from 'vue';
import WidthProgressBar from './WidthProgressBar.vue';

defineOptions({
    name: 'Input5'
})

const ipt5PrgBar = ref('background-image: linear-gradient(90deg, #FF6464 0%, #FFBF59 50%, #47C9FF 100%);')
const isFocused = ref(false)
const ipt5Value = defineModel<string>('ipt5Value')

const ipt5PrgWidth = computed(() => {
    return isFocused.value ? 'w-[300px]' : 'w-0'
})

interface Props {
    ipt5Name: string;
    ipt5Placeholder?: string;
}
const { ipt5Name = 'ipt5', ipt5Placeholder = 'Type something intelligent' } = defineProps<Props>()
</script>

<template>
    <div>
        <div class="relative inline-block bg-[#212121] shadow-xl">
            <input type="text" :name="ipt5Name" v-model="ipt5Value" :placeholder="ipt5Placeholder"
                @focus="isFocused = !isFocused" @blur="isFocused = !isFocused"
                class="outline-none w-[300px] h-14 bg-transparent pl-10.5  text-white font-bold placeholder:text-gray-400">
            <WidthProgressBar :prg-width="ipt5PrgWidth" :prg-dura="'duration-500'" :prg-bgi="ipt5PrgBar" />
        </div>
    </div>
</template>
