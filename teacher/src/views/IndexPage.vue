<template>
  <el-row class="index">
      <el-col :span="24" class="header">
        <el-col :span="20" class="logo">
          <!-- <img src="../assets/Indexheader1.png" /> -->
          小马达老师系统
        </el-col>
        <el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item @click.native="editUserVisible = true">基本信息</el-dropdown-item>
						<el-dropdown-item @click.native="editPasswordVisible = true">修改密码</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
      </el-col>
      <el-col :span="24">
        <div class="main">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </el-col>
      <el-dialog title="个人基本信息" :visible.sync="editUserVisible" :close-on-click-modal="false">
        <el-form label-width="80px">
          <el-form-item label="登录名">
            
          </el-form-item>
          <el-form-item label="昵称">
            
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="editUserVisible = false">关闭</el-button>
        </div>
      </el-dialog>
      <el-dialog width="40%" title="修改密码" :visible.sync="editPasswordVisible" :close-on-click-modal="false">
        <el-form label-width="100px">
          <el-form-item label="登录名">
            
          </el-form-item>
          <el-form-item label="原密码" prop="pass">
            <el-input type="password" id="oldPassword"></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input type="password" id="newPassword"></el-input>
          </el-form-item>
          <el-form-item label="重复新密码">
            <el-input type="password" id="newPassword2"></el-input>
          </el-form-item>
          
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="editPasswordVisible = false">关闭</el-button>
        </div>
      </el-dialog>
      <el-footer></el-footer>
  </el-row>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      sysUserName: "",
      sysUserAvatar: "",
      activeIndex: "0",
      userInfo: sessionStorage.getItem("user"),

      editUserVisible:false,//个人基本信息
      editPasswordVisible:false,//修改密码
      formInline: {
        users: "", //已选用户
        type: "", //发送类型:1站内信;2短信
        mould: "" //模板id
      },
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if (key == "1") {
        //跳转登录页
        this.$router.push({ path: "/login" });
      }
    },
    //退出登录
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        //type: 'warning'
      })
        .then(() => {
          sessionStorage.removeItem("user");
          _this.$router.push("/login");
        })
        .catch(() => {});
    }
  },
  mounted() {
    var user = sessionStorage.getItem("user");
    //判断是否已登录
    if (user) {
      user = JSON.parse(user);
      this.sysUserName = user.name || "";
      this.sysUserAvatar = user.avatar || "";
      if(this.$route.path == "/"){//获取路由
        this.$router.push({ path: "/tvindex" }); //跳转直播页面
      }
    } else {
      this.$router.push({ path: "/login" }); //跳转登录页
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.index {
  .header {
    height: 62px;
    line-height: 62px;
    background: #3567D4;
    color: #fff;
    .userinfo {
      text-align: right;
      padding-right: 35px;
      float: right;
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
        img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin: 10px 0px 10px 10px;
          float: right;
        }
      }
    }
    .logo {
      //width:230px;
      height: 60px;
      font-size: 22px;
      padding-left: 20px;
      padding-right: 20px;
      border-color: rgba(238, 241, 146, 0.3);
      border-right-width: 1px;
      border-right-style: solid;
    }
    .logo-width {
      width: 230px;
    }
    .logo-collapse-width {
      width: 60px;
    }
    // .title{
    //   text-align: center;
    //   font-size: 25px;
    // }
    .tools {
      padding: 0px 23px;
      width: 14px;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
    }
  }
  .main{
    width: 1000px;
    margin: 10px auto;
    min-height: 500px;
    overflow: hidden;
    border: 1px solid #409EFF;
  }
}
</style>
