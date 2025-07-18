<!-- Input.vue -->
<script setup lang="ts">
defineOptions({
    name: 'Input'
})
interface Props {
    placeholder: string,
    iptName: string,
}
const { placeholder = 'Type to add', iptName = 'ipt1' } = defineProps<Props>()

const ipt1Value = defineModel<string>('ipt1Value')
</script>

<template>
    <div>
        <input type="text" :name="iptName" v-model="ipt1Value"
            class="w-[200px] h-[35px] pl-3 pb-0.5 hover:border-[#C6E2FF] hover:shadow-lg focus:border-[#409EFF] focus:ring-1 focus:ring-[#409EFF] focus:-translate-y-2 bg-[#F4F4F5] rounded-[6px] border-[1px] border-[#C8C9CC] outline-none placeholder:font-mono transition-all duration-300"
            :placeholder="placeholder">

    </div>
</template>