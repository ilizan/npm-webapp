<template>
  <div id="app">
      
      <!-- <div>
      <p>
        home
      </p>
      <el-button>el-button</el-button>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <router-view/>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>
