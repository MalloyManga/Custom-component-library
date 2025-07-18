<!-- Input2.vue -->
<script setup lang="ts">
defineOptions({
    name: 'Input2'
})

const ipt2Value = defineModel<string>('ipt2Value')

interface Props {
    ipt2Name: string,
    ipt2Placeholder: string,
    ipt2Bgc?: string
}
const { ipt2Name = 'ipt2', ipt2Bgc = 'bg-[#e8e8e8]', ipt2Placeholder = 'Name' } = defineProps<Props>()
</script>

<template>
    <div>
        <div class="relative inline-block">
            <input type="text" :id="ipt2Name" :name="ipt2Name" v-model="ipt2Value" :class="ipt2Bgc"
                class="ipt2 relative w-44 h-11 px-2 pb-0.5 rounded-2xl border-2 border-[#C8C8C8] outline-none focus:border-[#9696C8]">
            <label :for="ipt2Name" :class="ipt2Bgc"
                class="ipt2-label absolute top-2 left-3 font-mono text-lg pl-1 pr-1 text-gray-500 transition duration-300 cursor-text">
                {{ ipt2Placeholder }}
            </label>
        </div>
    </div>


</template>

<style scoped>
.ipt2:focus~.ipt2-label {
    transform: translateY(-21px) translateX(7px) scale(0.9);
}
</style>