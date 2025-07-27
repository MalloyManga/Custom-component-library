<!-- Nav2.vue -->
<script setup lang="ts">
import ButtonIcon from './icons/ButtonIcon.vue'
import CardIcon from './icons/CardIcon.vue'
import FormIcon from './icons/FormIcon.vue'
import InputIcon from './icons/InputIcon.vue'
import avatar from '../assets/MalloyManga.png'
import { computed, onMounted, onUnmounted, ref, Transition } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHovered = ref(false)
const unfoldHeight = ref('400px')
const visible = ref(true)
const prevScrollPos = ref(0)

const navTetx = computed(() => {
    return route.fullPath == '/' ? "Hi,I'm Malloy" : 'Custom Components Library'
})

const onEnter = (el: Element) => {
    unfoldHeight.value = el.scrollHeight + 'px'
}
onMounted(() => {
    isHovered.value = true
    setTimeout(() => {
        isHovered.value = false
    }, 1500)
    // ---
    prevScrollPos.value = window.scrollY
    window.addEventListener('scroll', handleScroll)
})

const handleScroll = () => {
    const currentScrollPos = window.scrollY
    visible.value = prevScrollPos.value > currentScrollPos || currentScrollPos < 10
    prevScrollPos.value = currentScrollPos
}

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
    <div :class="visible ? '' : '-translate-y-[120%]'"
        class="flex gap-2 fixed left-2 top-2 z-50 transition-transform duration-300">
        <nav @mouseenter="isHovered = true" @mouseleave="isHovered = false"
            class="w-15 h-fit py-2 overflow-hidden flex flex-col items-center justify-start bg-white border-2 border-gray-200 rounded-xl">
            <div class="relative z-1">
                <a href="/" target="_blank">
                    <RouterLink to="/">
                        <img class="object-contain size-12 rounded-2xl" :src="avatar" alt="MalloyManga">
                    </RouterLink>
                </a>
            </div>
            <Transition name="expand" @enter="onEnter">
                <div v-show="isHovered">
                    <div class="pt-8">
                        <ul class="inline-flex flex-col gap-6">
                            <li class="p-1 transition-all duration-300 hover:bg-[#695CFE] hover:text-white rounded-lg ">
                                <RouterLink to="/buttons">
                                    <ButtonIcon class="size-8" />
                                </RouterLink>
                            </li>
                            <li class="p-1 transition-all duration-300 hover:bg-[#695CFE] hover:text-white rounded-lg ">
                                <RouterLink to="/inputs">
                                    <InputIcon class="size-8" />
                                </RouterLink>
                            </li>
                            <li class="p-1 transition-all duration-300 hover:bg-[#695CFE] hover:text-white rounded-lg ">
                                <RouterLink to="/cards">
                                    <CardIcon class="size-8" />
                                </RouterLink>
                            </li>
                            <li class="p-1 transition-all duration-300 hover:bg-[#695CFE] hover:text-white rounded-lg ">
                                <RouterLink to="/forms">
                                    <FormIcon class="size-8" />
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Transition>
        </nav>
        <div class="flex items-center h-17 px-3 pb-0.5 text-lg font-mono bg-white border-2 border-gray-200 rounded-xl ">
            {{ navTetx }}
        </div>
    </div>


</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
    transition: all 500ms ease-in-out;
    overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
    max-height: 0;
    opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
    opacity: 1;
    max-height: v-bind(unfoldHeight);
}
</style>