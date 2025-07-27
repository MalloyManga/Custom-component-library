<!-- Input8.vue -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import EnterLeft from './icons/EnterLeft.vue'
import Search3 from './icons/Search3.vue'

const isFocused = ref(false)
const ipt8Value = defineModel<string>('ipt8Value', { default: '' })
const icon = computed(() => {
    return (isFocused.value || (ipt8Value.value != '')) ? EnterLeft : Search3
})
const iconTrans = computed(() => {
    return (isFocused.value || (ipt8Value.value != '')) ? 's3LeaveAndElEnter' : 'elLeaveAndS3Enter'
})

</script>

<template>
    <div>
        <div class="inline-block relative">
            <input type="text" placeholder="search your chats" @focus="isFocused = true" @blur="isFocused = false"
                v-model="ipt8Value" class="ipt8 bg-white outline-none w-56 h-11 pl-8 rounded-sm">
            <div class="absolute left-2.5 top-3.5">
                <Transition :name="iconTrans" mode="out-in">
                    <component :is="icon" class="w-4 h-4" :enter-color="'text-green-500'" />
                </Transition>
            </div>
        </div>
    </div>

</template>

<style scoped>
/* 通用过渡设置 */
.elLeaveAndS3Enter-enter-active,
.elLeaveAndS3Enter-leave-active,
.s3LeaveAndElEnter-enter-active,
.s3LeaveAndElEnter-leave-active {
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    transform-origin: center;
}

.s3LeaveAndElEnter-leave-to {
    opacity: 0;
    transform: scale(1.1) rotate(90deg);
}

.s3LeaveAndElEnter-enter-from {
    opacity: 0;
    transform: scale(0.9) rotate(-90deg);
}
.elLeaveAndS3Enter-leave-to {
    opacity: 0;
    transform: scale(1.1) rotate(-90deg);
}

/* Search3 (默认向右) 进入 */
.elLeaveAndS3Enter-enter-from {
    opacity: 0;
    transform: scale(0.9) rotate(90deg);
}
</style>