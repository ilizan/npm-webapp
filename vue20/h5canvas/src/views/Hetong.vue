<template>
  <div class="hetong">
    <van-button type="info" @click="btn()">签名</van-button>
    <Qianming ref='qianming'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Qianming from '@/components/Qianming.vue'

export default {
  name: 'Hetong',
  components: {
    Qianming
  },
  methods: {
      btn(){
          this.$nextTick(() => {
            this.$refs.qianming.inits()
          })
      }
  },
}
</script>
