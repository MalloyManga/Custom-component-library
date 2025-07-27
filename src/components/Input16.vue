<!-- Input16.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import Search5 from './icons/Search5.vue'

const isActive = ref(false)
const ipt16Value = defineModel<string>('ipt16Value')
</script>

<template>
    <div class="bg-[#212121] h-20 flex justify-center">
        <div class="relative inline-flex justify-center items-center">
            <button type="button" @focus="isActive = true" @blur="isActive = false"
                class="absolute right-0 flex justify-center items-center cursor-pointer bg-transparent size-[50px] outline-none border-none">
                <Search5 />
            </button>
            <input type="text" placeholder="Search.." @focus="isActive = true" @blur="isActive = false"
                v-model="ipt16Value"
                :class="isActive ? 'w-[250px] border-b-[3px] pr-[55px] border-[#7E4FD4] bg-transparent shadow-none rounded-[0px] ease-[cubic-bezier(0,0.110,0.35,2)]' : 'w-[50px] h-[50px]  bg-[#7E4FD4] border-none rounded-[50%] shadow-[0px_0px_3px_#f3f3f3] ease-in-out'"
                class="haha text-white p-[10px] pr-[40px] outline-none transition-all duration-500">
        </div>
    </div>
</template>
