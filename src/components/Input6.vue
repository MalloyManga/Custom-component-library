<!-- Input6.vue -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import ScaleProgressBar from './ScaleProgressBar.vue'

defineOptions({
    name: 'Input6'
})
interface Props {
    ipt6Name: string
    ipt6Label: string
}
const { ipt6Name = 'ipt6', ipt6Label = 'Name' } = defineProps<Props>()
const ipt6Value = defineModel<string>('ipt6Value')
const isFocused = ref(false)

const handleFocused = () => {
    isFocused.value = true
}
const handleBlur = () => {
    isFocused.value = false
}

const ipt6PrgBarSCale = computed(() => {
    return isFocused.value ? 'scale-x-100' : 'scale-x-0'
})
const chars = computed(() => {
    return [...ipt6Label]
})
const isActive = computed(() => {
    return isFocused.value || (ipt6Value.value && ipt6Value.value.trim() != '')
})
</script>

<template>
    <div>
        <div class="ipt6Box relative inline-block">
            <label for="ipt6" class="absolute left-2 text-gray-400 cursor-text">
                <span v-for="(char, index) in chars" :key="index"
                    :class="isActive ? 'text-[#5264AE] -translate-y-[21px] scale-90' : ''"
                    class="inline-block transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]"
                    :style="`transition-delay: ${(index + 1) * 50}ms`">
                    {{ char }}
                </span>
            </label>
            <input type="text" id="ipt6" :name="ipt6Name" @focus="handleFocused" @blur="handleBlur" v-model="ipt6Value"
                class="outline-none bg-transparent w-44 pl-2 border-b-[1px] border-gray-400">
            <ScaleProgressBar prg-bgi="background-color: #5264AE;" :prg-scale="ipt6PrgBarSCale" prg-width="w-44" />
        </div>
    </div>


</template>
