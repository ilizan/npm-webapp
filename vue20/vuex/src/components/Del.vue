<template>
  <div>
    <h3>当前最新的值为：{{count}} <br/>
    {{showNum}}
    </h3>
    <button @click="btn1">-1</button>
    <button @click="btn2">-3</button>
    <button @click="btn3">异步-1</button>
    <button @click="btn4">异步-n</button>
    
  </div>
</template>

<script>
import { mapState,mapMutations,mapActions,mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['del','delN']),
    ...mapActions(['delAsync','delNAsync']),
    btn1(){
      this.del()
    },
    btn2(){
      this.delN(3)
    },
    btn3(){
      this.delAsync()
    },
    btn4(){
      this.delNAsync(3)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
