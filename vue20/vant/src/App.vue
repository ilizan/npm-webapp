<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <van-button type="primary">主要按钮</van-button>
    <router-view/>


    <van-tabbar  v-model="active" route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/about" icon="search">关于</van-tabbar-item>
    </van-tabbar>


  </div>
</template>

<script>
import uuid from 'uuid'
  export default {
    data() {
      return {
        active:0,
      }
    },
    mounted() {
      console.log(uuid.v1())
      // console.log(uuid.v2())
      // console.log(uuid.v3())
      console.log(uuid.v4())
      // console.log(uuid.v5())
      
    },
  }
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
