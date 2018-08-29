<template>
	<section>
		axios ajax(见控制台)
	</section>
</template>

<script>
import { getFn,postFn } from "../../api/api";
export default {
  name: "ajax",
	data(){
		return {

		}
	},
	methods: {
getdemo() {
      //获取当前登录教师直播信息
      let para = {
        userid: 1111
      };
      getFn(para).then(res => {
        this.tvInfo = res.data;
      });
    },
    postdemo() {
      var loginParams = {
        username: "name",
        password: "123456"
      };
      postFn(loginParams).then(data => {});
    }
	},
	mounted() {
    this.getdemo();
    this.postdemo();
  }
};
</script>

<style scoped>
</style>