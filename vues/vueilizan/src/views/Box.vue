<template>
  <div class="Box">
    <Row>
      <Col :sm="{ span: 18, offset: 3 }" :xs="{ span: 24, offset: 0 }">
        <h2 class="page_title">箱子</h2>
      </Col>
      <Col :sm="{ span: 18, offset: 3 }" :xs="{ span: 24, offset: 0 }">
        <Row :gutter="16">
          <Col :sm="{ span: 12, offset: 0 }" :xs="{ span: 24, offset: 0 }">
            <Card dis-hover>
              <p slot="title">天气</p>
              <p>
                <Select v-model="selCity" style="width:200px" @on-change="getWeather()">
                  <Option v-for="item in cityList" :value="item" :key="item">{{ item }}</Option>
                </Select>
              </p>
              <p></p>
              
            </Card>
          </Col>
          <Col :sm="{ span: 12, offset: 0 }" :xs="{ span: 24, offset: 0 }">
            <Card dis-hover>
              <p slot="title">Disable card with hover shadows</p>
              <p>Content of card</p>
              <p>Content of card</p>
              <p>Content of card</p>
            </Card>
          </Col>
        </Row>
        <!-- <DS></DS> -->
      </Col>
    </Row>
  </div>
</template>
<script>
import DS from "@/components/dashang.vue";
import { getWeather } from "@/api/api";

export default {
  name: "Box",
  components: {
    DS
  },
  data() {
    return {
      cityList: ["北京", "上海", "广州", "重庆"],
      selCity: ""
    };
  },
  methods: {
    getWeather() {
      let para = {
        city: this.selCity
      };
      getWeather(para).then(res => {
        console.log(res)
        // if(res.status==200)
        this.cityInfo = res.data;
      });
    }
  },
  mounted() {
    //初始化默认
    this.selCity = this.cityList[0];
    this.getWeather(); //天气
  }
};
</script>
<style>
</style>