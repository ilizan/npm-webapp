<template>
  <div>
    welcome
    <el-button @click="goToUrl('/welcome/a')">跳转目录显示外路由地址</el-button>
    <el-button @click="goToUrl('/perms/1213')">跳转参数路由地址</el-button>
    
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "welcome",
  methods: {
    goToUrl(itemTag) {
      this.$router.push(itemTag);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>