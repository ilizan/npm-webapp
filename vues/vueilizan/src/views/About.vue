<template>
  <div class="about">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <buttoCounter msg="2"></buttoCounter>
    <buttoCounter msg="5"></buttoCounter>
    <Button type="primary">Primary</Button> -->
    <Row>
        <Col :sm="{ span: 18, offset: 3 }" :xs="{ span: 24, offset: 0 }">
          <h2 class="page_title">关于</h2>
        </Col>
        <Col :sm="{ span: 18, offset: 3 }" :xs="{ span: 24, offset: 0 }">
          <Tabs value="name1" type="card">
              <TabPane label="微博" name="name1">
                <WB class="jz"></WB>
              </TabPane>
              <TabPane label="微信" name="name2">
                <IM class="jz"></IM>
              </TabPane>
              <!-- <TabPane label="智能机器人" name="name3">
                <AIIM class="jz"></AIIM>
              </TabPane> -->
              
          </Tabs>
        </Col>

    </Row>
  </div>
</template>

<script>
// @ is an alias to /src
import IM from "@/components/IM.vue";
import WB from "@/components/WB.vue";
// import AIIM from "@/components/AIIM.vue";

export default {
  name: "about",
  components: {
    IM,
    WB,
    // AIIM
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="scss">
.about {
  * {
    // border: 1px solid #ccc;
  }
  .jz {
    margin: 0 auto;
  }
}
</style>