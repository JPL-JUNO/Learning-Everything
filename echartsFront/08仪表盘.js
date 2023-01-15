var myChart = echarts.init(document.querySelector("div"));

var data = [{ value: 97 }];
var option = {
  series: [
    {
      type: "gauge",
      data: [
        {
          name: "研发中",
          value: 97,
          itemStyle: {
            color: "orange",
          },
          title: {
            offsetCenter: ["-40%", "80%"],
          },
          detail: {
            offsetCenter: ["-40%", "100%"],
          },
        },
        {
          name: "上线",
          value: 85,
          itemStyle: {
            color: "green",
          },
          title: {
            offsetCenter: ["0%", "80%"],
          },
          detail: {
            offsetCenter: ["0%", "100%"],
          },
        },
      ],
      min: 50,
      max: 100,
      anchor: {
        show: true,
      },
      // 展示进度的动画
      progress: {
        show: true,
        overlap: true,
        roundCap: true,
      },
      // 下方展示的一些细节
      detail: {
        width: 35,
        height: 14,
        fontSize: 14,
        backgroundColor: "inherit",
      },
    },
  ],
};

myChart.setOption(option);
