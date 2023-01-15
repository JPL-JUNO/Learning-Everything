const myChart = echarts.init(document.querySelector("div"));
// 加载数据前显示加载动画
myChart.showLoading();
$.get("data/test_data.json", function (ret) {
  // 获取数据后隐藏加载动画
  myChart.hideLoading();
  var axisData = [];
  for (var i = 0; i < ret.length; i++) {
    var height = ret[i].height;
    var weight = ret[i].weight;
    var newArr = [height, weight];
    axisData.push(newArr);
  }
  console.log(axisData);

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
    // label: {
    //   show: true,
    // },
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
          return BMI > 25 ? 15 : 5;
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
});
