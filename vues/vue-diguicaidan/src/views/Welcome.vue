<template>
  <div>
    welcome
    <el-button @click="goToUrl('/welcome/a')">跳转目录显示外路由地址</el-button>
  </div>
</template>

<script>
export default {
  name: "welcome",
  methods: {
    goToUrl(itemTag) {
      console.log(itemTag)
      this.$router.push(itemTag);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>