<template>
<div>
  后台首页欢迎页面
  </div>
</template>

<script>
export default {
  name: 'sa',
  data(){
    return {
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style scoped>

</style>