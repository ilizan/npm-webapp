<template>
  <div>
    <div id="chart3" style="width: 435px; height: 280px"></div>
  </div>
</template>

<script>
var echarts = require("echarts");
var myChart = "";
var valueRandom = function () {
  return Math.floor(Math.random() * 100);
};
export default {
  methods: {
    mapInit() {
      myChart = echarts.init(document.getElementById("chart3"));

      // 指定图表的配置项和数据
      let option = {
        grid: {
          bottom: "30",
          right:20
        },
        tooltip: {
          show: false,
        },
        xAxis: {
          type: "category",
          // data: ["1月", "2月", "3月"],
          boundaryGap: true,
          splitLine: {
            show: true,
            lineStyle: {
              color: "#1E4D78",
              width: 1,
              type: "dashed",
            },
          },
          // 修改文本的颜色
          axisLabel: {
            color: "#9FD1F5",
            fontSize: 10,
          },
          axisTick: {
            show: true,
            alignWithLabel: true,
          },
          axisPointer: {
            show: false,
            type: "line",
          },
        },
        yAxis: [
          {
            name: "%",
            // 修改文本的颜色
            axisLabel: {
              color: "#4684B7",
              fontSize: 10,
              splitNumber:5,
              max: 100,
              min: 0,
              // formatter: function (value) {
              //   var texts = [];
              //   // if (value == 0) {
              //   //   texts.push("woo");
              //   // } else if (value <= 1) {
              //   //   texts.push("好");
              //   // } else if (value <= 2) {
              //   //   texts.push("很好");
              //   // } else if (value <= 3) {
              //   //   texts.push("非常好");
              //   // } else {
              //   //   texts.push("完美");
              //   // }
              //   console.log([1,50,100]);
              //   return [1,50,100];
              // },
            },
            // 修改轴线的颜色
            axisLine: {
              lineStyle: {
                color: "#4684B7",
                type: "dashed",
              },
            },
            splitLine: {
              lineStyle: {
                color: "#1E4D78",
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            name: "%",
            type: "bar",
            smooth: true,
            barWidth: "30",
            barCategoryGap: "50",
            label: {
              show: true,
              position: "top",
              formatter: "{c}%",
              color: "#FFFFFF",
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#006DFF" },
                { offset: 1, color: "#1FA2FF" },
              ]),
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#FAAF65", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(148, 49, 55, 0)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            // data: [1, 24, 223, 2423, 22, 932],
          },
        ],
        dataZoom: [
          {
            type: "inside", // 这个 dataZoom 组件是 inside 型 dataZoom 组件
            start: 0, // 左边在 10% 的位置。
            end: 50, // 右边在 50% 的位置。
            xAxisIndex: [0],
            zoomOnMouseWheel: false,
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      myChart.on("click", function (params) {
        // 控制台打印数据的名称
        console.log(params);
      });
    },
    setDatas() {
      let arr = [];
      let arrTitle = [];
      for (let index = 1; index < 13; index++) {
        arrTitle.push("住建" + index);
        arr.push(valueRandom());
      }
      myChart.setOption({
        xAxis: {
          data: arrTitle,
        },
        series: {
          data: arr,
        },
      });
    },
  },
  mounted() {
    this.mapInit();
    this.setDatas();
  },
};
</script>

<style lang="scss" scoped>
</style>