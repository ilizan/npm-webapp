<template>
  <div>
    <div id="chart1" style="width: 435px; height: 280px"></div>
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
      myChart = echarts.init(document.getElementById("chart1"));

      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c}", // ({d}%)
          backgroundColor: "#092750",
          textStyle: {
            color: "#bedeff",
          },
        },
        legend: {
          type: "plain",
          orient: "vertical",
          right: 60,
          top: "25%",
          bottom: 20,
          itemHeight: 18,
          itemGap: 20, //纵向间隔
          textStyle: {
            color: "#AADDFF",
          },
          //   data: ["云计","庞李","张尤戚安·邬苗韦"],
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: "55%",
            center: ["30%", "50%"],
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              shadowBlur: 0,
              color: "rgba(0, 0, 0, 0)",
              borderColor: "#073D72",
              borderWidth: 10,
            },
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            // data: [{"name":"云计","value":38160}],
          },
        ],
        graphic: {
          elements: [
            {
              type: "group",
              left: 97,
              top: "middle",
              children: [
                {
                  type: "text",
                  width: 10,
                  z: 2,
                  top:0,
                  zlevel: 10,
                  style: {
                    text: "施 工",
                    fill: "#FFFFFF",
                    // font:'small-caps bold 12px/1 sans-serif',
                    font: "small-caps 28px sans-serif",
                  },
                },
                {
                  type: "text",
                  width: 10,
                  z: 2,
                  top:35,
                  zlevel: 10,
                  style: {
                    text: "状 态",
                    fill: "#FFFFFF",
                    // font:'small-caps bold 12px/1 sans-serif',
                    font: "small-caps 28px sans-serif",
                  },
                },
              ],
            },
          ],
        },
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      myChart.on("click", function (params) {
        // 控制台打印数据的名称
        // console.log(params);
      });
    },
    setDatas() {
      let arr = [];
      let arrTitle = ["未开工", "已竣工", "已开工", "已停工"];
      arr.push({
        name: "未开工",
        value: valueRandom(),
        itemStyle: { color: "#ffc100" },
      });
      arr.push({
        name: "已竣工",
        value: valueRandom(),
        itemStyle: { color: "#657282" },
      });
      arr.push({
        name: "已开工",
        value: valueRandom(),
        itemStyle: { color: "#2fbbe8" },
      });
      arr.push({
        name: "已停工",
        value: valueRandom(),
        itemStyle: { color: "#d9544f" },
      });
      myChart.setOption({
        legend: {
          data: arrTitle,
        },
        series: [
          {
            data: arr,
          },
        ],
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