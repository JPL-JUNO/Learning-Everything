// var myChart = echarts.init(document.querySelector("div"), "light");
var myChart = echarts.init(document.querySelector("div"), "shine");

var xDataArr = ["a", "b", "c", "d", "e", "f"];
var yDataArr = [17, 24, 14, 24, 39, 34];

var option = {
  xAxis: {
    type: "category",
    data: xDataArr,
  },
  yAxis: {
    type: "value",
  },
  series: [{ type: "bar", data: yDataArr }],
};

myChart.setOption(option);
