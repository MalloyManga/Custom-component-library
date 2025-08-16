<!-- Form2.vue -->
<script setup lang="ts">

</script>

<template>
    <form action="#" class="relative bg-white rounded-md px-8 shadow-[0_0_30px_3px_gray]">
        <div class="font-bold text-lg flex justify-center py-6 my-2">
            S U B S C R I B E
        </div>
        <input type="text" placeholder="Your e-mail"
            class="text-sm outline-none mb-8 border-b-2 border-gray-300 pb-1 px-2 transition-[border] duration-300 focus:border-black" />
        <button type="button"
            class="absolute z-2 -right-3 -bottom-4.5 pl-6 pr-8 py-3 rounded-l-full text-xs bg-[#0F0092] text-white font-bold cursor-pointer shadow-[0_0_12px_gray] transition-[background-color] duration-300 hover:bg-[#07013d]">S
            U B M I T</button>
        <div class="brn-back bg-[#0F0092] absolute z-1 -right-3 bottom-4 size-3"></div>
    </form>
</template>

<style scoped>
.brn-back {
    clip-path: polygon(0 0, 0% 100%, 100% 100%);
}
</style>