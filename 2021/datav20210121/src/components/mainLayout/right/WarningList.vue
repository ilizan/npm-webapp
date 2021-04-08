<template>
  <div class="warningList">
    <div class="tabs">
      <div
        class="tabTitle"
        v-bind:class="{ active: activeIndex == 1 }"
        @click="setListData(1)"
      >
        未处理
      </div>
      <div
        class="tabTitle"
        v-bind:class="{ active: activeIndex == 2 }"
        @click="setListData(2)"
      >
        处理中
      </div>
      <div
        class="tabTitle"
        v-bind:class="{ active: activeIndex == 3 }"
        @click="setListData(3)"
      >
        已处理
      </div>
      <div
        class="tabTitle"
        v-bind:class="{ active: activeIndex == 4 }"
        @click="setListData(4)"
      >
        处理完结
      </div>
      <div
        class="tabTitle"
        v-bind:class="{ active: activeIndex == 5 }"
        @click="setListData(5)"
      >
        超期未处理
      </div>
    </div>
    <div class="main">
      <ul class="w_title">
        <li>区域</li>
        <li>项目名称</li>
        <li>预警时间</li>
      </ul>
      <Swipers ref="swipers"></Swipers>
    </div>
  </div>
</template>

<script>
import Swipers from './Swiper';
export default {
  data() {
    return {
      activeIndex: 1,
      arr:[]
    };
  },
  components: {
    Swipers,
  },
  methods: {
    setListData(i){
      this.activeIndex = i;
      // let arr = [1,2,33,4,55,666,77,88,999,10]
      let arr = [1,2,33]
      this.$refs.swipers.setSwiperData(arr)
    }
  },
  mounted () {
    let arr = [1,2,33,54456,234342,242425,124567]
      // this.$refs.swipers.setSwiperData(arr)
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 240px;
}
.line {
  line-height: 30px;
  color: #aacaed;
  font-size: 14px;
}
.line:nth-of-type(odd) {
}
.line:nth-of-type(even) {
  background-color: #18497a;
}
.w_title {
  overflow: hidden;
  background-color: #18497b;
  color: #02d9fd;
  line-height: 35px;
  font-size: 14px;
  margin: 10px 0 0;
  li {
    width: 33%;
    float: left;
    text-align: center;
  }
}
.w_info {
  overflow: hidden;
  li {
    width: 33%;
    float: left;
    text-align: center;
  }
}
</style>