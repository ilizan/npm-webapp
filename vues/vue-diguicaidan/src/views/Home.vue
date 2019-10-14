<template>
  <div>
    <el-container>
      <Header></Header>
      <el-container class="content">
        <Sidebar></Sidebar>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Sidebar
  },
  methods: {
    
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.content {
  position: fixed;
  top: 60px;
  right: 0;
  bottom: 0;
  left: 0;
}

.homePage {
  border: 1px solid #f3f3f3;
  margin: 10px;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 10px;
}

body > .el-container {
  margin-bottom: 40px;
}



.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.page_title {
  background-color: #fff;
}
</style>