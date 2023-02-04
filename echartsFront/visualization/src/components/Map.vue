<template>
  <div class="com-container" @dblclick="revertMap">
    <div class="com-chart" ref="map_ref"></div>
  </div>
</template>

<script>
import axios from "axios";
import { getProvinceMapInfo } from "@/utils/map_utils";
export default {
  data() {
    return {
      chartInstance: null,
      allData: null,
      mapData: {},
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
    async initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.map_ref, "chalk");
      const { data: ret } = await axios.get(
        "http://127.0.0.1:8080/static/map/china.json"
      );
      this.$echarts.registerMap("china", ret);
      const initOption = {
        title: { text: "| 商家分布", left: "20px", top: "20px" },
        geo: {
          type: "map",
          map: "china",
          top: "15%",
          bottom: "15%",
          itemStyle: { areaColor: "#aad0f3", borderColor: "#000" },
        },
        legend: { left: "5%", bottom: "5%", orient: "vertical" },
      };
      this.chartInstance.setOption(initOption);
      this.chartInstance.on("click", async (arg) => {
        const provinceInfo = getProvinceMapInfo(arg.name);

        if (!this.mapData[provinceInfo.key]) {
          const { data: ret } = await axios.get(
            "http://127.0.0.1:8080" + provinceInfo.path
          );
          this.mapData[provinceInfo.key] = ret;
          this.$echarts.registerMap(provinceInfo.key, ret);
        }
        const changeOption = {
          geo: { map: provinceInfo.key },
        };
        this.chartInstance.setOption(changeOption);
      });
    },
    async getData() {
      const { data: ret } = await this.$http.get("map");
      this.allData = ret;
      console.log(ret);
      this.updateChart();
    },
    updateChart() {
      const legendArr = this.allData.map((item) => {
        return item.name;
      });
      console.log(legendArr);
      const seriesArr = this.allData.map((item) => {
        return {
          type: "effectScatter",
          rippleEffect: {
            scale: 5,
            // 实现空心的动画效果
            brushType: "stroke",
          },
          name: item.name,
          data: item.children,
          // 否则散点不会显示在地图上
          coordinateSystem: "geo",
        };
      });
      const dataOption = {
        legend: { data: legendArr },
        series: seriesArr,
      };
      this.chartInstance.setOption(dataOption);
    },
    screenAdapter() {
      const titleFontSize = (this.$refs.map_ref.offsetWidth / 100) * 3.6;
      const adapterOption = {
        title: { textStyle: { fontSize: titleFontSize } },
        legend: {
          itemWidth: titleFontSize / 2,
          itemHeight: titleFontSize / 2,
          textStyle: { fontSize: titleFontSize / 2 },
          itemGap: titleFontSize / 3,
        },
      };
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
    },
    revertMap() {
      const revertOption = {
        geo: { map: "china" },
      };
      this.chartInstance.setOption(revertOption);
    },
  },
};
</script>
