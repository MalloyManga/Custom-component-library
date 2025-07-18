<!-- Input19.vue -->
<script setup lang="ts">

</script>

<template>
    <div>
        <label
            class="inline-flex justify-center items-center bg-white w-80 h-44 rounded-lg border-2 border-[#3B82F6] cursor-pointer">
            <div class="flex flex-col items-center">
                <img src="https://img.icons8.com/dusk/64/000000/file.png" alt="upload">
                <span class="block text-gray-500 font-bold">Drag & drop your files here</span>
                <span class="block text-gray-500 ">or click to upload</span>
            </div>
            <input type="file" class="hidden">
        </label>
    </div>
</template>