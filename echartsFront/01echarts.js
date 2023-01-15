// 需要放在div下方，不然querySelector查找不到
// 参数，DOM，决定图标最终呈现的位置
var myCharts = echarts.init(document.querySelector("div"));
var xDataArr = ["张三", "李四", "王五", "闰土", "小明", "茅台", "二妞", "大强"];
var yDataArr1 = [88, 92, 63, 77, 94, 80, 72, 86];
var yDataArr2 = [68, 72, 93, 97, 64, 89, 62, 89];
var option = {
  title: {
    text: "成绩",
    textStyle: { color: "orange" },
    borderWidth: 5,
    borderColor: "red",
    borderRadius: 5,
    left: 30,
    top: 10,
  },
  tooltip: {
    // trigger: "item",
    trigger: "axis",
    // triggerOn: "click",
    triggerOn: "mousemove",
    // formatter: "{b}的成绩是{c}",
    formatter: function (arg) {
      return arg[0].name + "的分数是" + arg[0].data;
    },
  },
  toolbox: {
    feature: {
      saveAsImage: {}, //导出图片
      dataView: {}, //数据视图
      restore: {}, //重置
      dataZoom: {}, //区域缩放
      magicType: {
        type: ["bar", "line"], //动态图表类型切换
      }, //
    },
  },
  xAxis: {
    type: "category",
    data: xDataArr,
  },
  yAxis: {
    type: "value",
  },
  legend: {
    data: ["语文", "数学"],
  },
  series: [
    {
      name: "语文",
      type: "bar",
      data: yDataArr1,
      markPoint: {
        data: [
          { type: "max", name: "最大值" },
          { type: "min", name: "最小值" },
        ],
      },
      markLine: {
        data: [{ type: "average", name: "平均值" }],
      },
      label: {
        show: true,
        rotate: 60,
        position: "inside",
      },
      barWidth: "30%",
    },
    {
      name: "数学",
      type: "bar",
      data: yDataArr2,
      markPoint: {
        data: [
          { type: "max", name: "最大值" },
          { type: "min", name: "最小值" },
        ],
      },
      markLine: {
        data: [{ type: "average", name: "平均值" }],
      },
      label: {
        show: true,
        rotate: 60,
        position: "inside",
      },
      barWidth: "30%",
    },
  ],
};
myCharts.setOption(option);
