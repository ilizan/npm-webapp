<template>
  <div>
    login
    <el-button @click="login()">登录</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      localStorage.setItem("userId", "1");
      this.$api.menu.menu({ 'roleId': 1 }).then(res => {
          localStorage.setItem('menuTree', JSON.stringify(res));
          this.$router.push("/");
      });
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>