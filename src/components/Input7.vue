<!-- Input7.vue -->
<script setup lang="ts">
import Search2 from './icons/Search2.vue'

const ipt7Value = defineModel<string>('ipt7Value')
interface Props {
    ipt7Name: string
}

const { ipt7Name = 'ipt7' } = defineProps<Props>()
</script>

<template>
    <div>
        <div class="ipt7Box inline-block relative">
            <input type="text" placeholder="SEARCH..." :name="ipt7Name" v-model="ipt7Value"
                class="ipt7 relative z-2 bg-white p-[10px] text-[14px] w-56 h-10 outline-none tracking-widest border-[3px] focus:border-[1px] transition-all duration-200 focus:shadow-[-4px_-4px]">
            <div class="ipt7Icon absolute z-2 right-2 top-2.5 transition-all">
                <Search2 />
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes breath {
    from {
        transform: scale(1.0);
    }

    to {
        transform: scale(1.1);
    }
}

.ipt7Box:hover .ipt7Icon {
    animation: breath 0.5s ease-in-out infinite alternate;
}
</style>