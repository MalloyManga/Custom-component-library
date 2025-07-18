<!-- ScaleProgressBar.vue -->
<!-- 注意父组件需要一个 flag 来进行信号的传递 以及 具体样式的调整 -->
<!-- 操作方式为子绝父相 注意父元素定位 -->
<!-- 

为了复用 抽象出这么多 prop 真的值得吗？

这个组件的实现方式为子绝父相 但是为了用这个组件而去给外层盒子加上 relative 会不会造成其他后果？ 

-->
<script>
export default {
    name: 'ScaleProgressBar',
    data() {
        return {

        }
    },
    props: {
        // 接收必要的宽度 无默认值
        prgWidth: {
            required: false,
            type: String,
        },

        // 从父组件接收的信号
        prgScale: {
            type: String,
            required: true,
        },

        // ------
        // 接收颜色相关 默认天蓝色 绑定到 style attr(非 TailwindCSS)
        prgBgi: {
            required: false,
            type: String,
        },
        // 接收纯色相关 默认 sky400 绑定到 tw
        prgBgc: {
            type: String,
            required: false,
            default: 'bg-sky-400'
        },

        // 接收持续时间 默认300
        prgDura: {
            required: false,
            type: String,
            default: 'duration-300',
        },

        // 接收定位相关 默认是 left-0 bottom-0 即在最下方
        prgPos: {
            required: false,
            type: String,
            default: 'left-0 bottom-0'
        },

        // 接收高度相关 默认值是 h-1 4px
        prgHt: {
            required: false,
            default: 'h-1',
            type: String
        },

        // 进度条的起始位置 默认从中间
        prgOri: {
            type: String,
            required: false,
        }
    }
}
</script>

<template>
    <span class="absolute transition-all" :class="[prgDura, prgWidth, prgScale, prgOri, prgBgc, prgHt, prgPos]"
        :style="prgBgi"></span>

</template>