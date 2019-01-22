<template>
  <div class="home">
    <Row>
        <Col :sm="{ span: 18, offset: 3 }" :xs="{ span: 24, offset: 0 }">
          <Carousel v-model="value1" loop class="ca" arrow="always">
              <CarouselItem>
                  <div class="demo-carousel">
                    <img src="../assets/banner3.jpg" alt="">
                  </div>
              </CarouselItem>
              <CarouselItem>
                  <div class="demo-carousel">
                    <img src="../assets/banner1.jpg" alt="">
                  </div>
              </CarouselItem>
              <CarouselItem>
                  <div class="demo-carousel">
                    <img src="../assets/banner2.jpg" alt="">
                  </div>
              </CarouselItem>
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
.demo-carousel{
  height:auto;
}
.demo-carousel img{
  width:100%;
}
body *{
  /* border:1px solid red; */
}
.ca {
  width: 100%;
  margin: 10px auto;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  -webkit-transition: all ease-in-out .5s;
	transition: all ease-in-out .5s;
}
.ca:hover {
  box-shadow: 0 0 10px rgba(0,0,0,.28);
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