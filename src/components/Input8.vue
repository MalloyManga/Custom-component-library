<!-- Input8.vue -->
<script setup lang="ts">
import { computed, ref } from 'vue';
import EnterLeft from './icons/EnterLeft.vue';
import Search3 from './icons/Search3.vue';

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

/* --- 过渡1: 当从 Search3 切换到 Enter (顺时针) --- */
/* (iconTrans === 's3LeaveAndElEnter') */

.s3LeaveAndElEnter-leave-to {
    /* Search3 (默认向右) 离开 */
    opacity: 0;
    transform: scale(1.1) rotate(90deg);
    /* 顺时针转90度 -> 视觉向下 */
}

.s3LeaveAndElEnter-enter-from {
    /* Enter (默认向左) 进入 */
    opacity: 0;
    /* 自身逆时针转90度 -> 视觉向下。然后顺时针转回0度(向左) */
    transform: scale(0.9) rotate(-90deg);
}

/* --- 过渡2: 当从 Enter 切换到 Search3 (逆时针倒放) --- */
/* (iconTrans === 'elLeaveAndS3Enter') */

/* Enter (默认向左) 离开 */
.elLeaveAndS3Enter-leave-to {
    opacity: 0;
    /* Enter 要从其默认的“向左”状态，逆时针旋转90度，回到视觉上的“向下”状态。
       一个向左的箭头，逆时针旋转90度，就会变成向下。
       所以，它需要变换到 rotate(-90deg) 的状态。
    */
    transform: scale(1.1) rotate(-90deg);
}

/* Search3 (默认向右) 进入 */
.elLeaveAndS3Enter-enter-from {
    opacity: 0;
    /* Search3 要从视觉上的“向下”状态，逆时针旋转90度，回到其默认的“向右”状态。
       一个向右的箭头，顺时针旋转90度会变成向下。
       所以，它需要从一个 rotate(90deg) 的状态开始。
       然后它会从 90deg 逆时针动画到 0deg (它的默认向右)。
    */
    transform: scale(0.9) rotate(90deg);
}
</style>