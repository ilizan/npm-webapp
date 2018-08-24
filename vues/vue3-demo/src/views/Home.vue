<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="msgInfo"/>

    <HelloWorld v-bind:msg="name" />
    <input type="text" v-model="name">
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      name: "homeName",
      list: [
        {
          id: 1,
          name: "name1"
        },
        {
          id: 2,
          name: "name2"
        },
        {
          id: 3,
          name: "name3"
        }
      ]
    };
  }
};
</script>
