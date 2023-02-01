<template>
    <div class="com-container">
        <div class="com-chart" ref="trend_ref"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartInstance: null
        }
    },
    mounted() {
        this.initChart()
        this.getData()
        window.addEventListener("resize", this.screenAdapter)
        // 第一次进入，主动调用适配屏幕大小
        this.screenAdapter()
    },
    destroyed() {
        window.removeEventListener("resize", this.screenAdapter)
    },
    methods: {
        initChart() {
            this.$echarts.init(this.$refs.trend_ref)
            const initOption = {}
            this.chartInstance.setOption(initOption)
        },
        async getData() {
            this.updateChart()
        },
        updateChart() {
            const dataOption = {}
            this.chartInstance.setOption(dataOption)
        },
        screenAdapter() {
            const adapterOption = {}
            this.chartInstance.setOption(adapterOption)
            this.chartInstance.resize()
        }
    }
}
</script>