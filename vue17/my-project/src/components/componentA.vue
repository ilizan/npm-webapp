<template>
  <div class="componentsA">
    <h1>{{ msg }}</h1>
    <h1>父层传到子层的值{{ msgfrom }}</h1>

    <button v-on:click="onClickMe">Click!</button>
  </div>
</template>

<script>
export default {
  name: 'componentsA',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:['msgfrom'],
  methods:{
    onClickMe: function(){
      console.log(this.msgfrom)
      this.$emit('child-tell-me-something',this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
