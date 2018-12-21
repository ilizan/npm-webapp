<template>
  <div class="Weather">
    <Col :sm="{ span: 24, offset: 0 }" :xs="{ span: 24, offset: 0 }">
      <Card dis-hover>
        <p slot="title">天气</p>
        <p style="width:100%;height:35px;">
          <!-- <Select v-model="selCity" style="float:right;width:200px" @on-change="getWeather()">
            <Option v-for="item in cityList" :value="item" :key="item">{{ item }}</Option>
          </Select>-->
          <Input
            v-model="selCity"
            @on-change="getWeather()"
            placeholder="请输入城市名..."
            style="float:right;width:200px"
          />
        </p>
        <div v-if="cityInfo">
          <h2 class="post_title">{{cityInfo.city}}天气</h2>
          <Row :gutter="5" style="margin-top: 20px;">
            <Col :sm="{ span: 8, offset: 0 }" :xs="{ span: 24, offset: 0 }">
              <h3>{{cityInfo.city}}今日天气</h3>
              <div class="weather" v-if="cityInfo.forecast">
                <p>天气:{{cityInfo.forecast[0].type}}</p>
                <p>温度:{{cityInfo.forecast[0].low}}-{{cityInfo.forecast[0].high}}</p>
                <p>风向:{{cityInfo.forecast[0].fengxiang}}</p>
                <p>AQI:{{cityInfo.aqi}}</p>
                <p>注意:{{cityInfo.ganmao}}</p>
              </div>
            </Col>
            <Col :sm="{ span: 16, offset: 0 }" :xs="{ span: 24, offset: 0 }">
              <h3 v-if="cityInfo.forecast">未来{{cityInfo.forecast.length}}天</h3>
              <Table :columns="columns" :data="cityInfo.forecast"></Table>
            </Col>
          </Row>
        </div>
        <div v-if="!cityInfo" class="text_center">
          <div v-if="selCity">暂未查询到{{selCity}}城市的天气信息</div>
          <div v-if="!selCity">请输入城市信息</div>
        </div>
      </Card>
    </Col>
  </div>
</template>

<script>
import { getWeather,postDemo } from "@/api/api";
export default {
  name: "weather",
  data() {
    return {
      cityList: ["北京", "上海", "广州", "重11"],
      selCity: "",
      cityInfo: "",
      columns: [
        {
          title: "日期",
          key: "date"
        },
        {
          title: "天气",
          key: "type"
        },
        {
          title: "温度",
          key: "wendu",
          render: (h, params) => {
            return h(
              "div",
              [h("p", params.row.low, ""), h("p", params.row.high, "")],
              ""
            );
          }
        },
        {
          title: "风向",
          key: "fengxiang"
        },
        {
          title: "操作",
          key: "action",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "default",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.row);
                    }
                  }
                },
                "详细"
              )
            ]);
          }
        }
      ]
    };
  },
  methods: {
    getWeather() {
      if (!this.selCity) {
        this.cityInfo = "";
        return;
      }
      let para = {
        city: this.selCity
      };
      getWeather(para).then(res => {
        if (res.data.code == 200) {
          this.cityInfo = res.data.data;
          this.cityInfo.forecast.splice(0, 1);
        } else if (res.data.code == 201) {
          this.cityInfo = "";
        }
      });
    },
    show(params) {
      console.log(1);
      this.$Modal.info({
        title: "天气信息",
        content: `日期：${params.date}<br>
        天气：${params.type}<br>
        温度：${params.low}~${params.high}<br>
        风向：${params.fengxiang}`
      });
    },
    postDemo(){
      let data={
        id:1,
        name:"小明"
      }
      postDemo(data).then(res => {
        if (res.data.code == 200) {
          this.cityInfo = res.data.data;
          this.cityInfo.forecast.splice(0, 1);
        } else if (res.data.code == 201) {
          this.cityInfo = "";
        }
      });
    }
  },
  mounted() {
    //初始化默认
    this.selCity = this.cityList[0];
    this.getWeather(); //天气
    // this.postDemo();
  }
};
</script>

<style>
.weather p {
  line-height: 25px;
}
</style>