<!-- Input12.vue -->
<script setup lang="ts">
import { computed, nextTick, onMounted, ref, useTemplateRef } from 'vue';
import ScaleProgressBar from './ScaleProgressBar.vue';

const isFocused = ref(false)
const topBarW = ref('w-0')
const ipt12Value = defineModel<string>('ipt12Value', { default: '' })
const label = useTemplateRef<HTMLLabelElement>('label')
interface Props {
    ipt12Label: string;
}
const { ipt12Label = 'Enter your name' } = defineProps<Props>()

const barScale = computed(() => {
    return isFocused.value ? 'scale-x-100' : 'scale-x-0'
})
onMounted(() => {
    nextTick(() => {
        if (label.value) {
            const labelWidth = label.value.offsetWidth
            topBarW.value = `width: ${172 - labelWidth}px`;
        }
    });
})

</script>

<template>
    <div>
        <div class="relative inline-block">
            <label for="ipt12" ref="label"
                :class="isFocused ? 'translate-x-2.5 -translate-y-2.5 scale-100' : 'translate-x-6 translate-y-1 scale-0'"
                class="inline-block absolute transition-all duration-500">
                {{ ipt12Label }}
            </label>
            <ScaleProgressBar prg-pos="right-0 top-0" prg-dura="duration-500" :style="topBarW" :prg-scale="barScale"
                prg-ht="h-0.5" prg-bgc="bg-[#0B2447]" prg-ori="origin-right" />
            <input type="text" id="ipt12" @focus="isFocused = true" @blur="isFocused = false" v-model="ipt12Value"
                class="border-l-2 border-r-2 border-[#0B2447] outline-none w-48 h-10 p-2 bg-transparent transition-all duration-500 shadow-[7px_6px_#0B2447] focus:shadow-none">
            <ScaleProgressBar prg-dura="duration-500" prg-width="w-48" :prg-scale="barScale" prg-ht="h-0.5"
                prg-bgc="bg-[#0B2447]" prg-ori="origin-right" />
        </div>

    </div>

</template>