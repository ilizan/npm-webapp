<template>
  <div>
    <el-header class="header">
      <div class="title">山东省农民工工资支付监管平台</div>
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
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
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
    console.log("header加载");
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
</style>