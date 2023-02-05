<template>
  <div class="com-container">
    <div class="com-chart" ref="hot_ref"></div>
    <span class="arrow-left" :style="comStyle" @click="toLeft">&lt;</span>
    <span class="arrow-right" :style="comStyle" @click="toRight">&gt;</span>
    <span class="cat-name" :style="comStyle">{{ catName }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance: null,
      allData: null,
      // 当前的分类索引
      currentIndex: 1,
      titleFontSize: 0,
    };
  },
  computed: {
    catName() {
      if (!this.allData) {
        return "";
      } else {
        return this.allData[this.currentIndex].name;
      }
    },
    comStyle() {
      return {
        fontSize: (2 * this.titleFontSize) / 3 + "px",
      };
    },
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
      this.chartInstance = this.$echarts.init(this.$refs.hot_ref, "chalk");
      const initOption = {
        title: {
          text: "| 热销商品的占比",
          left: "1%",
          top: "1%",
        },
        legend: {
          left: "right",
          top: "1%",
          right: "1%",
          icon: "circle",
          orient: "vertical",
        },
        tooltip: {
          show: true,
          formatter: (arg) => {
            const thirdCategory = arg.data.children;
            let total = 0;
            thirdCategory.forEach((item) => {
              total += item.value;
            });
            let retStr = "";
            thirdCategory.forEach((item) => {
              retStr += `
              ${item.name}：${parseInt((item.value / total) * 100) + "%"}
              </br>
              `;
            });
            return retStr;
          },
        },
        series: [
          {
            type: "pie",
            label: { show: false },
            emphasis: { label: { show: true }, labelLine: { show: false } },
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    async getData() {
      const { data: ret } = await this.$http.get("hotproduct");
      this.allData = ret;
      this.updateChart();
    },
    updateChart() {
      const legendData = this.allData[this.currentIndex].children.map(
        (item) => {
          return item.name;
        }
      );
      const seriesData = this.allData[this.currentIndex].children.map(
        (item) => {
          return {
            name: item.name,
            value: item.value,
            // 为了在tooltip下的formatter中现在在arg中
            children: item.children,
          };
        }
      );
      const dataOption = {
        legend: { data: legendData },
        series: [{ data: seriesData }],
      };
      this.chartInstance.setOption(dataOption);
    },
    screenAdapter() {
      this.titleFontSize = (this.$refs.hot_ref.offsetWidth / 100) * 3.6;
      const adapterOption = {
        title: { textStyle: { fontSize: this.titleFontSize } },
        legend: {
          itemWidth: this.titleFontSize / 2,
          itemHeight: this.titleFontSize / 2,
          itemGap: this.titleFontSize / 2,
          textStyle: { fontSize: this.titleFontSize / 2 },
        },
        series: [{ radius: this.titleFontSize * 4.5, center: ["50%", "50%"] }],
      };
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
    },
    toLeft() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.allData.length - 1;
      }
      this.updateChart();
    },
    toRight() {
      this.currentIndex++;
      if (this.currentIndex > this.allData.length - 1) {
        this.currentIndex = 0;
      }
      this.updateChart();
    },
  },
};
</script>

<style lang="less" scoped>
.arrow-left {
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #fff;
}
.arrow-right {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #fff;
}
.cat-name {
  position: absolute;
  right: 1%;
  bottom: 1%;
  color: #fff;
}
</style>
