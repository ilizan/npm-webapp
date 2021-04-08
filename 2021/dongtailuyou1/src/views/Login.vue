<template>
  <div class="login">
    <h1>login</h1>
    <button @click="dl()">登录</button>
  </div>
</template>
<script>
export default {
  name:'Login',
  methods: {
    dl() {
      localStorage.setItem('token','1111111')
      this.$router.push('/')
    }
  },
  mounted () {
    console.log('login');;
  },
}
</script>