<template>
  <div class="map">
    <div id="main" style="width: 686px; height: 449px"></div>
  </div>
</template>

<script>
var echarts = require("echarts");

//引入地图数据
let mapDataList = [
  "山东省",
  "济南市",
  "东营市",
  "临沂市",
  "威海市",
  "德州市",
  "日照市",
  "枣庄市",
  "泰安市",
  "济宁市",
  "淄博市",
  "滨州市",
  "潍坊市",
  "烟台市",
  "聊城市",
  "菏泽市",
  "青岛市",
];
mapDataList.forEach((item) => {
  echarts.registerMap(item, require("./" + item));
});

var myChart = "";
var _this = "";
var valueRandom = function (mapData) {
  mapData.forEach((item) => {
    item.value = Math.random() * 100;
  });
  return mapData;
};
var wdData = [
  { name: "济南市2", value: [117.30377197265625,
          36.71466899719828] },
];
export default {
  methods: {
    mapInit(cityName, mapList) {
      // 基于准备好的dom，初始化echarts实例
      myChart = echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      var option = {
        // backgroundColor: "#FFF",
        tooltip: {
          //鼠标放上
          trigger: "item",
          backgroundColor: "transparent",
          borderColor: "#cccccc",
          borderWidth: 0,
          padding: 0,
          extraCssText:'box-shadow:none;',
          formatter: function (params) {
            if (params.data) {
              return `<div class='tip'>
                  <div class='title'>${params.name}</div>
                  <div class='cont'>
                  项目总数:${params.data.count}<br/>
                  新增项目:${params.data.addCount}
                  </div>
                </div>`;
            } else {
              return "";
            }
          },
        },
        geo: {
          //阴影
          map: cityName,
          aspectScale: 0.75, //长宽比
          zoom: 1.1,
          roam: false, //禁止拖拽
          itemStyle: {
            // normal: {
            areaColor: "#013C62",
            shadowColor: "#182f68",
            shadowOffsetX: 10,
            shadowOffsetY: 15,
            // },
          },
        },
        series: [
          {
            type: "map", //地图
            // selectedMode:false,
            roam: true,
            label: {
              //文字
              show: true,
              color: "#fff",
            },

            itemStyle: {
              //边框
              // normal: {
              borderColor: "#2ab8ff",
              borderWidth: 1,
              areaColor: "#12235c",
              // },
            },
            emphasis: {//高亮
              label:{
                color:"#FFF"
              },
              
              itemStyle: {
                //鼠标放上背景色
                areaColor: "#2AB8FF",
                borderWidth: 0,
                // color: "red",
                // opacity: 0.5
              },
            },
            select: {
              //选中样式
              label: {
                color: "#FFF",
              },
              itemStyle: {
                areaColor: "#2AB8FF",
              },
            },
            zoom: 1.1,
            roam: false,
            map: cityName, //使用
            data: valueRandom(mapList), //数据   不同区域 不同的底色
          },
          {
            //维度
            type: "effectScatter",
            coordinateSystem: "geo",
            showEffectOn: "render",
            rippleEffect: {
              color: "#2BB8FF",
              period: 15,
              scale: 4,
              brushType: "fill",
            },
            hoverAnimation: true,
            itemStyle: {
              opacity: 0
            },
            data: wdData,
          },
        ],
        graphic: [
          {
            type: "text",
            ignore: true, //默认隐藏
            right: "10px",
            bottom: "50px",
            z: 100,
            style: {
              fill: "#00C7FF",
              text: "←查看全省",
              font: "bold 20px Microsoft YaHei",
            },
            onclick: function () {
              //返回山东省
              //   _this.backFn();
              myChart.setOption({
                geo: {
                  map: "山东省",
                },
                series: [
                  {
                    map: "山东省",
                  },
                ],
                graphic: {
                  ignore: true,
                },
              });
              //返回省地图后 取消选中状态
              myChart.dispatchAction({
                type: "unselect",
                name: localStorage.getItem("selectCity"),
              });
              localStorage.removeItem("selectCity");
            },
          },
        ],
        visualMap: {
          //视图不同色
          min: 0,
          max: 100,
          calculable: true,
          realtime: false,
          show: false,
          inRange: {
            color: ["#00BFBF", "#0433FF", "#02FDFF", "#02A7F0"],
          },
        },
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);

      myChart.on("click", function (e) {
        console.log(e);
        // let s = e.selected[e.name]
        // console.log(s);
        if (e.componentSubType == "map" && mapDataList.indexOf(e.name) >= 0) {
          localStorage.setItem("selectCity", e.name);
          _this.$parent.getMapSelect(e.name);
          // myChart.setOption({
          //   geo: {
          //     map: e.name,
          //   },
          //   series: [
          //     {
          //       map: e.name,
          //       //   selectedMode:true//取消默认选中地图
          //     },
          //   ],
          //   graphic: {
          //     ignore: false,
          //   },
          // });
        }
      });
    },
    setMapData(cityName, mapList, isIgnore) {
      myChart.setOption({
        geo: {
          map: cityName,
        },
        series: [
          {
            map: cityName,
            data: valueRandom(mapList),
          },
        ],
        graphic: {
          ignore: isIgnore,
        },
      });
    },
  },
  mounted() {
    _this = this;
  },
};
</script>

<style lang="scss" scoped>
.map {
  // background-color: #ccc;
  /deep/.tip {
    width: 222px;
    height: 91px;
    background-image: url('./../../assets/images/tigbg.png');
    padding: 0px;
    border-radius: 3px;
    color: #00c4f7;
    .title{
      text-align: center;
      line-height: 25px;
    }
    .cont{
      line-height: 30px;
    padding: 0 10px;
    }
  }
}
</style>