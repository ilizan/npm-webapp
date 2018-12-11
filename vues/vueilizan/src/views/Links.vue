<template>
  <div class="links">
    <Row>
        <Col :sm="{ span: 18, offset: 3 }" :xs="{ span: 24, offset: 0 }">
          <h2 class="page_title">链接</h2>
          <Col :sm="{ span: 8, offset: 0 }" :xs="{ span: 24, offset: 0 }">
              <Card dis-hover>
                  <p slot="title">我的</p>
                  <p>
                      <div v-for="item in my" class="text item">
                          <a :href="item.url" target="_blank">{{item.name}}</a>
                      </div>
                  </p>
              </Card>
          </Col>
          <Col :sm="{ span: 8, offset: 0 }" :xs="{ span: 24, offset: 0 }">
              <Card dis-hover>
                  <p slot="title">旗下</p>
                  <p>
                      <div v-for="item in its" class="text item">
                          <a :href="item.url" target="_blank">{{item.name}}</a>
                      </div>
                  </p>
              </Card>
          </Col>
          <Col :sm="{ span: 8, offset: 0 }" :xs="{ span: 24, offset: 0 }">
              <Card dis-hover>
                  <p slot="title">友链</p>
                  <p>
                      <div v-for="item in link" class="text item">
                          <a :href="item.url" target="_blank">{{item.name}}</a>
                      </div>
                  </p>
              </Card>
          </Col>
          <Col :sm="{ span: 24, offset: 0 }">
            <!-- <DS></DS> -->
          </Col>
        </Col>
    </Row>
  </div>
</template>

<script>
import DS from "@/components/dashang.vue";
export default {
  name: "links",
  components: {
    DS
  },
  data() {
    return {
      my: [],
      its: [],
      link: []
    };
  },
  methods: {
    getLinkFn() {
      this.my = [
        {
          name: "工具箱",
          url: "http://tool.ilizan.cn"
        },
        {
          name: "cmd",
          url: "cmd/"
        },
        {
          name: "code",
          url: "code/"
        },
        {
          name: "wikis",
          url: "https://gitee.com/ilizan/code/wikis"
        }
      ];
      this.its = [
        // {
        //   name: "神经病",
        //   url: "https://shenjingbing.top"
        // },
        {
          name: "Love521",
          url: "https://love521.top/"
        },
        {
          name: "创网",
          url: "http://boot6.com/"
        },
        {
          name: "太子泉",
          url: "http://taiziquan.com/"
        },
        {
          name: "山青院教务处",
          url: "http://jiaowu.sdyu.edu.cn/"
        },
        {
          name: "山青院招生办",
          url: "http://zsb.sdyu.edu.cn/"
        },
        {
          name: "盈万家",
          url: "http://www.yingwanjia.com/"
        },
        {
          name: "媛创",
          url: "http://www.ychuangbj.com/"
        },
        {
          name: "校园集结号",
          url: "http://www.antlinker.com/"
        },
        {
          name: "校园集结号单页",
          url: "http://www.xyjjh.top/"
        },
        {
          name: "中科院计算所济宁分所",
          url: "http://iiot.ac.cn/"
        }
      ];
      this.link = [
        {
          name: "《双陈记》",
          url: "http://love730.com/"
        }
      ];
    }
  },
  mounted() {
    this.getLinkFn();
  }
};
</script>
<style lang="scss">
.links {
  .ivu-card {
    width: 95%;
    margin: 0 auto;
  }
  .ivu-card a {
    line-height: 25px;
  }
}
</style>