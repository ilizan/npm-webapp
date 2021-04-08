<template>
  <div class="map">
    <div id="main" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
var myChart = "";
var mapData = [
  {
    name: "济南市",
    count: 1000,
    addCount: 200,
  },
];
var wdData = [
  // {name: '济南市',value: [117.000923,36.675807]}
];
var _this = "";
export default {
  methods: {
    mapInit() {
      // 基于准备好的dom，初始化echarts实例
      myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        // backgroundColor: "#FFF",
        tooltip: {
          //鼠标放上
          trigger: "item",
          backgroundColor:'transparent',
          borderColor:'#cccccc',
          borderWidth:0,
          padding:0,
          formatter: function (params) {
            if (params.data) {
              return (
                `<div class='tip'>${params.name}:<br/>
                项目总数:${params.data.count}<br/>
                新增项目:${params.data.addCount}</div>`
              );
            } else {
              return "";
            }
          },
        },
        geo: {
          //阴影
          map: "山东省",
          aspectScale: 0.75, //长宽比
          zoom: 1.1,
          roam: false,
          itemStyle: {
            normal: {
              areaColor: "#013C62",
              shadowColor: "#182f68",
              shadowOffsetX: 10,
              shadowOffsetY: 15,
            },
            emphasis: {
              areaColor: "#2AB8FF",
              borderWidth: 0,
              color: "green",
              label: {
                show: false,
              },
            },
          },
        },
        series: [
          {
            type: "map", //地图
            // selectedMode:false,
            roam: true,
            label: {
              //文字
              normal: {
                show: false,
                textStyle: {
                  color: "#fff",
                },
              },
              emphasis: {
                textStyle: {
                  color: "#fff",
                },
              },
            },

            itemStyle: {
              //边框
              normal: {
                borderColor: "#2ab8ff",
                borderWidth: 1,
                areaColor: "#12235c",
              },
              emphasis: {//鼠标放上背景色
                areaColor: "#2AB8FF",
                borderWidth: 0,
                color: "green",
              },
            },
            select:{//选中样式
                label:{
                    color:'#FFF'
                },
                itemStyle:{
                    areaColor: "#2AB8FF",
                }
            },
            zoom: 1.1,
            roam: false,
            map: "山东省", //使用
            data: mapData, //数据   不同区域 不同的底色
          },
          {
            //
            type: "effectScatter",
            coordinateSystem: "geo",
            showEffectOn: "render",
            rippleEffect: {
              period: 15,
              scale: 4,
              brushType: "fill",
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: "#F6F718",
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
            // itemStyle:{color:'#4ab2e5'},
            data: wdData,
          },
        ],
        graphic: [
          {
            type: "text",
            ignore:true,//默认隐藏
            right: "10px",
            bottom: "10px",
            z: 100,
            style: {
              fill: "#00C7FF",
              text: "查看全省",
              font: "bold 14px Microsoft YaHei",
            },
            onclick: function () {
              _this.backFn();
            },
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);

      myChart.on("click", function (e) {
        if (e.componentSubType == "map" && e.name =='济南市') {
          myChart.setOption({
            geo: {
              map: e.name,
            },
            series: [{
              map: e.name,
            //   selectedMode:true//取消默认选中地图
            }],
            graphic: {
              ignore: false,
            },
          });
        }
      });
    },
    backFn() {
      myChart.setOption({
          geo:{
              map:'山东省'
          },
          series:[{
              map:'山东省',
            //   selectedMode:false//取消默认选中地图
          }],
          graphic:{
              ignore:true
          }
      });
      //返回省地图后 取消选中状态
      myChart.dispatchAction({
        type: 'unselect',
        name:'济南市'
      })
    },
  },
  mounted() {
    _this = this;
    this.mapInit();
  },
};
</script>

<style lang="scss" scoped>
.map{
    background-color: #ccc;
    /deep/.tip{
        background-color: #FFF;
        padding: 5px;
        border-radius: 3px;
    }
}

</style>