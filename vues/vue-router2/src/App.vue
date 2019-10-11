<template>
  <div id="app" v-if="$route.params.menu == 'a'">
    <el-row>
    <el-col :span="24" class="a_topBg">
      <el-col :span="4" class="logo">
        后台管理系统
      </el-col>
      <el-col :span="7" :offset="13">
        <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><a href="/" target="_blank">前台首页</a></el-menu-item>
        </el-menu>
      </el-col>
    </el-col>
    <div class="conall">
    <el-col :span="4" class="menuleft">
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item index="1-1"><a href="#/a/userlist">用户列表</a></el-menu-item>
            <el-menu-item index="1-2"><a href="#/a/articlelist">文章列表</a></el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
    <el-col :span="20" class="content">
      <router-view></router-view>
    </el-col>
    </div>
    </el-row>
  </div>
  <div id="app2" v-else>
    前台首页
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  height: 100%;
}
html,#app,#app > div{
  height: 100%;
}
a{
  color:#1f3e63;
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.a_topBg{
  background-color: #324157;
  position: absolute;
  width:100%;
  height: 60px;
  top:0;
}
.logo{
  height: 60px;
  line-height: 60px;
  color: #FFF;
  font-size: 22px;
}
.content{
  padding: 10px;
}
.lefttag{
  text-align: left;
}
.lefttag button{
  margin-right: 10px;
}
.menuleft{
  height: 100%;
  position: relative;
  float:left;
}
.conall{
  height: 100%;
  padding-top: 60px;
}
</style>
