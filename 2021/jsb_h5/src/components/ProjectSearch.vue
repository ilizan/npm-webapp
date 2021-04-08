<template>
  <div class="projectSearch">
    <van-popup
      round
      v-model="show"
      position="bottom"
    >
      <van-picker
        show-toolbar
        :columns="projectList"
        value-key="projectName"
        @cancel="show = false"
        @confirm="onConfirm"
        visible-item-count="4"
        :default-index="0"
      >
        <template #cancel>
            关闭
        </template>
        <template #title>
          <p class="title">您输入的可能是以下项目</p>
        </template>
        <template #columns-top>
          <div class="tag">(没有则关闭)</div>
        </template>
      </van-picker>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "ProjectSearch",
  data() {
    return {
      show: false,
      projectList: [],
    };
  },
  methods: {
    init(projectName){
        this.$http.complaint.getProjectList({ projectName }).then((res) => {
          if(res.length >0){
            this.projectList = res
            this.show = true;
          }
        });
      this.show = true
    },
    onConfirm(value) {
      this.$emit("say",value)
      this.show = false
    },
  },
  mounted() {
    
  },
};
</script>

<style lang="less" scoped>
.projectSearch {
  .title {
    font-size: 18px;
    text-align: center;
  }
  .tag{
    font-size: 14px;
    text-align: center;
    color:#4967b7
  }
}
</style>