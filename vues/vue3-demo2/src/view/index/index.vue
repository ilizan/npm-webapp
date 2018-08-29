<template>
	<section class="index">
		<el-row>
            <el-col :span="24">
                <h1>介绍</h1>
                <p>
                基于vue cli 3.0搭建，集成router element axios。
                </p>
                <p class="tag_all">
                    <el-tag v-for="item in tagList">{{item}}{{父子组件}}</el-tag>
                </p>
            </el-col>
        </el-row>
	</section>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      tagList: []
    };
  },
  methods: {
    getListFn() {
      this.tagList = ["父子组件", "ajax请求", "表单", "在线编辑器"];
    }
  },
  mounted() {
    this.getListFn();
  }
};
</script>

<style scoped>
.index {
  /* background-image:url('./../../assets/images/bg.jpg') */
}
.tag_all * {
  margin: 0px 5px;
}
</style>