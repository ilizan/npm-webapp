
<template>
  <div id="app">
    <h2>{{title}}</h2>
    <h2 v-text="title"></h2>
    <h2 v-html="title"></h2>
    <input v-model="newItem" v-on:keyup.enter="addNew()">
    <ul>
      <li v-on:click="toggleFinish(item)" v-for="item in items" v-bind:class="{clas:item.isFlag}">
      {{item.label}}
      </li>
    </ul>
    <!--<list></list>-->
    <p>子层传到父层的值:{{childWords}}</p>
    <component-a msgfrom="111j" v-on:child-tell-me-something='listenToMyBoy'></component-a>
  </div>
</template>

<script>
import List from './components/user/List'
import ComponentA from './components/componentA'
import Store from './store'

console.log(Store);
export default {
  data(){
    return{
      title:'<span>标题</span>',
      items:Store.fetch(),
      newItem:'',
      childWords:''
    }
  },
  watch:{//监听变量值，变化则执行
    items:{
      handler:function(item){
        Store.save(item)
      },
      deep:true
    }
  },
  methods:{
    toggleFinish:function(item){
      console.log(item.isFlag = !item.isFlag);
    },
    addNew: function(){
      console.log(this.newItem);
      this.items.push({
        label:this.newItem,
        isFlag:true
      })
      this.newItem = '';
    },
    listenToMyBoy:function(msg){
      this.childWords = msg;
    }
  },
  name: 'app',
  components: {
    ComponentA
  }
}
</script>

<style>
html{
  height:100%;
}
body{
  display:flex;
  height:100%;
  align-items:center;
  justify-content:center;
}
.clas{
  color:red;
}
</style>
