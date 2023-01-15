// var myChart = echarts.init(document.querySelector("div"), "light");
var myChart = echarts.init(document.querySelector("div"));

var xDataArr = ["a", "b", "c", "d", "e", "f"];
var yDataArr = [17, 24, 14, 24, 39, 34];

var option = {
  // 全局调色盘
  color: ["red", "green", "blue", "skyblue", "purple"],
  xAxis: {
    type: "category",
    data: xDataArr,
  },
  yAxis: {
    type: "value",
  },

  series: [
    {
      type: "bar",
      data: yDataArr,
      // 局部调色盘
      //   color: ["green", "red"],
      itemStyle: {
        // color: {
        //   type: "linear", // 线性渐变
        //   x: 0,
        //   y: 0,
        //   x2: 0,
        //   y2: 1,
        //   colorStops: [
        //     { offset: 0, color: "red" },
        //     { offset: 1, color: "green" },
        //   ],
        // },
        color: {
          type: "radial", // 径向渐变
          // x, y, r都为相对值
          x: 0.5,
          y: 0.5,
          r: 1,
          colorStops: [
            { offset: 0, color: "red" },
            { offset: 1, color: "green" },
          ],
        },
      },
    },
  ],
};

myChart.setOption(option);
