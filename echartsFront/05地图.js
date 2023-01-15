const myChart = echarts.init(document.querySelector("div"));
var airData = [
  { name: "北京", value: 39.92 },
  { name: "天津", value: 39.13 },
  { name: "上海", value: 31.22 },
  { name: "重庆", value: 66 },
  { name: "河北", value: 147 },
  { name: "河南", value: 113 },
  { name: "云南", value: 25.04 },
  { name: "辽宁", value: 50 },
  { name: "黑龙江", value: 114 },
  { name: "湖南", value: 175 },
  { name: "安徽", value: 117 },
  { name: "山东", value: 92 },
  { name: "新疆", value: 84 },
  { name: "江苏", value: 67 },
  { name: "浙江", value: 84 },
  { name: "江西", value: 96 },
  { name: "湖北", value: 273 },
  { name: "广西", value: 59 },
  { name: "甘肃", value: 99 },
  { name: "山西", value: 39 },
  { name: "内蒙古", value: 58 },
  { name: "陕西", value: 61 },
  { name: "吉林", value: 51 },
  { name: "福建", value: 29 },
  { name: "贵州", value: 71 },
  { name: "广东", value: 38 },
  { name: "青海", value: 57 },
  { name: "西藏", value: 24 },
  { name: "四川", value: 58 },
  { name: "宁夏", value: 52 },
  { name: "海南", value: 54 },
  { name: "台湾", value: 88 },
  { name: "香港", value: 66 },
  { name: "澳门", value: 77 },
  { name: "南海诸岛", value: 55 },
];
var scatterData = [
  {
    value: [117.283042, 31.86119],
  },
];
$.get("json/map/china.json", function (ret) {
  echarts.registerMap("chinaMap", ret);
  var option = {
    geo: {
      type: "map",
      map: "chinaMap",
      roam: true,
      label: {
        show: true,
      },
      //   zoom: 2, // 设置初始化的缩放比例
      //   center: [105, 32],
    },
    series: [
      {
        data: airData,
        geoIndex: 0, // 将空hi之变量的数据和第1个geo对象关联到一起
        type: "map",
      },
      {
        data: scatterData,
        type: "effectScatter",
        coordinateSystem: "geo",
        rippleEffect: {
          scale: 10,
        },
      },
    ],
    visualMap: {
      min: 0,
      max: 300,
      inRange: {
        color: ["white", "red"],
      },
      calculable: true,
    },
  };
  myChart.setOption(option);
});
