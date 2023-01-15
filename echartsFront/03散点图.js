const dataScatter = [
  { gender: "female", height: 161.2, weight: 51.6 },
  {
    gender: "female",
    height: 167.5,
    weight: 59,
  },
  {
    gender: "female",
    height: 159.5,
    weight: 49.2,
  },
  {
    gender: "female",
    height: 157,
    weight: 63,
  },
  { gender: "female", height: 155.8, weight: 53.6 },
  {
    gender: "female",
    height: 170,
    weight: 59,
  },
  {
    gender: "female",
    height: 159.1,
    weight: 47.6,
  },
  {
    gender: "female",
    height: 166,
    weight: 69.8,
  },
  { gender: "female", height: 176.2, weight: 66.8 },
  {
    gender: "female",
    height: 160.2,
    weight: 75.2,
  },
  {
    gender: "female",
    height: 172.5,
    weight: 55.2,
  },
  {
    gender: "female",
    height: 170.9,
    weight: 54.2,
  },
  { gender: "female", height: 172.9, weight: 62.5 },
  {
    gender: "female",
    height: 153.4,
    weight: 42,
  },
  {
    gender: "female",
    height: 160,
    weight: 50,
  },
  {
    gender: "female",
    height: 147.2,
    weight: 49.8,
  },
];
var axisData = [];
for (var i = 0; i < dataScatter.length; i++) {
  var height = dataScatter[i].height;
  var weight = dataScatter[i].weight;
  var newArr = [height, weight];
  axisData.push(newArr);
}

const myChart = echarts.init(document.querySelector("div"));
var option = {
  // toolbox: {
  //   feature: {
  //     dataZoom: {},
  //   },
  // },
  dataZoom: [
    {
      // type: "slider",
      type: "inside",
      xAxisIndex: 0,
    },
    {
      type: "slider",
      yAxisIndex: 0,
    },
  ],
  label: {
    show: true,
  },
  grid: {
    show: true,
    borderWidth: 10,
    borderColor: "orange",
    top: 50,
    left: 50,
    right: 100,
    bottom: 100,
    width: 500,
    height: 300,
  },

  xAxis: {
    type: "value",
    scale: true,
    position: "top",
  },
  yAxis: {
    type: "value",
    scale: true,
    position: "right",
  },
  series: [
    {
      //   type: "scatter",
      type: "effectScatter",
      showEffectOn: "emphasis",
      //   showEffectOn: "render",
      rippleEffect: {
        scale: 2,
      },

      data: axisData,
      symbolSize: function (arg) {
        var height = arg[0] / 100;
        var weight = arg[1];
        var BMI = weight / (height * height);
        return BMI > 25 ? 60 : 30;
      },
      itemStyle: {
        color: function (arg) {
          var height = arg.data[0] / 100;
          var weight = arg.data[1];
          var BMI = weight / (height * height);
          return BMI > 25 ? "red" : "green";
        },
      },
    },
  ],
};
myChart.setOption(option);
