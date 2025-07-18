<!-- Input20.vue -->
<script setup lang="ts">
const ipt20Value = defineModel<string>()

type IptType = 'text' | 'email' | 'password' | 'textarea'

interface Props {
    ipt20Pholder: string
    ipt20Type: IptType
}
const { ipt20Pholder = '', ipt20Type = 'text' } = defineProps<Props>()

</script>

<template>
    <div>
        <input :type="ipt20Type" :placeholder="ipt20Pholder" v-model="ipt20Value"
            class="outline-none bg-white w-[250px] h-10 font-bold px-[10px] rounded-sm border-2 border-[#323232] shadow-[3px_3px_#323232] transition-all duration-300 focus:border-[#2D8CF0] focus:shadow-none focus:translate-[3px]">
    </div>

</template>