<template>
  <div class="com-container">
    <div class="com-chart" ref="trend_ref"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance: null,
      allData: null,
    };
  },
  mounted() {
    this.initChart();
    this.getData();
    window.addEventListener("resize", this.screenAdapter);
    // 第一次进入，主动调用适配屏幕大小
    this.screenAdapter();
  },
  destroyed() {
    window.removeEventListener("resize", this.screenAdapter);
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.trend_ref);
      const initOption = {
        series: [{ type: "pie" }],
      };
      this.chartInstance.setOption(initOption);
    },
    async getData() {
      const { data: ret } = await this.$http.get("hotproduct");
      this.allData = ret;
      console.log(this.allData);
      this.updateChart();
    },
    updateChart() {
      const legendData = this.allData[0].children.map((item) => {
        return item.name;
      });
      const seriesData = this.allData[0].children.map((item) => {
        return { name: item.name, value: item.value };
      });
      console.log(seriesData);
      const dataOption = {
        legend: { data: legendData },
        series: [{ data: seriesData }],
      };
      this.chartInstance.setOption(dataOption);
    },
    screenAdapter() {
      const adapterOption = {};
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
    },
  },
};
</script>
