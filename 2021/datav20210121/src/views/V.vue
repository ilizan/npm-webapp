<template>
  <div class="vMain">
    <Map></Map>
  </div>
</template>
<script>
import Map from '@/components/Map.vue';
export default {
  components: {
    Map,
  },
}
</script>
<style lang="scss" scoped>
.vMain{
  width:1890px;
  height: 1080px;
  // width:1790px;
  // height: 1024px;
  border:1px solid #ccc;
  
}
</style>