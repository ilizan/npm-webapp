<template>
  <div>
    <el-container>
      <el-header class="header">
        <div class="title">xxx平台</div>
        <span>欢迎您，xxxx。</span>
        <el-dropdown>
          <span style="line-height:60px; color:#FFF;">
            设置
            <i class="el-icon-setting" style="margin-right: 15px"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>
              <div @click="logout()">退出</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container class="content">
        <el-aside width="260px;">
          <!-- 遍历路由，生成做成菜单 -->
          <el-menu
            class="el-menu-vertical-demo"
            :default-active="defaultActive"
            :collapse="isCollapse"
          >
            <!-- 菜单组件 -->
            <side-Meuns :routes="getRoutes"></side-Meuns>
          </el-menu>
        </el-aside>
        <el-main>
          <!-- <div class="page_title">
            {{$route.name}}
          </div>-->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
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
  data() {
    return {
      isCollapse: false,
      defaultActive: ""
    };
  },
  components: {
    sideMeuns
  },
  methods: {
    logout() {
      this.$confirm("确定退出吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        localStorage.removeItem("userId");
        this.$router.push("/login");
      });
    }
  },
  mounted() {
    this.defaultActive = this.$route.meta.index + "";
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #48a3da;
  color: #fff;
}
.header {
  position: fixed;
  width: 100%;
  height: 60px;
  text-align: right;
}
.title {
  float: left;
  line-height: 60px;
  font-size: 24px;
  font-weight: 200;
}
.content {
  position: fixed;
  top: 60px;
  right: 0;
  bottom: 0;
  left: 0;
}
.el-aside {
  background-color: #fff;
  color: #333;
}
.homePage {
  border: 1px solid #f3f3f3;
  margin: 10px;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
}
.el-menu {
  border-right: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 260px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 10px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.page_title {
  background-color: #fff;
}
</style>