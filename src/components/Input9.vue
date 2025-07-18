<!-- Input9.vue -->
<script setup lang="ts">
import { computed, ref } from 'vue';
import Search4 from './icons/Search4.vue';
import ScaleProgressBar from './ScaleProgressBar.vue';

const isFocused = ref(false)
const ipt9Value = defineModel<string>('ipt9Value')

const barScale = computed(() => {
    return isFocused.value ? 'scale-x-100' : 'scale-x-0'
})

</script>

<template>
    <div>
        <div
            class="w-56 relative inline-flex space-x-3 pl-3 items-center bg-white rounded-[22px] transition-[border-radius] duration-300 ease-in-out focus-within:rounded-[0px]">
            <div class="w-4 h-4">
                <Search4 class="text-gray-400" />
            </div>
            <input type="text" @focus="isFocused = true" @blur="isFocused = false" placeholder="Type your text"
                v-model="ipt9Value" class="w-40 h-11 outline-none">
            <ScaleProgressBar prg-width="w-56" :prg-scale="barScale" prg-bgc="bg-[#2f2ee9]" />
        </div>
    </div>



</template>