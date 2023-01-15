const myChart = echarts.init(document.querySelector("div"));
$.get("json/map/jiangsu.json", function (ret) {
  echarts.registerMap("jiangsuMap", ret);
  var option = {
    geo: {
      type: "map",
      map: "jiangsuMap",
      roam: true,
      label: {
        show: true,
      },
      //   zoom: 2, // 设置初始化的缩放比例
      //   center: [105, 32],
    },
  };
  myChart.setOption(option);
});
