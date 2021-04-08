<template>
  <div class="authLogin">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "AuthLogin",
  data() {
    return {
      code: "",
      msg: "授权中...",
    };
  },
  created() {
    this.code = this.$route.params.code;
    if (this.code) {
      this.authLogin();
    } else {
      this.msg = "无合法密钥";
    }
  },
  methods: {
    authLogin() {
      this.$http.auth.authLogin().then(res=>{
          console.log(res);
          let page = this.$route.params.page;
            if (page == "home") {
                this.$router.push('/home')
            }else{
                this.$router.push('/complaintForm')
            }
      })
      
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.authLogin {
    font-size: 14px;
    text-align: center;
}
</style>