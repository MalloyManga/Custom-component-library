<!-- LoginView.vue -->
<script setup lang="ts">
import { ref, type Component } from "vue"
import Input from '@/components/Input.vue'
import Input2 from '@/components/Input2.vue'
import Input3 from '@/components/Input3.vue'
import Input4 from '@/components/Input4.vue'
import Input5 from '@/components/Input5.vue'
import Input6 from '@/components/Input6.vue'
import Input7 from '@/components/Input7.vue'
import Input8 from '@/components/Input8.vue'
import Input9 from '@/components/Input9.vue'
import Input10 from '@/components/Input10.vue'
import Input11 from '@/components/Input11.vue'
import Input12 from '@/components/Input12.vue'
import Input13 from '@/components/Input13.vue'
import Input14 from '@/components/Input14.vue'
import Input15 from '@/components/Input15.vue'
import Input16 from '@/components/Input16.vue'
import Input17 from '@/components/Input17.vue'
import Input18 from '@/components/Input18.vue'
import Input19 from '@/components/Input19.vue'
import Input20 from '@/components/Input20.vue'
import Card2 from "@/components/Card2.vue"

interface IptComps {
    comp: Component,
    iptProps?: Record<string, any>
    cardProps?: Record<string, any>
}


const inputComps: IptComps[] = [
    { comp: Input, iptProps: { iptName: 'Name', placeholder: 'Type to add..' } },
    { comp: Input2, iptProps: { ipt2Name: 'Name2', ipt2Placeholder: 'UserName' } },
    { comp: Input3, iptProps: { ipt3Name: 'Name3', ipt3Placeholder: 'Type' } },
    { comp: Input4, iptProps: { ipt4Name: 'Name4' } },
    { comp: Input5, iptProps: { ipt5Name: 'Name5' } },
    { comp: Input6, iptProps: { ipt6Name: 'Name6', ipt6Label: 'Password' } },
    { comp: Input7, iptProps: { ipt7Name: 'Name7' } },
    { comp: Input8, iptProps: { ipt8Name: 'Name8' } },
    { comp: Input9, iptProps: { ipt9Name: 'Name9' } },
    { comp: Input10, iptProps: { ipt10Name: 'Name10', ipt10Label: 'Username' } },
    { comp: Input11, iptProps: { ipt11Name: 'Name11', ipt11Label: 'Username' } },
    { comp: Input12, iptProps: { ipt12Name: 'Name12', ipt12Label: 'Your name' } },
    { comp: Input13, iptProps: { ipt13Name: 'Name13' } },
    { comp: Input14, iptProps: { ipt14Name: 'Name14' }, cardProps: { isDark: true } },
    { comp: Input15, iptProps: { ipt15Name: 'Name15', ipt15Label: 'UserName', ipt15Pholder: 'Enter Username' } },
    { comp: Input16, iptProps: { ipt16Name: 'Name16' }, cardProps: { isDark: true } },
    { comp: Input17, iptProps: { ipt17Name: 'Name17' }, cardProps: { isDark: true } },
    { comp: Input18, iptProps: { ipt18Name: 'Name18' } },
    { comp: Input19, iptProps: { ipt19Name: 'Name19' } },
    { comp: Input20, iptProps: { ipt20Name: 'Name20', ipt20Pholder: 'Password..', ipt20Type: 'password' } },

]

</script>

<template>
    <div
        class="w-full min-h-screen px-2 mt-24 grid auto-rows-[minmax(200px,auto)] grid-cols-[repeat(auto-fill,minmax(clamp(320px,80vw,400px),1fr))] gap-2">
        <Card2 v-for="iptComp in inputComps" v-bind="iptComp.cardProps">
            <component :is="iptComp.comp" v-bind="iptComp.iptProps" />
        </Card2>
    </div>


</template>