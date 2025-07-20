<!-- Switch2.vue -->
<script setup>
import { ref, watch } from 'vue';

const isChecked = ref(false)

const props = defineProps({
    labels: {
        type: Object,
        required: false,
    }
})

const emit = defineEmits(['swt2Check'])

watch(isChecked, () => {
    emit('swt2Check', isChecked.value)
})
</script>

<template>
    <div>
        <span v-if="labels" @click="isChecked = false" :class="isChecked ? '' : 'underline'"
            class="mr-5 font-semibold cursor-default">
            {{ labels.false }}</span>
        <label class="inline-flex relative">
            <div :class="isChecked ? 'bg-[#2D8CF0]' : 'bg-transparent'"
                class="w-[50px] h-5 border-2 border-[#323232] rounded-sm shadow-[3px_3px] transition-all duration-300">
            </div>
            <div :class="isChecked ? 'translate-x-[30px]' : ''"
                class="bg-white size-5 absolute -top-1 rounded-sm border-2 border-[#323232] shadow-[0px_3px] transition-all duration-300">
            </div>
            <input type="checkbox" v-model="isChecked" class="appearance-none">
        </label>
        <span v-if="labels" @click="isChecked = true" :class="isChecked ? 'underline' : ''"
            class="ml-5 font-semibold cursor-default">{{ labels.true }}</span>

    </div>


</template>