const pieData = [
  {
    value: 11231,
    name: "淘宝",
  },
  {
    value: 22673,
    name: "京东",
  },
  {
    value: 6123,
    name: "唯品会",
  },
  {
    value: 8989,
    name: "1号店",
  },
  {
    value: 6700,
    name: "聚美优品",
  },
];

const myChart = echarts.init(document.querySelector("div"));
var option = {
  series: [
    {
      type: "pie",
      data: pieData,
      label: {
        show: true,
        formatter: function (arg) {
          return arg.name + ": " + arg.value + "元\n" + arg.percent + "%";
        },
      },
      //   radius: 50,
      //   radius: "70%", // 参照 min{height. width} / 2
      //   radius: ["50%", "70%"],
      roseType: "radius",
      //   selectedMode: "single", // 选中的效果能狗将选中的区域偏离圆点一小段距离
      selectedMode: "multiple",
      selectedOffset: 30,
    },
  ],
};
myChart.setOption(option);
