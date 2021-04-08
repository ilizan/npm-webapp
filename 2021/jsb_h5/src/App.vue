<template>
  <div id="app">
    <div class="main">
      <router-view />
    </div>
    <div>
    <van-tabbar route v-if="$route.meta.showTab" v-model="active" active-color="#48BED0">
      <van-tabbar-item to="/home">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? require('./assets/img/menu/homeSelect.png') : require('./assets/img/menu/home.png')" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/complaintMap">
        <span>投诉维权</span>
        <template #icon="props">
          <img :src="props.active ? require('./assets/img/menu/complaintSelect.png') : require('./assets/img/menu/complaint.png')" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/user">
        <span>个人信息</span>
        <template #icon="props">
          <img :src="props.active ? require('./assets/img/menu/userSelect.png') : require('./assets/img/menu/user.png')" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "/"
    }
  },
}
</script>
<style lang="less">
#app {
  background-color: #f5f5f5;
  position: relative;
  min-height: 100vh;
  .main{
    padding-bottom: 1.33333rem;
  }
}
</style>
