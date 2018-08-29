<template>
  <div class="hello">
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      
      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
  </div>
    
  </div>
</template>

<script>
import Swiper from "swiper";
import 'swiper/dist/css/swiper.css';
export default {
  name: "SwiperPage",
  props: {},
  methods: {},
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true //可选选项，自动滑动
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-container {
  width: 500px;
  height: 300px;
  margin: 20px auto;
  border: 1px solid #ccc;
}
</style>
