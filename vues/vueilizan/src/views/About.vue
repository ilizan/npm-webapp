<template>
  <div class="about">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <buttoCounter msg="2"></buttoCounter>
    <buttoCounter msg="5"></buttoCounter>
    <Button type="primary">Primary</Button>-->
    <Row>
      <Col :sm="{ span: 18, offset: 3 }" :xs="{ span: 24, offset: 0 }">
        <h2 class="page_title">关于</h2>
      </Col>
      <Col
        :sm="{ span: 18, offset: 3 }"
        :xs="{ span: 24, offset: 0 }"
        class="demo-tabs-style1"
        style="background: #e3e8ee;padding:10px;"
      >
        <Tabs value="name1" type="card">
          <TabPane label="关于我" name="name1">
            <h2 class="post_title">标题</h2>
            <p class="post_time">发表于2018年12月11日 14:26:08</p>
            <div class="post_content">
              <p>你好，世界！</p>
              <p>你好，世界！</p>
              <p>你好，世界！</p>
            </div>
            <DS></DS>
          </TabPane>
          <TabPane label="微博&微信" name="name2">
            <Row>
              <Col :sm="{ span:8,offset:4 }" :xs="{ span: 24, offset: 0 }">
                <WB class="jz"></WB>
              </Col>
              <Col :sm="{ span:8 }" :xs="{ span: 24 }">
                <IM class="jz"></IM>
              </Col>
            </Row>
          </TabPane>
          <!-- <TabPane label="智能机器人" name="name3">
                <AIIM class="jz"></AIIM>
          </TabPane>-->
        </Tabs>
      </Col>
    </Row>
  </div>
</template>

<script>

// @ is an alias to /src
import DS from "@/components/dashang.vue";
import IM from "@/components/IM.vue";
import WB from "@/components/WB.vue";
// import AIIM from "@/components/AIIM.vue";

export default {
  name: "about",
  components: {
    DS,
    IM,
    WB
    // AIIM
  },
  data() {
    return {};
  },
  methods: {
    
  },
  mounted() {
  }
};
</script>
<style lang="scss">
.demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content {
  margin-top: -16px;
}
.demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
  background: #fff;
  padding: 16px;
}
.demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
  border-radius: 0;
  background: #fff;
  border-left: none;
  border-right: none;
}
.demo-tabs-style1
  > .ivu-tabs.ivu-tabs-card
  > .ivu-tabs-bar
  .ivu-tabs-tab-active {
  border-top: 1px solid #3399ff;
}
.demo-tabs-style1
  > .ivu-tabs.ivu-tabs-card
  > .ivu-tabs-bar
  .ivu-tabs-tab-active:before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #3399ff;
  position: absolute;
  top: 0;
  left: 0;
}
.about {
  * {
    // border: 1px solid #ccc;
  }
}
</style>