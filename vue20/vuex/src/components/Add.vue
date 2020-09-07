<template>
  <div>
    <h3>当前最新的值为：{{$store.state.count}} <br/> {{$store.getters.shouNum}}</h3>
    <button @click="btn1">+1</button>
    <button @click="btn2">+3</button>
    <button @click="btn3">异步+1</button>
    <button @click="btn4">异步+n</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    btn1(){
      this.$store.commit('add')
    },
    btn2(){
      //commit的作用，就是调用某个mutation函数
      this.$store.commit('addN',3)
    },
    btn3(){
      //这里的dispatch函数 专门来触发action
      this.$store.dispatch('addAsync')
    },
    btn4(){
      this.$store.dispatch('addNAsync',3)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
