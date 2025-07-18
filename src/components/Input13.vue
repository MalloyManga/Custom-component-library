<!-- Input13.vue -->
<script setup lang="ts">
const ipt13Value = defineModel<string>('ipt13Value')
</script>

<template>
    <div>
        <input type="text" placeholder="Email Address" v-model="ipt13Value"
            class="bg-white w-44 h-12 p-4 outline-none rounded-lg border-[1.5px] shadow-[2px_2px] transition-all duration-300 focus:shadow-[5px_5px]">
    </div>

</template>