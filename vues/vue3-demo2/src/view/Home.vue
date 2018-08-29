<template>
  <div id="home">
    <!-- <div>
      <p>
        home
      </p>
      <el-button>el-button</el-button>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <router-view/>
    </div> -->
    <el-container>
      <el-header class="header">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <el-switch v-model="isCollapse"></el-switch>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">username 我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">退出</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside class="aside" style="width:auto;">
          
          <el-menu default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
            router
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <template v-if="item.isHide!=true" v-for="(item,index) in $router.options.routes">
              <el-submenu :index="index+''">
                <template slot="title">
                  <i :class="item.class"></i>
                  <span slot="title">{{item.name}}</span>
                </template>
                <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" @click="$router.push(child.path)">{{child.name}}</el-menu-item>
              </el-submenu>
            </template>
            
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      isCollapse: false,
      activeIndex2: '2'
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  mounted() {
    var user = sessionStorage.getItem("user");
    //判断是否已登录
    if (user) {
    }else {
      this.$router.push({ path: "/login" }); //跳转登录页
    }
  }
};
</script>

<style>
.header{
  background-color: #545c64;
}
.aside{
}
.el-menu-demo{
  float: right;
  height:59px;
}
.el-menu-vertical-demo.el-menu{
  min-height: 800px;
  border-right:1px solid #ebebeb;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 800px;
  border-right:1px solid #ebebeb;
}
</style>
