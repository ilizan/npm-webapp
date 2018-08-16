<template>
  <div class="hello">
    <swiper :options="swiperOption" ref="mySwiper" v-if="bannerlist.length">
      <swiper-slide v-for="banner in bannerlist" :key="banner.id">
        <img :src="banner.pic_url" @click='bannerClick(banner.id)'>
      </swiper-slide>
        <!-- 如果需要分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
      
    </swiper>
    <ul v-show="true">
      <li v-for="l in bannerlist" :key="l.id">
        {{l.id}}-----{{l.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
// require("swiper/dist/css/swiper.css");
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        loop: false,
        pagination: ".swiper-pagination",
        slidesPerView: "auto",
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        onSlideChangeEnd: swiper => {
          //这个位置放swiper的回调方法
          this.page = swiper.realIndex + 1;
          this.index = swiper.realIndex;
        }
      },
      // computed: {
      //   swiper() {
      //     return this.$refs.mySwiper.swiper;
      //   }
      // },
      msg: "",
      bannerlist: [],
      list1: [],
      list2: []
    };
  },
  // mounted() {
  //   console.log("mounted");
  //   //
  // },
  mounted: function() {
    console.log("mounted");
    this.getCustomers();
    // this.swiper.slideTo(0, 0, false);
  },
  methods: {
    getCustomers: function() {
      console.log("getCustomers");
      // this.$http.get(
      //   'http://192.168.0.170:15000/yc-crm/teach/material/search?order=asc&offset=0&limit=5&param=%7B%22name%22%3A%22%22%2C%22subject%22%3A%220%22%2C%22year%22%3A%220%22%2C%22creator%22%3A%22%22%2C%22type%22%3A%22-1%22%2C%22stars%22%3A%22%22%2C%22plat%22%3A%220%22%7D&_=1512962475275',
      //   {
      //     'sd': '2'
      //   }
      // ).then((response) => {
      //   // console.log(response);
      //   // bannerlist = response.body.rows
      //   this.bannerlist = response.body
      // }, (response) => {
      //   // 响应错误回调
      //   // console.log('请求banner接口错误');
      // })
      this.bannerlist = [
        {
          id: 1,
          name: "name1",
          pic_url:
            "https://img.qlchat.com/qlLive/slideImg/81NWKTTY-U5X2-PVXE-1513082959865-IYRV3UDZ1VB4.jpg"
        },
        {
          id: 2,
          name: "name2",
          pic_url:
            "https://img.qlchat.com/qlLive/slideImg/6OPKPMYK-TZDH-DF5H-1513082975746-73SXI9T6T1GU.jpg"
        }
      ];
    },
    bannerClick: function(id) {
      console.log(id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body * {
  /* border: 1px solid red; */
}
.swiper-slide img {
  width: 100%;
}
</style>



