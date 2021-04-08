<template>
  <div>
    <div class="pageMain">
      <van-cell-group class="contentBox">
        <van-cell>
          <template #title>
            <div class="mid">
              <img src="https://img01.yzcdn.cn/vant/cat.jpeg" alt="">
              白沐风
            </div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="pageMain">
      <van-cell-group class="contentBox">
        <van-cell title="身份证号" value="xxx" />
        <van-cell title="性别" value="xxx" />
        <van-cell title="民族" value="xxxx" />
        <van-cell title="生日" value="xxxx" />
        <van-cell title="学历" value="xxxx" />
        <van-cell title="婚姻状况" value="xxxx" />
        <van-cell title="政治面貌" value="xxxx" />
        <van-cell title="工种" value="xxxx" />
        <van-cell title="证书" value="xxxx" />
        <van-cell title="社保号" value="xxxx" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
};
</script>

<style lang="less" scoped>
.mid img{
    height: 90px;
    width: 80px;
    vertical-align: middle;
}
</style>