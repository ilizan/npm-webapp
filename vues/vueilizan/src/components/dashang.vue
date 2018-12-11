<template>
  <div style="overflow: hidden;padding-top:10px;">
    <Divider>打赏</Divider>
    <Row>
      <Col :sm="{ span:6,offset:6 }" :xs="{ span: 24, offset: 0 }">
        <Card dis-hover>
          <div style="text-align:center">
            <img src="./../assets/zfb.jpg">
            <h3>支付宝</h3>
          </div>
        </Card>
      </Col>
      <Col :sm="{ span:6,offset:0 }" :xs="{ span: 24, offset: 0 }">
        <Card dis-hover>
          <div style="text-align:center">
            <img style="min-height:209px;" src="./../assets/wx.jpg">
            <h3>微信</h3>
          </div>
        </Card>
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
  props: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="scss">
</style>