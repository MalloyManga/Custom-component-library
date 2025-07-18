<!-- Input4.vue -->
<script setup lang="ts">
defineOptions({
    name: 'Input4'
})

interface Props {
    ipt4Name: string;
    ipt4Placeholder?: string;
}

const { ipt4Name = 'ipt4', ipt4Placeholder = 'Enter your password!' } = defineProps<Props>()

const ipt4Value = defineModel<string>('ipt4Value')
</script>

<template>
    <div>
        <input type="text" :name="ipt4Name" v-model="ipt4Value" :placeholder="ipt4Placeholder"
            class="outline-none text-center w-52 h-14 text-sm font-bold text-[#e8e8e8] rounded-[10px] bg-[#212121] placeholder:text-[14px] border-4 border-[#e8e8e8] focus:border-white focus:shadow-[5px_5px_0px_0px_#888888]">
    </div>

</template>