<template>
  <div class="realname">
    <div class="countpeople">
      <p class="name">实名制总人数（人）</p>
      <p class="count">2640387</p>
    </div>
    <div class="realtime">
      <h2 class="title">实时在场人数（人）</h2>
      <div class="count">
        <span v-for="(item, index) of 2121212 + ''" :key="index">
          {{ item }}
        </span>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.realname {
  .countpeople {
    width: 222px;
    height: 80px;
    background-image: url("./../../../assets/images/leftbox.png");
    margin: 30px auto 0;

    p.name {
      color: #5bdbf6;
      line-height: 35px;
      font-size: 18px;
      padding-left: 20px;
    }
    p.count {
      color: #00faa8;
      line-height: 45px;
      font-size: 28px;
      text-align: right;
      padding-right: 15px;
    }
  }
  .realtime {
    width: 430px;
    margin: 40px auto 0;
    h2.title {
      color: #5bdbf6;
      line-height: 35px;
      font-weight: 300;
      font-size: 20px;
    }
    .count {
      text-align: right;
      span {
        display: inline-block;
        text-align: center;
        font-weight: 800;
        font-size: 60px;
        color: #b4e4ff;
        padding-right: 0px;
        width: 42px;
        height: 62px;
        line-height: 62px;
        background-image: url("./../../../assets/images/gfhnn.png");
        background-position-x: right;
        margin: 10px 8px 0;
      }
    }
  }
}
</style>