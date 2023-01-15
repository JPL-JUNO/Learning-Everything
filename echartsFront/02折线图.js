var myChart = echarts.init(document.querySelector("div"));
const xDataArr = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];
const yDataArr = [
  3000, 2800, 900, 1000, 800, 700, 1400, 1300, 900, 1000, 800, 600,
];
const yDataArr2 = [
  2800, 3500, 1900, 2700, 1800, 700, 1400, 1300, 900, 1000, 800, 600,
];
const option = {
  xAxis: {
    type: "category",
    data: xDataArr,
    boundaryGap: false,
  },
  yAxis: {
    type: "value",
    scale: true,
  },
  series: [
    {
      name: "康师傅",
      type: "line",
      data: yDataArr,
      markPoint: {
        data: [
          { type: "max", name: "最大值" },
          { type: "min", name: "最小值" },
        ],
      },
      markLine: {
        data: [{ type: "average", name: "平均值" }],
      },
      markArea: {
        data: [
          [
            { xAxis: "1月", yAxis: 1500 },
            { xAxis: "3月", yAxis: 2700 },
          ],
          [{ xAxis: "8月" }, { xAxis: "11月" }],
        ],
      },
      smooth: true, //线条是否光滑
      lineStyle: {
        // 线条的类型
        color: "green",
        //   type: "dashed",
        type: "dotted",
      },
      areaStyle: {
        color: "orange",
      },
      stack: "all",
    },
    {
      type: "line",
      name: "统一",
      data: yDataArr2,
      stack: "all",
      areaStyle: {
        color: "red",
      },
      smooth: true,
    },
  ],
};

myChart.setOption(option);
