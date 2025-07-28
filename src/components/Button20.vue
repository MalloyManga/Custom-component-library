<!-- Button20.vue -->
<script setup lang="ts">


</script>

<template>
    <button type="button" class="relative flex justify-center items-center px-8 py-4 cursor-pointer group">
        <div
            class="front absolute z-2 inline-block p-2.5 border-4 bg-[#FACC15] size-full group-hover:brightness-110 group-active:translate-y-1">
        </div>
        <div class="mc-font relative z-3 inline-block group-active:translate-y-1">
            Get Started
        </div>
        <div class="back absolute z-1 top-1 size-full p-2.5 border-4 bg-[#CA8A04] inline-block"></div>
    </button>

</template>

<style scoped>
.mc-font {
    font-family: 'MinecraftFont', sans-serif;
}

.front {
    border-image: url(/src/assets/PixelBorder.svg) 2;
    clip-path: polygon(4px 0px, 4px 2px, 2px 2px, 2px 4px, 0px 4px, 0px calc(100% - 4px), 2px calc(100% - 4px), 2px calc(100% - 2px), 4px calc(100% - 2px), 4px 100%, calc(100% - 4px) 100%, calc(100% - 4px) calc(100% - 2px), calc(100% - 2px) calc(100% - 2px), calc(100% - 2px) calc(100% - 4px), 100% calc(100% - 4px), 100% calc(100% - 4px), 100% 4px, calc(100% - 2px) 4px, calc(100% - 2px) 2px, calc(100% - 4px) 2px, calc(100% - 4px) 0px)
}

.back {
    border-image: url(/src/assets/PixelBorder.svg) 2;
    clip-path: polygon(4px 0px, 4px 2px, 2px 2px, 2px 4px, 0px 4px, 0px calc(100% - 4px), 2px calc(100% - 4px), 2px calc(100% - 2px), 4px calc(100% - 2px), 4px 100%, calc(100% - 4px) 100%, calc(100% - 4px) calc(100% - 2px), calc(100% - 2px) calc(100% - 2px), calc(100% - 2px) calc(100% - 4px), 100% calc(100% - 4px), 100% calc(100% - 4px), 100% 4px, calc(100% - 2px) 4px, calc(100% - 2px) 2px, calc(100% - 4px) 2px, calc(100% - 4px) 0px)
}
</style>