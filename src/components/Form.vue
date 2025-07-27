<!-- Form.vue -->
<script setup>
import { ref } from 'vue'
import Input20 from './Input20.vue'
import Switch2 from './Switch2.vue'
import Button5 from './Button5.vue'

const options = ref({ false: 'Log in', true: 'Sign up' })
const formTp = ref(false)

const formTpChange = (isSwt2Checked) => {
    formTp.value = isSwt2Checked
}
</script>

<template>
    <div>
        <div class="flex flex-col items-center">
            <Switch2 :labels="options" @swt2-check="formTpChange" class="mb-4" />
            <Transition name="turn" mode="out-in">
                <div v-if="!formTp">
                    <form action="#"
                        class="flex flex-col justify-between gap-5 p-5 rounded-sm bg-[#D3D3D3] border-2 border-[#323232]">
                        <div class="font-bold text-[25px] text-center text-[#323232] my-5 ">
                            {{ options.false }}
                        </div>
                        <div class="flex flex-col gap-5 items-center">
                            <Input20 ipt20-type="email" ipt20-pholder="Email" />
                            <Input20 ipt20-type="password" ipt20-pholder="Password" />
                            <Button5 btn5-content="Let's go!" class="my-5" />
                        </div>
                    </form>
                </div>
                <div v-else>
                    <form action="#"
                        class="flex flex-col justify-between gap-5 p-5 rounded-sm bg-[#D3D3D3] border-2 border-[#323232]">
                        <div class="font-bold text-[25px] text-center text-[#323232] my-5 ">
                            {{ options.true }}
                        </div>
                        <div class="flex flex-col gap-5 items-center">
                            <Input20 ipt20-type="text" ipt20-pholder="Name" />
                            <Input20 ipt20-type="email" ipt20-pholder="Email" />
                            <Input20 ipt20-type="password" ipt20-pholder="Password" />
                            <Button5 btn5-content="Confirm!" class="my-5" />
                        </div>
                    </form>
                </div>
            </Transition>
        </div>
    </div>

</template>

<style scoped>
.turn-enter-active,
.turn-leave-active {
    transition: all 200ms;
}

.turn-enter-from,
.turn-leave-to {
    scale: 0 1;
}

.turn-enter-to,
.turn-leave-from {
    scale: 1 1;
}
</style>