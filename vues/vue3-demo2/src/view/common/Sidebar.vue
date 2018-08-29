<template>
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
</template>

<script>
export default {
  name: "v-sidebar",
  props: {
    isCollapse: Boolean
  },
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
        },
        
	},
	mounted() {
    
  }
};
</script>

<style scoped>
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