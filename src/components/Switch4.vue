<!-- Switch4.vue -->
<script setup lang="ts">
import HeartOutline from './icons/HeartOutline.vue'
import HeartFill from './icons/HeartFill.vue'
import Celebrate from './icons/Celebrate.vue'

const isChecked = defineModel({ default: false })

</script>

<template>
    <div>
        <label>
            <input type="checkbox" v-model="isChecked" class="appearance-none"></input>
            <div class="relative size-10 cursor-pointer">
                <HeartOutline class="heart-outline absolute text-pink-400 h-9 w-10 transition-all duration-300" />
                <HeartFill class="heart-fill absolute text-pink-400 h-9 w-10 transition-all duration-300 scale-0" />
                <Celebrate
                    class="celebrate stroke-3 absolute -left-3/4 -top-2/3 text-pink-400 transition-all duration-500 scale-0" />
            </div>
        </label>
    </div>
</template>

<style scoped>
input:checked~div .heart-outline {
    filter: brightness(130%);
}

input:checked~div .heart-fill {
    animation: fill-celebrate 500ms forwards;
}

input:checked~div .celebrate {
    animation: celebrate 500ms forwards;
}

@keyframes fill-celebrate {
    25% {
        filter: brightness(130%);
    }
    50% {
        scale: 120%;
        filter: brightness(130%);
    }

    100% {
        scale: 100%;
    }
}

@keyframes celebrate {
    50% {
        opacity: 1;
        filter: brightness(130%);
    }

    100% {
        opacity: 0;
        scale: 100%;
    }
}
</style>