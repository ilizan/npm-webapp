<template>
  <Button type="primary" v-on:click="count++">You clicked me {{ count }} times.</Button>
</template>

<script>
export default {
  name: 'button-counter',
  data: function () {
    return {
      count: 0
    }
  },
  props: {
    msg: String
  },
  methods: {},
  mounted() {
  }
}
</script>