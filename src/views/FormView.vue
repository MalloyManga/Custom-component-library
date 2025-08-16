<!-- Form.vue -->
<script setup lang="ts">
import Card2 from '@/components/Card2.vue'
import Form from '@/components/Form.vue'
import Form2 from '@/components/Form2.vue'
import type { Component } from 'vue'

interface FormComps {
    comp: Component
    formProps?: Record<string, any>
    cardProps?: Record<string, any>
}

const formComps: FormComps[] = [
    { comp: Form },
    { comp: Form2 },

]

</script>

<template>
    <div
        class="w-full min-h-screen px-2 mt-24 grid auto-rows-[minmax(200px,auto)] grid-cols-[repeat(auto-fill,minmax(clamp(320px,80vw,400px),1fr))] gap-2">
        <Card2 v-for="formComp in formComps" v-bind="formComp.cardProps">
            <component :is="formComp.comp" v-bind="formComp.formProps" />
        </Card2>
    </div>

</template>
