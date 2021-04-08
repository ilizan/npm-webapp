<template>
  <div class="home">
    <van-grid :gutter="10" :column-num="2">
      <van-grid-item class="tag" to="/project">
        <van-image width="60" round :src="require('@/assets/img/img1.png')" />
        <p class="title">项目信息</p>
      </van-grid-item>
      <van-grid-item class="tag" to="/jobs">
        <van-image width="60" round :src="require('@/assets/img/img2.png')" />
        <p class="title">务工经历</p>
      </van-grid-item>
      <van-grid-item class="tag" to="/attendance">
        <van-image width="60" round :src="require('@/assets/img/img3.png')" />
        <p class="title">考勤信息</p>
      </van-grid-item>
      <van-grid-item class="tag" to="/wages">
        <van-image width="60" round :src="require('@/assets/img/img4.png')" />
        <p class="title">工资信息</p>
      </van-grid-item>
    </van-grid>
    <br>
    <router-link to="/complaintForm">拖欠农民工工资线索反映(调试入口，后期或从小程序直接跳转到该表单地址)</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style lang="less">
.home {
  font-size: 20px;
  padding-top: 10px;
  .van-grid-item__content{
    border-radius: 10px;
    overflow: hidden;
  p{
    font-size: 15px;
    color: #8F8F8F;
    margin-top: 5px;
  }
  }
}
</style>