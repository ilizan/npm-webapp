<template>
  <div class="index">
    vue.js
    <div v-bind:title="msg">鼠标悬停两秒显示:</div>
    <ul>
      <li v-for="l in list">
        {{l.id}}-----{{l.name}}
      </li>
    </ul>
    <div class="con">
      <ol start="5" class="ols">
        <li>文字</li>
        <li>文字</li>
      </ol>
    </div>
    <div>{{adddate}}</div>
    <div v-if="seen">v-if控件</div>
    <div>clickBtn</div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '页面加载于'+new Date().toLocaleDateString()+new Date().toLocaleTimeString(),
      list:[
        {id:1,name:'a1'},
        {id:2,name:'a2'},
      ],
      adddate:new Date().toLocaleDateString()+new Date().toLocaleTimeString(),
      seen:true
    }
  },
  methods:{
    function(){
      console.log("function");
    },
    add:function(){
      console.log("saclick");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body *{
}
.con{
  width: 500px;
  margin: 0 auto;
}
ul,ol{
  margin: 0;
  padding: 0;
}
.ols{
  padding: 0;
}
</style>
