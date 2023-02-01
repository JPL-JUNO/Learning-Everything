<template>
  <div class="com-container">
    <div class="title" :style="comStyle">
      <span>{{ "| " + showTitle }}</span>
      <span
        class="iconfont title-icon"
        @click="showChoice = !showChoice"
        :style="comStyle"
        >&#xe6eb;</span
      >
      <div class="select-con" v-show="showChoice">
        <div
          class="select-item"
          :style="marginStyle"
          v-for="item in selectType"
          :key="item.key"
          @click="handleSelected(item.key)"
        >
          {{ item.text }}
        </div>
      </div>
    </div>
    <div class="com-chart" ref="trend_ref"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance: null,
      allData: null,
      showChoice: false, // 是否显示可选项的按钮
      choiceType: "map",
      titleFontSize: 0, // 指明标题大小
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
  computed: {
    selectType() {
      if (!this.allData) {
        return [];
      }
      return this.allData.type.filter((item) => {
        return item.key !== this.choiceType;
      });
    },
    showTitle() {
      if (!this.allData) {
        return "";
      }
      return this.allData[this.choiceType].title;
    },
    comStyle() {
      return {
        fontSize: this.titleFontSize + "px",
      };
    },
    marginStyle() {
      return {
        marginLeft: this.titleFontSize / 2 + "px",
      };
    },
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.trend_ref, "chalk");
      const initOption = {
        tooltip: { trigger: "axis" },
        xAxis: { type: "category", boundaryGap: false },
        yAxis: { type: "value" },
        grid: {
          left: "3%",
          right: "3%",
          bottom: "6%",
          top: "9%",
          containLabel: true,
        },
        legend: { top: "9%", right: 20, icon: "circle" },
      };
      this.chartInstance.setOption(initOption);
    },
    async getData() {
      const { data: ret } = await this.$http.get("trend");
      console.log(ret);
      this.allData = ret;
      console.log(this.allData.type);
      this.updateChart();
    },
    updateChart() {
      const colorArr1 = [
        "rgba(11, 168, 44, 0.5)",
        "rgba(44, 110, 255, 0.5)",
        "rgba(22, 242, 217, 0.5)",
        "rgba(254, 33, 30, 0.5)",
        "rgba(250, 105, 0, 0.5)",
      ];
      // 全透明的颜色值
      const colorArr2 = [
        "rgba(11, 168, 44, 0)",
        "rgba(44, 110, 255, 0)",
        "rgba(22, 242, 217, 0)",
        "rgba(254, 33, 30, 0)",
        "rgba(250, 105, 0, 0)",
      ];
      const xAxisArr = this.allData.common.month;
      const valueArr = this.allData[this.choiceType].data;
      const seriesArr = valueArr.map((item, index) => {
        // 设置stack为相同值，则会以堆叠图存在
        return {
          type: "line",
          data: item.data,
          stack: this.choiceType,
          name: item.name,
          areaStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: colorArr1[index] },
              { offset: 1, color: colorArr2[index] },
            ]),
          },
        };
      });
      const legendArr = valueArr.map((item) => {
        return item.name;
      });
      const dataOption = {
        xAxis: { data: xAxisArr },
        legend: { data: legendArr },
        series: seriesArr,
      };
      this.chartInstance.setOption(dataOption);
    },
    screenAdapter() {
      this.titleFontSize = (this.$refs.trend_ref.offsetWidth / 100) * 2.4;
      const adapterOption = {
        legend: {
          itemWidth: this.titleFontSize,
          itemHeight: this.titleFontSize,
          itemGap: this.titleFontSize / 2,
          textStyle: { fontSize: this.titleFontSize / 3 },
        },
      };
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
    },
    handleSelected(currentType) {
      this.choiceType = currentType;
      this.updateChart();
      this.showChoice = false;
    },
  },
};
</script>
<style lang="less" scoped>
.title {
  position: absolute;
  left: 20px;
  top: 10px;
  z-index: 10;
  color: white;
  .select-con {
    background-color: #222733;
  }
}

.title-icon {
  margin-left: 10px;
  cursor: pointer;
}
.select-item {
  cursor: pointer;
}
</style>
