<!-- Enter.vue -->
<script>
export default {
    data() {
        return {

        }
    },
    props: {
        enterColor: {
            required: false,
            type: String,
            default: 'currentColor',
        },
    }
}
</script>

<template>
    <svg stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :class="enterColor">
        <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
</template>