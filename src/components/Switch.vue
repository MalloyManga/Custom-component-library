<!-- Switch.vue -->
<script setup lang="ts">
interface Props {
    swtName: string
}

const { swtName = 'swt' } = defineProps<Props>()
const isChecked = defineModel<boolean>('isChecked', { default: false })

</script>

<template>
    <div>
        <input type="checkbox" :name="swtName" v-model="isChecked"
            class="appearance-none relative w-14 h-7 rounded-full bg-[#B7BDC5] transition duration-300 before:content-[''] before:absolute before:-top-0.5 before:-left-1 before:rounded-full before:w-8 before:h-8 before:bg-gray-50 before:border-[1px] before:border-gray-200 before:transition before:duration-300 hover:before:ring-8 hover:before:ring-gray-200/50 checked:bg-sky-300 checked:before:translate-x-8 checked:before:border-sky-300 hover:checked:before:ring-sky-200/50">
    </div>
</template>