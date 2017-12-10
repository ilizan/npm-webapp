<template>
  <div class="hello">
    {{msg}}
    <div class="page-swipe">
    <mt-swipe :auto="40000" :show-indicators="true">
      <mt-swipe-item v-for="l in list" :key="l.id">
        {{l.name}}
      </mt-swipe-item>
      <mt-swipe-item>轮播图2</mt-swipe-item>
      <mt-swipe-item>轮播图3</mt-swipe-item>
    </mt-swipe>
    <ul>
      <li v-for="l in list">
        {{l.id}}-----{{l.name}}
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
// import 'mint-ui/lib/swipe/style.css'

export default {
  name: 'index',
  data () {
    return {
      msg: '',
      list: [
        {id: 1, name: 'a1'},
        {id: 2, name: 'a2'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body * {
  border: 1px solid red;
}
.mint-swipe {
  height: 200px;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
.page-swipe .mint-swipe img{
  width: 100%;
}
</style>
