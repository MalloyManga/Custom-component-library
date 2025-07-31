<!-- Home.vue -->
<script setup lang="ts">
import Button12 from '@/components/Button12.vue'
import { useRouter } from 'vue-router'


const router = useRouter()
const toButtons = () => {
  router.push({ name: 'Buttons' })
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-12 xl:w-6xl lg:w-4xl md:w-3xl sm:w-2xl w-md min-h-screen mx-auto text-wrap">
    <div class="font-mono text-4xl">
      It's a <span class="bg-[#89AFFD]">custom component library</span> that aims to help me practice my front-end
      skills.(<span class="underline">Still in building😉</span>)
    </div>
    <Button12 btn12-content="Go" @btn12-click="toButtons" />
  </div>

</template>
