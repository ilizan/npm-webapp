<template>
  <div>
    <div class="swiper-container" id="swiperMain">
      <div class="swiper-wrapper" id="swiperCont">
          <!-- <div class="swiper-slide">
              <ul class="rows1">
                  <li>山东省济南市</li>
                  <li>项目名称11111</li>
                  <li>时间xxxxxx</li>
              </ul>
          </div> -->
          
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
let option = {
  init: true,
  initialSlide: 0,
  observer: true, //修改swiper自己或子元素时，自动初始化swiper
  observeParents: false, //修改swiper的父元素时，自动初始化swiper
  direction: "vertical", // 垂直切换选项
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true, //在loop模式下，为group填充空白slide
  slidesPerView: 6,
  slidesPerGroup: 6, //分组
  speed: 1500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, //false: 触碰后不会停止自动切换
  },
  on: {
    beforeDestroy: function () {
      //   alert('你销毁了Swiper;');
      setData();
    },
  },
};
let dataList = []
let setData = function () {
  let html = "";
  for (let index = 0; index < dataList.length; index++) {
    html += `<div class="swiper-slide">
        <ul class="rows1">
                  <li>山东省济南市</li>
                  <li>项目名称11111</li>
                  <li>时间xxxxxx</li>
              </ul>
    </div>`;
  }
  document.getElementById("swiperCont").innerHTML = html;
  setTimeout(() => {
    mySwiper = new Swiper(".swiper-container", option)
      document.getElementById("swiperMain").style.display = "block";
  }, 500);
};
var mySwiper = "";
export default {
  methods: {
    init() {
      mySwiper = new Swiper(".swiper-container", option);
    },
    setSwiperData(arr) {
      dataList = arr;
      document.getElementById("swiperMain").style.display = "none";
    //   document.getElementById("swiperCont").innerHTML = "<div class='swiper-slide'></div>"//初始化
      mySwiper.destroy(false, false);
      
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 240px;
  overflow: hidden;
}
.swiper-slide:nth-of-type(odd){

}
.swiper-slide:nth-of-type(even){
    background-color: #18497A;
}
/deep/.rows1{
    overflow: hidden;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    color: #BEDEFF;
    li{
        width: 33%;
        float: left;
    }
}
</style>