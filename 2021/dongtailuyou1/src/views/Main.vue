<template>
  <div class="main">
    main
    <router-link to="/home">首页</router-link>
    <router-link to="/User-User">用户</router-link>
    <router-link to="/User-UserList">用户list</router-link>
    <router-link to="/User-UserView">用户查看</router-link>
    <router-link to="/User-UserView/111">用户查看带id</router-link>
    
    <button @click="quit()">退出</button>
    <br>
    <br>
    {{menuList}}
    <!-- {{$router}} -->
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Main',
  data() {
    return {
      menuList: ''
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    quit() {
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  mounted () {
    this.menuList = localStorage.getItem('menuList');
  },
}
</script>
