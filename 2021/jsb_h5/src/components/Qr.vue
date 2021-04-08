<template>
  <div class="qr">
    <van-popup v-model="show">
      <img
        class="img"
        :src="imgObj.qrImgUrl"
      />
        <!-- @touchstart="touchstart"
        @touchend="touchend" -->
      <div class="title">劳动维权码上办</div>
    </van-popup>
    <!-- <van-action-sheet v-model="sheetShow" :actions="actions" @select="onSelect" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      
      imgObj: {
        qrImgUrl: "",
        webUrl: "",
      },
      Loop:'',
      //
      sheetShow: false,
      actions: [{ name: '识别图中的二维码' }],

    };
  },
  methods: {
    init(imgObj) {
      this.show = true;
      this.imgObj = imgObj;
    },
    // touchstart() {
    //   clearInterval(this.Loop); //再次清空定时器，防止重复注册定时器
    //   let _this = this
    //   this.Loop = setTimeout(function () {
    //     _this.sheetShow = true
    //   }, 1000);
    // },
    // touchend() {
    //   clearInterval(this.Loop);
    // },
    onSelect() {
      this.sheetShow = false;
      window.location.href=this.imgObj.webUrl;
    },
  },
};
</script>

<style lang="less" scoped>
.qr {
  .img {
    width: 240px;
  }
  .title {
    color: #fff;
    text-align: center;
    font-size: 22px;
  }
  .van-popup {
    background-color: transparent;
  }
}
</style>