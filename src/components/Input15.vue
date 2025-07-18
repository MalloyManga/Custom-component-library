<!-- Input15.vue -->
<script setup lang="ts">
import User from './icons/User.vue'

const ipt15Value = defineModel<string>('ipt15Value') 
interface Props {
    ipt15Label: string
    ipt15Pholder: string
}
const { ipt15Label = 'USERNAME', ipt15Pholder = 'ENTER USERNAME' } = defineProps<Props>()
</script>

<template>
    <div>
        <div
            class="relative perspective-[1000px] flex justify-center items-center gap-[15px] transform-3d rotate-x-10 -rotate-y-10 border-4 w-[350px] h-[100px] bg-[#F0F0F0] shadow-[10px_10px] transition-all duration-300 hover:shadow-[25px_25px_0_-5px_#E9B50B,25px_25px_black]">
            <div
                class="absolute translate-z-12 bg-[#E9B50B] px-[10px] py-[5px] text-[14px] border-2 left-5 -top-4 font-bold">
                {{ ipt15Label }}
            </div>
            <div
                class="flex bg-[#E9B50B] cursor-pointer justify-center translate-z-5 items-center size-12 border-[3px] transition-all duration-300 hover:shadow-[5px_5px] hover:translate-[-5px] hover:translate-z-2">
                <User class="size-6" />
            </div>
            <input type="text" v-model="ipt15Value" :placeholder="ipt15Pholder"
                class="outline-none translate-z-[10px] text-[18px] bg-white w-60 h-14 p-3 font-bold border-[3px] mr-2 transition-all duration-300 placeholder:tracking-tighter hover:bg-[#F0F0F0] hover:translate-z-2 hover:translate-[-5px] hover:shadow-[5px_5px] focus:bg-[#F0F0F0] focus:translate-z-2 focus:translate-[-5px] focus:shadow-[5px_5px]">
        </div>
    </div>

</template>
