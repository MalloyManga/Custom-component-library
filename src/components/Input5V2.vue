<!-- Input5V2.vue -->
<script setup lang="ts">
import { computed, ref } from 'vue';
import ScaleProgressBar from './ScaleProgressBar.vue';

defineOptions({
    name: 'Input5V2'
})
const ipt5PrgBar = ref('background-image: linear-gradient(90deg, #FF6464 0%, #FFBF59 50%, #47C9FF 100%);')
const isFocused = ref(false)
const ipt5V2Value = defineModel<string>('ipt5V2Value')

const ipt5V2PrgScale = computed(() => {
    return isFocused.value ? 'scale-x-100' : 'scale-x-0'
})
interface Props {
    ipt5V2Name: string;
    ipt5Placeholder?: string;
}
const { ipt5V2Name = 'ipt5V2', ipt5Placeholder = 'Type something intelligent' } = defineProps<Props>()
</script>

<template>
    <div>
        <div class="ipt5Box relative inline-block bg-[#212121] shadow-xl">
            <input type="text" :name="ipt5V2Name" v-model="ipt5V2Value" :placeholder="ipt5Placeholder"
                @focus="isFocused = !isFocused" @blur="isFocused = !isFocused"
                class="outline-none w-[300px] h-14 bg-transparent pl-10.5  text-white font-bold placeholder:text-gray-400">
            <ScaleProgressBar :prg-scale="ipt5V2PrgScale" :prg-width="'w-[300px]'" :prg-dura="'duration-500'"
                class="prgBar" :prg-ori="'origine-center'" :prg-bgi="ipt5PrgBar" />
        </div>
    </div>
</template>
