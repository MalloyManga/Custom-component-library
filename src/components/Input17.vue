<!-- Input17.vue -->
<script setup lang="ts">
import { ref } from 'vue';
import Search from './icons/Search.vue';

const isFocused = ref(false)
const ipt17Value = defineModel<string>()

</script>

<template>
    <div class="h-20 bg-[#212121] flex items-center justify-center">
        <div class="relative">
            <button type="button" @focus="isFocused = true" @blur="isFocused = false"
                class="absolute left-0 top-0 size-10 flex justify-center cursor-pointer items-center">
                <Search class="size-6 text-white" />
            </button>
            <input type="text" placeholder="Type to search..." v-model="ipt17Value" @focus="isFocused = true"
                @blur="isFocused = false"
                :class="isFocused ? 'w-[200px] shadow-[0px_0px_0px_#0e0e0e,0px_0px_0px_rgb(95,94,94,0.25),inset_1.5px_1.5px_3px_#0e0e0e,inset_-1.5px_-1.5px_3px_#5f5e5e]' : 'w-10 rounded-[50%] transition-all duration-300 shadow-[1.5px_1.5px_3px_#0e0e0e,-1.5px_-1.5px_3px_rgb(95,94,94,0.25),inset_0px_0px_0px_#0e0e0e,inset_0px_-0px_0px_#5f5e5e]'"
                class="outline-none bg-[#191A1E] h-10 pl-10 rounded-full text-white transition-all duration-300">
        </div>
    </div>
</template>