<!-- 商家销量横向柱状图的组件 -->
<template>
  <div class="com-container">
    <div class="com-chart" ref="seller_ref"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance: null,
      allData: null,
      currentPage: 1,
      totalPage: 0,
      timerId: null,
    };
  },
  mounted() {
    this.initChart();
    this.getData();
    window.addEventListener("resize", this.screenAdapter);
    // 已进入就调用，不然会太大或者一些情况
    this.screenAdapter();
  },
  destroyed() {
    clearInterval(this.timerId);
    // 组件销毁的时候，监听器销毁带哦
    window.removeEventListener("resize", this.screenAdapter);
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.seller_ref, "chalk");

      const initOption = {
        title: {
          text: "| 商家销售统计",
          left: 10,
          top: 10,
        },
        grid: {
          top: "10%",
          left: "3%",
          right: "3%",
          bottom: "5.5%",
          // 该参数可以设置是否包含坐标轴
          containLabel: true,
        },
        xAxis: { type: "value" },
        yAxis: { type: "category" },
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "line", lineStyle: { color: "#2D3443" }, z: 0 },
        },
        series: [
          {
            type: "bar",
            label: {
              show: true,
              position: "right",
              textStyle: { color: "white" },
            },
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#5052EE" },
                { offset: 1, color: "#AB6EE5" },
              ]),
            },
          },
        ],
      };
      this.chartInstance.setOption(initOption);
      // 对图标鼠标事件进行监听
      this.chartInstance.on("mouseover", () => {
        clearInterval(this.timerId);
      });
      this.chartInstance.on("mouseout", () => {
        this.startInterval();
      });
    },
    async getData() {
      const { data: ret } = await this.$http.get("seller");
      this.allData = ret;
      this.allData.sort((a, b) => {
        return a.value - b.value;
      });
      this.totalPage =
        this.allData.length % 5 === 0
          ? this.allData.length / 5
          : this.allData.length / 5 + 1;
      this.updateChart();
      this.startInterval();
    },
    updateChart() {
      const start = 5 * (this.currentPage - 1);
      const end = 5 * this.currentPage;
      const showData = this.allData.slice(start, end);
      const sellerNames = showData.map((item) => {
        return item.name;
      });
      const sellerValue = showData.map((item) => {
        return item.value;
      });
      const dataOption = {
        yAxis: { data: sellerNames },
        series: [
          {
            data: sellerValue,
          },
        ],
      };
      this.chartInstance.setOption(dataOption);
    },
    startInterval() {
      // 保险方法，如果存在定时器，先取消
      if (this.timerId) {
        clearInterval(this.timerId);
      }
      this.timerId = setInterval(() => {
        this.currentPage++;
        if (this.currentPage > this.totalPage) {
          this.currentPage = 1;
        }
        this.updateChart();
      }, 3000);
    },
    screenAdapter() {
      const titleFontSize = (this.$refs.seller_ref.offsetWidth / 100) * 3.6;
      const adapterOption = {
        title: {
          textStyle: { fontSize: titleFontSize },
        },

        tooltip: {
          axisPointer: { lineStyle: { width: titleFontSize } },
        },
        series: [
          {
            barWidth: titleFontSize,
            itemStyle: {
              barBorderRadius: [0, titleFontSize / 2, titleFontSize / 2, 0],
            },
          },
        ],
      };
      this.chartInstance.setOption(adapterOption);
      // 需要手动调用
      this.chartInstance.resize();
    },
  },
};
</script>
<style></style>
