<template>
  <!-- <div>
    login
    <el-button @click="login()">登录</el-button>
  </div>-->
  <div class="login">
    <el-form :model="loginForm" :rules="fieldRules" ref="loginForm" label-width="80px">
      <el-form-item label="登录名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('loginForm')">登录</el-button>
        <el-button @click="reset()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "admin",
        captcha: ""
      },
      fieldRules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    // login() {
    //   localStorage.setItem("userId", "1");
    //   this.$api.menu.menu({ roleId: 1 }).then(res => {
    //     localStorage.setItem("menuTree", JSON.stringify(res));
    //     this.$router.push("/");
    //   });
    // },
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (
            this.loginForm.username != "admin" ||
            this.loginForm.password != "admin"
          ) {
            this.$message({
              message: "登录失败",
              type: "error"
            });
            return;
          }
          var loginData = {
            account: this.loginForm.username,
            password: this.loginForm.password,
            captcha: ""
          };
          this.$api.menu.menu(loginData)
            .then(res => {
              console.log("登录成功");
              localStorage.setItem("userId", "1");
              localStorage.setItem("menuTree", JSON.stringify(res)); // 保存用户到本地会话
              this.$router.push("/");
            })
            .catch(res => {
              console.log(res);
              this.$message({
                message: "登录失败",
                type: "error"
              });
            });
        } else {
        }
      });
    },
    reset() {
      //   this.$refs.loginForm.resetFields()
      this.loginForm = {
        username: "",
        password: "",
        captcha: ""
      };
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.login {
  border-radius: 5px;
  margin: 100px auto;
  width: 350px;
  padding: 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
</style>