<!-- ButtonView.vue -->
<script setup lang="ts">
import { type Component } from "vue";
import Button5 from "@/components/Button5.vue";
import Button6 from "@/components/Button6.vue";
import Button7 from "@/components/Button7.vue";
import Button8 from "@/components/Button8.vue";
import Button9 from "@/components/Button9.vue";
import Button10 from "@/components/Button10.vue";
import Button11 from "@/components/Button11.vue";
import Button12 from "@/components/Button12.vue";
import Button13 from "@/components/Button13.vue";
import Button14 from "@/components/Button14.vue";
import Button15 from "@/components/Button15.vue";
import Button16 from "@/components/Button16.vue";
import Card2 from "@/components/Card2.vue";
import Switch from "@/components/Switch.vue";
import Switch2 from "@/components/Switch2.vue";
import Button17 from "@/components/Button17.vue";
import Switch3 from "@/components/Switch3.vue";

interface BtnComps {
    comp: Component,
    btnProps?: Record<string, any>,
    cardProps?: Record<string, any>
}
const buttonComps: BtnComps[] = [
    { comp: Button5, btnProps: { btn5Content: 'Button' } },
    { comp: Button6, btnProps: { btn6Content: 'Button' }, cardProps: { isDark: true } },
    { comp: Button7, btnProps: { btn7Content: 'Button' } },
    { comp: Button8, btnProps: { btn8Content: 'Button' } },
    { comp: Button9, btnProps: { btn9Content: 'Button' } },
    { comp: Button10, btnProps: { btn10Content: 'Button' } },
    { comp: Button11, btnProps: { btn11Content: 'Button' }, cardProps: { isDark: true } },
    { comp: Button12, btnProps: { btn12Content: 'Sign up' } },
    { comp: Button13, btnProps: { btn13Content: 'Star me on Github' } },
    { comp: Button14, btnProps: { btn14Content: 'Share' } },
    { comp: Button15, btnProps: { btn15Content: '' } },
    { comp: Button16, btnProps: { btn16Content: 'Button' }, cardProps: { isDark: true } },
    { comp: Switch, btnProps: { swtName: 'Name' }, cardProps: { isDark: true } },
    { comp: Switch2, cardProps: { isDark: true } },
    { comp: Button17, btnProps: { btn17Content: 'Modern Button' }, cardProps: { isDark: true } },
    { comp: Switch3 }
]

</script>

<template>
    <div
        class="w-full min-h-screen px-2 mt-24 grid auto-rows-[minmax(200px,auto)] grid-cols-[repeat(auto-fill,minmax(clamp(320px,80vw,400px),1fr))] gap-2">
        <Card2 v-for="btnComp in buttonComps" v-bind="btnComp.cardProps">
            <component :is="btnComp.comp" v-bind="btnComp.btnProps" />
        </Card2>
    </div>


</template>