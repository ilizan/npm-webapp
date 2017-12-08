<template>
  <div class="hello">
    {{msg}}
    <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        轮播图1
      </mt-swipe-item>
      <mt-swipe-item>轮播图2</mt-swipe-item>
      <mt-swipe-item>轮播图3</mt-swipe-item>
    </mt-swipe>
    </div>
  </div>
</template>

<script>
// import 'mint-ui/lib/swipe/style.css'

export default {
  name: 'index',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body * {
  border: 1px solid red;
}
.mint-swipe{
    min-height: 200px;
}
.mint-swipe img{
    width: 100%;
}
.mint-swipe-item{
    /* color:white; */
}
</style>
