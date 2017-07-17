<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div v-for="item in list">
      {{item.name}}
    </div>
    <router-link to="/list">list</router-link>
    <a href="#/list">list</a>
    <Radio v-model="single">Radio</Radio>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '1111',
      list:[
        {id:1,name:'lizan1'},
        {id:2,name:'lizan2'},
        {id:3,name:'lizan3'}
        
      ]

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
