<template>
  <div class="com-container">
    <div class="com-chart" ref="stock_ref"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance: null,
      allData: null,
      currentIndex: 0,
      timerId: null,
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
    clearInterval(this.timerId);
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.stock_ref, "chalk");
      const initOption = {
        title: {
          text: "| 库存和销量",
          top: "1%",
          left: "1%",
        },
      };
      this.chartInstance.setOption(initOption);
      this.chartInstance.on("mouseover", () => {
        clearInterval(this.timerId);
      });
      this.chartInstance.on("mouseout", () => {
        this.startInterval();
      });
    },
    async getData() {
      const { data: ret } = await this.$http.get("stock");
      this.allData = ret;
      this.updateChart();
      this.startInterval();
    },
    updateChart() {
      const centerArr = [
        ["18%", "40%"],
        ["50%", "40%"],
        ["82%", "40%"],
        ["34%", "75%"],
        ["66%", "75%"],
      ];
      const colorArr = [
        ["#4FF778", "#0BA82C"],
        ["#E5DD45", "#E8B11C"],
        ["#E8821C", "#E55445"],
        ["#5052EE", "#AB6EE5"],
        ["#23E5E5", "#2E72BF"],
      ];
      const start = 5 * this.currentIndex;
      const end = start + 5;
      const showData = this.allData.slice(start, end);
      const seriesArr = showData.map((item, index) => {
        return {
          type: "pie",
          labelLine: { show: false }, // 隐藏指示线
          label: { position: "center", color: colorArr[index][0] },
          center: centerArr[index],
          hoverAnimation: false,
          data: [
            {
              value: item.sales,
              name: item.name + "\n" + item.sales,
              itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  { offset: 0, color: colorArr[index][0] },
                  { offset: 1, color: colorArr[index][1] },
                ]),
              },
            },
            { value: item.stock, itemStyle: { color: "#333843" } },
          ],
        };
      });
      const dataOption = {
        series: seriesArr,
      };
      this.chartInstance.setOption(dataOption);
    },
    screenAdapter() {
      const titleFontSize = (this.$refs.stock_ref.offsetWidth / 100) * 3.6;
      const innerRadius = titleFontSize * 2;
      const outerRadius = innerRadius * 1.125;
      const adapterOption = {
        title: { textStyle: { fontSize: titleFontSize } },
        series: [
          {
            type: "pie",
            radius: [outerRadius, innerRadius],
            label: { fontSize: titleFontSize / 2 },
          },
          {
            type: "pie",
            radius: [outerRadius, innerRadius],
            label: { fontSize: titleFontSize / 2 },
          },
          {
            type: "pie",
            radius: [outerRadius, innerRadius],
            label: { fontSize: titleFontSize / 2 },
          },
          {
            type: "pie",
            radius: [outerRadius, innerRadius],
            label: { fontSize: titleFontSize / 2 },
          },
          {
            type: "pie",
            radius: [outerRadius, innerRadius],
            label: { fontSize: titleFontSize / 2 },
          },
        ],
      };
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
    },
    startInterval() {
      if (this.timerId) {
        clearInterval(this.timerId);
      }
      this.timerId = setInterval(() => {
        this.currentIndex++;
        if (this.currentIndex > 1) {
          this.currentIndex = 0;
        }
        this.updateChart();
      }, 5000);
    },
  },
};
</script>
