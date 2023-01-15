const myChart = echarts.init(document.querySelector("div"));
var indicator = [
  {
    name: "易用性",
    max: 100,
  },
  {
    name: "功能",
    max: 100,
  },
  {
    name: "拍照",
    max: 100,
  },
  {
    name: "跑分",
    max: 100,
  },
  {
    name: "续航",
    max: 100,
  },
];
var hwScore = [80, 90, 80, 82, 90];
var zxScore = [90, 82, 75, 70, 78];

const option = {
  radar: {
    indicator: indicator,
    shape: "circle",
  },
  series: [
    {
      type: "radar",
      data: [
        {
          name: "华为手机",
          value: zxScore,
        },
        {
          name: "中兴手机",
          value: hwScore,
        },
      ],
      label: {
        show: true,
      },
      areaStyle: {},
    },
  ],
};
myChart.setOption(option);
