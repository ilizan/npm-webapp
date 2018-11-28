<template>
    <div class="wb">
      <!-- {{wbData}}
      <div class="top">
        <img class="logo" :src="wbData.user.profile_image_url">
        <h3 class="title">{{wbData.user.screen_name}}</h3>
      </div>
      <div class="main">
        <Col :sm="{ span: 24, offset: 0 }">
        ss
        </Col>
      </div> -->
      <iframe width="100%" height="750" class="share_self"  frameborder="0" scrolling="no" src="https://widget.weibo.com/weiboshow/index.php?language=&width=0&height=750&fansRow=1&ptype=1&speed=0&skin=5&isTitle=0&noborder=0&isWeibo=1&isFans=0&uid=5170498828&verifier=2b0b6175&dpc=1"></iframe>
    </div>
</template>

<script>
export default {
  name: "wb",
  data: function() {
    return {
      wbData:{}
    };
  },
  props: {},
  methods: {
    getWeibo() {
      let _this = this;
      this.axios
        .get(this.HOST + "?url=http://m.weibo.cn/profile/info?uid=5170498828")
        .then(function(response) {
          let res = response.data;
          if(res.ok==1){
            _this.wbData = res.data;
            alert(_this.wbData)
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    // this.getWeibo(); //请求微博首页数据
  }
};
</script>
<style lang="scss">
.wb{
  .top{
    text-align: center;
    .logo{
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin: 0 auto;
    }
    .title{
      font-size: 16px;
      line-height: 30px;
      font-weight:inherit
    }
  }
  .main{

  }
}
</style>