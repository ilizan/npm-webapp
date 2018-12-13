<template>
  <div class="Box">
    <Row>
      <Col :sm="{ span: 18, offset: 3 }" :xs="{ span: 24, offset: 0 }">
        <h2 class="page_title">箱子</h2>
      </Col>
      <Col :sm="{ span: 18, offset: 3 }" :xs="{ span: 24, offset: 0 }">
        <Row>
          <WEATHER></WEATHER>
          <Col style="display:none" :sm="{ span: 24, offset: 0 }" :xs="{ span: 24, offset: 0 }">
            <Card dis-hover>
              <p slot="title">Disable card with hover shadows</p>
              <p>Content of card</p>
              <p>Content of card</p>
              <p>Content of card</p>
            </Card>
          </Col>
        </Row>
        <DS></DS>
      </Col>
    </Row>
  </div>
</template>
<script>
import DS from "@/components/dashang.vue";
import WEATHER from "@/components/box/Weather.vue";

export default {
  name: "Box",
  components: {
    DS,
    WEATHER
  },
  data() {
    return {
    };
  },
  methods: {
    
  },
  mounted() {
    
  }
};
</script>
<style>

</style>