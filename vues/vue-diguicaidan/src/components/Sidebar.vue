<template>
  <div class="aside">
    <el-aside class="leftAside" width="190px">
      <el-menu
        class="el-menu-vertical-demo"
        :default-active="$route.meta.index+''"
        :collapse="isCollapse"
        background-color="#3a404e"
        text-color="#fff"
        active-text-color="#48a3da"
      >
      <router-link to="/welcome">
        <el-menu-item index="welcome">
          <i class="el-icon-setting"></i>
          <span slot="title">系统首页</span>
        </el-menu-item>
      </router-link>
        <side-Meuns :routes="getRoutes"></side-Meuns>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
//左侧菜单组件
import sideMeuns from "@/components/sideMeuns";
export default {
  computed: {
    getRoutes() {
      return JSON.parse(localStorage.getItem("menuTree"));
    }
  },
  components: {
    sideMeuns
  },
  data() {
    return {
      isCollapse: false
    };
  },
  mounted () {
  }
};
</script>

<style lang="scss" scoped>
.aside {
  background-color: #3a404e;
}
.leftAside {
  color: #333;
  overflow: hidden;
}
.el-menu {
  border-right: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 190px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}


</style>