<template>
  <div id="app">
    <Row>
      <Col :sm="{ span: 18, offset: 3 }" :xs="{ span: 24, offset: 0 }">
        <Menu mode="horizontal" active-name="1">
          <MenuItem name="1" to="/">首页</MenuItem>
          <MenuItem name="2" to="about">关于</MenuItem>
          <MenuItem name="3" to="box">箱子</MenuItem>
          <MenuItem name="4" to="link">链接</MenuItem>
          <MenuItem name="5" @click.native="modal1 = true" class="zcw">支持</MenuItem>
        </Menu>
      </Col>
    </Row>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

    <Modal v-model="modal1" title="支持我">
      <DS titleFlag="1"></DS>
    </Modal>
    <!-- <div class="cuBox">
        top
    </div>-->
    <BackTop :height="100" :bottom="20" :right="10" style="width:100px;text-align: center;"></BackTop>
  </div>
</template>
<script>
import DS from "@/components/dashang.vue";

export default {
  components: {
    DS
  },
  data() {
    return {
      modal1: false
    };
  },
  mounted: function() {},
  methods: {}
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item.zcw {
  color: red;
}
ul.ivu-menu-horizontal.ivu-menu-light:after{
  height: 0;
}

// .cuBox{
//     border:1px solid red;
//     width: 100px;
//     height: 100px;
//     position: fixed;
//     bottom: 70px;
//     right: 10px;
// }
</style>
