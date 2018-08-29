<template>
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
            <el-switch v-model="isCollapse" @change="collapseClick()"></el-switch>
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
</template>

<script>
export default {
  name: "v-header",
	data(){
		return {
            isCollapse : false,
            activeIndex2: '2'
		}
	},
	methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        collapseClick () {
            this.$emit('isCollapse', this.isCollapse)
        }
	},
	mounted() {
        this.iscollapse = false;
    }
};
</script>

<style scoped>
.header{
  background-color: #545c64;
}
.el-menu-demo{
  float: right;
  height:59px;
}
</style>