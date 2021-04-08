<template>
  <div class="index">
    <h2 class="title">吉林省农民工欠薪维权电话导图</h2>
    <div class="mapMain">
      <div class="mychart" id="mychart"></div>
    </div>
    <div class="more">
      <h2 class="tit">{{ selectCity.name }}-投诉维权导图</h2>
      <div class="pot">
        <ul class="areaAll">
          <li
            v-for="(item, index) in areaList"
            :key="index"
            @click="moreFn(item)"
          >
            {{ item.areaName }}
          </li>
        </ul>
        <div class="qrImg">
          <img
            :src="qr.qrImgUrl"
            alt=""
          />
          <div v-if="qr.qrImgUrl" class="titles">劳动维权码上办</div>
        </div>
      </div>
    </div>
    <Cview ref="cview"></Cview>
  </div>
</template>

<script>

import Cview from "@/components/Cview.vue";

export default {
  name: "ComplaintMap",
  data() {
    return {
      cityList: [],
      selectCity: {},
      cityInfo: {},
      areaList: [],
      qr: {
        qrImgUrl: "",
        webUrl: "",
      },
    };
  },
  components: {
    Cview,
  },
  methods: {
    mapInit() {
      // 初始化
      let mychart = this.echarts.init(document.getElementById("mychart"));
      // 监听屏幕变化自动缩放图表
      window.addEventListener("resize", function () {
        mychart.resize();
      });
      mychart.setOption({
        trigger: "item",
        // tooltip: {
        //   trigger: 'item',
        //   formatter: '{b}投诉电话'
        // },
        // legend: {
        //   data: [
        //     {
        //       name: "长春市",
        //     },
        //   ],
        // },
        series: [
          {
            type: "map",
            map: "吉林省",
            // 地图类型
            mapType: "province",
            selectedMode: "single",
            zoom: 1.2,
            roam: false,
            data: this.cityList,
            nameMap: {},
            label: {
              show: true,
              color: "#FFF",
              fontSize: "12",
            },
            itemStyle: {
              borderWidth: 0.5, //边框大小
              borderColor: "#ccc",
              areaColor: "#0070bc", //背景颜色
            },
            label: {
              show: true, //显示名称
              color: "#FFF",
            },
            emphasis: {
              //高亮
              itemStyle: {
                borderWidth: 1,
                borderColor: "#ccc",
                areaColor: "red",
                color: "#FFF",
              },
              label: {
                show: true,
                color: "#fff",
              },
            },
            select: {
              //选中
              itemStyle: {
                areaColor: "red",
              },
              label: {
                color: "#FFF",
              },
            },
          },
        ],
      });
      mychart.on("click", (params) => {
        this.selectCity = {
          cityCode: "", //params.data.cityCode,
          name: params.name,
          label: params.name,
        };
        this.countyListFn();
      });
    },
    init() {
      this.cityList.push({
        name: "长春市",
        cityCode: 12345,
        selected: true,
      });
      this.selectCity = {
        name: "长春市",
        cityCode: 12345,
        label: "长春市",
      };
      this.mapInit();
    },
    countyListFn() {
      //获得区县列表
      this.areaList = [
        {
          areaName: "区县1",
        },
        {
          areaName: "区县2",
        },
      ];
      this.qr = {
        qrImgUrl: 'http://117.73.252.198:7001/qrcode/image/complaint/zibo.jpg',
        webUrl: 'https://open.darewayhealth.com/page/450/1.0.1/templates/6130/index/index.html',
      };
    },
    //查看更多
    moreFn(selectArea) {
      this.$nextTick(() => {
        this.$refs.cview.init(this.selectCity, selectArea);
      });
    },
  },
  mounted() {
    //获得吉林省下城市数据
    this.init();
    //根据城市id获得区县列表和当前城市id下二维码
    this.countyListFn();
  },
};
</script>

<style lang="less" scoped>
.index {
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url("../../assets/img/bg.png");
  background-position: center;
  background-size: 100% 100%;
}

.title {
  text-align: center;
  font-size: 18px;
  color: #000;
  // height: 10%;
  line-height: 35px;
  font-weight: inherit;
}
.mapMain {
  width: 100%;
  // height: 40%;
}
.mychart {
  width: 100%;
  height: 220px;
  margin: 0 auto;
}
.more {
  background-color: #f1f1f1;
  height: calc(100vh - 255px);
  padding: 0 5px;
  border-radius: 10px 10px 0 0;
  .tit {
    font-size: 16px;
    font-weight: inherit;
    text-align: center;
    padding: 10px 0;
  }
  .pot {
    color: #969799;
    height: calc(100% - 50px);
    position: relative;
    overflow: auto;
  }
}
.areaAll {
  overflow: hidden;
  li {
    float: left;
    font-size: 15px;
    border-radius: 5px;
    background-color: #fff;
    padding: 9px 13px;
    margin: 5px 10px;
    color: #333;
  }
}
.qrImg {
  text-align: center;
  margin-top: 10px;
  img {
    width: 150px;
  }
  .titles {
    font-size: 18px;
  }
}
</style>

