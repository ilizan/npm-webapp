<template>
  <div class="bank">
    <div class="tigs">
      <ul class="name">
        <li>累计实发人次</li>
        <li>累计实发金额（亿元）</li>
        <li>累计实发项目数（个）</li>
      </ul>
      <ul class="count">
        <li>2932</li>
        <li>24129</li>
        <li>1296</li>
      </ul>
    </div>
    <div class="charts">
      <div id="chart" style="width: 460px; height: 350px"></div>
    </div>
  </div>
</template>

<script>
var echarts = require("echarts");
var myChart = "";
var valueRandom = function () {
  return Math.floor(Math.random() * 100);
};
export default {
  data() {
    return {};
  },
  methods: {
    mapInit() {
      myChart = echarts.init(document.getElementById("chart"));

      // 指定图表的配置项和数据
      let option = {
        grid: {
          bottom: "40",
        },
        title: {
          text: "每月代发记录",
          textStyle: {
            color: "#5BDBF6",
            fontWeight: "normal",
            fontSize: 14,
          },
        },
        tooltip: {
          //鼠标放上
          trigger: "item",
          backgroundColor: "#092750",
          textStyle: {
            color: "#bedeff",
          },
        },
        // dataset: {
        //   dimensions: ["product", "je", "rc"],
        //   source: [
        //     { product: "1月", je: 43.3, rc: 85.8 },
        //     { product: "2月", je: 83.1, rc: 73.4 },
        //     { product: "3月", je: 86.4, rc: 65.2 },
        //     { product: "4月", je: 72.4, rc: 53.9 },
        //   ],
        // },
        legend: {
          data: ["实发金额", "实发人次"],
          right: "10px",
          textStyle: {
            color: "#5BDBF6",
          },
        },
        xAxis: {
          type: "category",
          //   data: ["1月", "2月", "3月"],
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
            name: "万元",
            // 修改文本的颜色
            axisLabel: {
              color: "#4684B7",
              fontSize: 10,
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
          {
            name: "人次",
            // 修改文本的颜色
            position: "right",
            axisLabel: {
              color: "#4684B7",
              fontSize: 10,
            },
            // 修改轴线的颜色
            axisLine: {
              lineStyle: {
                color: "#4684B7",
                type: "dashed",
              },
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#1E4D78",
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            name: "实发金额",
            type: "line",
            smooth: true,
            itemStyle: {
              color: "#FAAF65",
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
          {
            name: "实发人次",
            type: "line",
            yAxisIndex: 1,
            type: "line",
            smooth: true,
            itemStyle: {
              color: "#14EBC9",
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
                    color: "#14EBC9", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(148, 49, 55, 0)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            // data: [112.3, 233.41, 423.52, 982, 84, 1345],
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
      for (let index = 1; index < 13; index++) {
        arr.push({
          product: index + "月",
          je: valueRandom(),
          rc: valueRandom(),
        });
      }
      myChart.setOption({
        dataset: {
          dimensions: ["product", "je", "rc"],
          source: arr,
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
.bank {
  .tigs {
    width: 450px;
    margin: 20px auto;
    overflow: hidden;
    ul.name {
      height: 25px;
      li {
        float: left;
        width: 33.3%;
        font-size: 14px;
        text-align: center;
        color: #bedeff;
      }
    }
    ul.count {
      background-color: #184a7c;
      height: 35px;
      line-height: 35px;
      li {
        float: left;
        width: 33.3%;
        font-size: 20px;
        text-align: center;
        color: #77c8ff;
        font-weight: 700;
      }
    }
  }
  .charts {
    height: 350px;
    overflow: hidden;
  }
  #chart {
    margin: 0 auto;
  }
}
</style>