<template>
  <div id="app">
    <!-- <div class="top">
      <h2 class="title">
        敏数信息
      </h2>
      <div class="pageTag">
        <ul>
          <li><a href="#">首页</a></li>
          
        </ul>
      </div>
    </div> -->
    <!-- <h2>vue.js</h2> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body,h2{
  margin: 0;
  padding: 0;
}
body,h2{
  font-weight: 200;
}
ul,li{
  margin: 0;
  padding: 0;
}
a{
  color:#1f3e63;
  text-decoration: none;
}
.top{
  height: 250px;
  /* background:#41C1BF none no-repeat scroll center top / cover; */
  background:#41C1BF; /* 一些不支持背景渐变的浏览器 */  
  background:-moz-linear-gradient(top, #41C1BF,#FFF);  
  background:-webkit-gradient(linear, 0 0, 0 bottom, from(#41C1BF), to(#FFF));  
  background:-o-linear-gradient(top,#41C1BF, #FFF); 
  /* background: url('http://ww4.sinaimg.cn/large/9b9ae07ftw1etn48oa6mvj238725hhdw.jpg'); */
  padding-top: 150px;
  position:relative;
}
.title{
  text-align: center;
  line-height: 40px;
  font-size: 26px;
  color: #FFF;
}
.pageTag{
  height: 45px;
  line-height: 45px;
  position: absolute;
  bottom: 2px;
  width: 1000px;
  left:50%;
  margin-left: -500px;
}
.pageTag ul li{
  float: left;
  padding: 0 20px;
  border-bottom:1px solid #ccc;
  
}
.pageTag ul li a{
  color: #41C1BF;
}
</style>
