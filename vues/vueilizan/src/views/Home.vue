<template>
  <div class="home">
    <Row>
        <Col :sm="{ span: 24, offset: 0 }" :xs="{ span: 24, offset: 0 }">
          <Carousel v-model="value1" loop class="ca" arrow="always">
              <CarouselItem>
                  <div class="demo-carousel">
                    <img src="../assets/banner3.jpg" alt="">
                  </div>
              </CarouselItem>
              <!-- <CarouselItem>
                  <div class="demo-carousel">
                    <img src="../assets/banner1.jpg" alt="">
                  </div>
              </CarouselItem>
              <CarouselItem>
                  <div class="demo-carousel">
                    <img src="../assets/banner2.jpg" alt="">
                  </div>
              </CarouselItem> -->
          </Carousel>
        </Col>
        <Col :sm="{ span: 6, offset: 9 }" :xs="{ span: 24, offset: 0 }" style="margin-top:20px;">
          <Card dis-hover>
            <p slot="title">标题</p>
            <p>首页正在制作中，更多内容请移步<a href="https://ilizan.github.io/blog/" target="_blank">Blog</a>。</p>
          </Card>
        </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      value1: 0
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style>
/* .demo-carousel{
  height:300px;
  border:1px solid #ccc;
} */
.ca {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.demo-carousel {
  background-color: #fff;
}
.ca img {
  width: 100%;
}
img {
  display: block;
}
.time{
    font-size: 14px;
    font-weight: bold;
}
.content{
    padding-left: 5px;
}
</style>