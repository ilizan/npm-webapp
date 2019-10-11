<template>
    <div class="aiim">
        智能机器人
    </div>
</template>

<script>
export default {
  name: "aiim",
  data: function() {//
    return {};
  },
  props: {},
  methods: {//方法
    getWeibo() {
      let _this = this;
      this.axios.post("http://openapi.tuling123.com/openapi/api/v2", {
        reqType: 0,
        perception: {
          inputText: {
            text: "附近的酒店"
          }
        },
        userInfo: {
          apiKey: "e395563eb1d644bcb0f0a0d6d8c98dcd",
          userId: "demo"
        }
      })
        .then(function(response) {
          console.log(JSON.stringify(response));
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getWeibo(); //请求微博首页数据
  }
};
</script>