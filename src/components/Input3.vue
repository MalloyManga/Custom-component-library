<!-- Input3.vue -->
<script setup lang="ts">
interface Props {
    ipt3Name: string,
    ipt3Bgi?: string,
    ipt3Placeholder: string
}

const { ipt3Name = 'ipt3', ipt3Bgi = 'linear-gradient(to right, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)', ipt3Placeholder = 'Name' } = defineProps<Props>()

const ipt3Value = defineModel<string>('ipt3Value')
</script>

<template>
    <div>
        <div class="relative w-fit h-fit">
            <input type="text" :name="ipt3Name" v-model="ipt3Value" id="ipt3"
                class="ipt3 outline-none border-b-4 border-gray-400">
            <label for="ipt3"
                class="ipt3-label absolute left-1 cursor-text text-gray-400 transition-transform duration-300">
                {{ ipt3Placeholder }}
            </label>
        </div>
    </div>

</template>

<style scoped>
.ipt3:focus {
    border-image: v-bind(ipt3Bgi) 1;
    /* border-image是一个简写属性 后写的话会覆盖掉所有的值 */
    /* border-slice值为1的含义：当你设置为1时，它表示从图像的每条边缘向内偏移1个像素来创建一个1像素宽的切片。对于渐变这样的生成图像，这实际上是告诉浏览器使用整个渐变图像。 */
}

.ipt3:focus+.ipt3-label {
    /* + 表示的是相邻的兄弟选择器 */
    color: transparent;
    background-clip: text;
    background-image: v-bind(ipt3Bgi);
    transform: translateY(-20px);
    font-weight: bold;
}
</style>