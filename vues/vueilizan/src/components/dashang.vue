<template>
  <div style="overflow: hidden;">
    <Divider v-if="titleFlag!=1">打赏</Divider>
    <Row :gutter="5">
      <Col :sm="{ span:12,offset:0 }" :xs="{ span: 12, offset: 0 }">
        <!-- <Card dis-hover> -->
        <div class="cn">
          <img src="./../assets/zfb.jpg">
          <h3>支付宝</h3>
        </div>
        <!-- </Card> -->
      </Col>
      <Col :sm="{ span:12,offset:0 }" :xs="{ span: 12, offset: 0 }">
        <!-- <Card dis-hover> -->
        <div class="cn">
          <img style="min-height:209px;" src="./../assets/wx.jpg">
          <h3>微信</h3>
        </div>
        <!-- </Card> -->
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "dashang",
  data: function() {
    return {
      count: 0
    };
  },
  props: {
    titleFlag: String
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="scss">
.cn {
  text-align: center;
}
.cn img {
  margin: 0 auto;
}
.cn h3 {
  font-size: 16px;
  line-height: 30px;
}
</style>