<template>
  <div>
    <Map ref="map"></Map>
  </div>
</template>

<script>
var mapData = [
  {
    name: "济南市",
    count: 1000,
    addCount: 200,
  },
  {
    name: "青岛市",
    count: 1000,
    addCount: 200,
  },
  {
    name: "淄博市",
    count: 1000,
    addCount: 200,
  },
  {
    name: "德州市",
    count: 1000,
    addCount: 200,
  },
  {
    name: "滨州市",
    count: 1000,
    addCount: 200,
  },
  {
    name: "聊城市",
    count: 1000,
    addCount: 200,
  },
  {
    name: "菏泽市",
    count: 1000,
    addCount: 200,
  },
  {
    name: "泰安市",
    count: 1000,
    addCount: 200,
  },
  {
    name: "济宁市",
    count: 1000,
    addCount: 200,
  },
  {
    name: "枣庄市",
    count: 1000,
    addCount: 200,
  },
  {
    name: "临沂市",
    count: 1000,
    addCount: 200,
  },
  {
    name: "日照市",
    count: 1000,
    addCount: 200,
  },
  {
    name: "潍坊市",
    count: 1000,
    addCount: 200,
  },
  {
    name: "东营市",
    count: 1000,
    addCount: 200,
  },
  {
    name: "烟台市",
    count: 1000,
    addCount: 200,
  },
  {
    name: "威海市",
    count: 1000,
    addCount: 200,
    value: 99,
  },
  // {
  //   name: "章丘区",
  //   count: 1000,
  //   addCount: 200,
  //   value: 99,
  // },
  
];
import Map from "@/components/map/Map";
export default {
  components: {
    Map,
  },
  methods: {
    initMap() {
      this.$refs.map.mapInit("山东省", mapData);
    },
    getMapSelect(name){
        this.$refs.map.setMapData(name, mapData,false);
    }
  },
  mounted() {
    this.initMap();
  },
};
</script>

<style lang="scss" scoped>
</style>