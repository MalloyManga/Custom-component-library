<!-- Switch3.vue -->
<script setup lang="ts">
import Background from '../assets/Switch3Background.png'
import Background2 from '../assets/Switch3Background2.png'
import Slider from '../assets/Switch3SliderBar.png'

const isChecked = defineModel({ default: false })

</script>

<template>
    <div>
        <label class="cursor-pointer relative inline-block w-15 h-6.5 group">
            <span :class="isChecked ? 'translate-x-8.5' : ''"
                class="absolute -top-1 inline-block size-6.5 transition-transform duration-0"><img :src="Slider"></span>
            <span v-show="!isChecked"><img :src="Background"></span>
            <span v-show="isChecked"><img :src="Background2"></span>
            <input type="checkbox" v-model="isChecked" class="appearance-none">
        </label>
    </div>
</template>