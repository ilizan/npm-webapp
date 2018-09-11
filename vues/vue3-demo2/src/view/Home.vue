<template>
  <div id="home">
    <el-scrollbar style="height:800px;overflow:hidden;" class="page__scroll">
      <Header v-on:isCollapse = "isCollapseFn"></Header>
      <el-container>
        <el-container>
          <Sidebar :isCollapse = "isCollapse"></Sidebar>
          <el-main class="el-main">
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
    </el-scrollbar>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/view/common/Header.vue'
import Sidebar from '@/view/common/Sidebar.vue'
export default {
  name: "home",
  components: {
    Sidebar,Header
  },
  data() {
    return {
      isCollapse: false,
      
    };
  },
  methods: {
    isCollapseFn: function(isCollapse){
      this.isCollapse = isCollapse;
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

.aside{
}


main.el-main{
  padding:5px;
}
</style>
