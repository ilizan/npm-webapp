<template>
  <div class="map">
    地图
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div id="main" style="width: 600px; height: 400px"></div>
    <button @click="btn()">异步更新数据</button>
  </div>
</template>

<script>
var myChart = "";
export default {
  data() {
    return {};
  },
  methods: {
    mapInit() {
      myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      let option = {
        // backgroundColor: "#2c343c",
        // title: {
        //   //   text: "ECharts 入门示例",
        // },
        tooltip: {},
        dataZoom: [
        {   // 这个dataZoom组件，默认控制x轴。
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            start: 0,      // 左边在 10% 的位置。
            end: 75        // 右边在 60% 的位置。
        },
        {   // 这个dataZoom组件，也控制x轴。
            type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
            start: 10,      // 左边在 10% 的位置。
            end: 75         // 右边在 60% 的位置。
        }
    ],
        dataset: {
          // 提供一份数据。
          source: [
            // ["项目", "2015", "2016", "2017", "2018"],
            // ["项目1", 43.3, 85.8, 93.7, 124],
            // ["项目2", 83.1, 73.4, 55, 64],
            // ["项目3", 86.4, 65.2, 82.5, 63],
            // ["项目4", 72.4, 53.9, 39.1, 36],
          ],
        },
        legend: {},
        xAxis: {
          type: "category"
        },
        yAxis: { },
        series: [
          { type: "bar" },
          { type: "bar" },
        ],
        graphic: [
          {
            type: "text",
            // ignore:false,//默认隐藏
            right: "2%",
            bottom: "1%",
            z: 100,
            style: {
              fill: "#000",
              text: "返回上一页",
              font: "bold 18px Microsoft YaHei"
            },
          }
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      myChart.on('click', function (params) {
        // 控制台打印数据的名称
        console.log(params);
    });
    },
    sjs() {
      let max = 100000,
        min = 1;
      return Math.floor(Math.random() * (max - min)) + min;
    },
    btn() {
      myChart.showLoading();
      myChart.setOption({
        dataset: {
          source: [
            {product: '项目1', count: 823, score: 95.8},
            {product: 'Milk Tea', count: 235, score: 81.4},
            {product: 'Cheese Cocoa', count: 1042, score: 91.2},
            {product: 'Walnut Brownie', count: 988, score: 76.9}
          ],
        },
      });
      myChart.hideLoading();
    },
  },
  mounted() {
    this.mapInit();
    this.btn()
  },
};
</script>

<style lang="scss" scoped>
</style>