<template>
  <div class="cView">
    <van-popup
      v-model="show"
      closeable
      close-icon="arrow-down"
      position="bottom"
      :style="{ height: 'calc(100vh - 255px)' }"
    >
      <div class="topTitle">
        {{
          selectArea.areaName == "市级" ? selectCity.name : selectArea.areaName
        }}
      </div>
      <div class="main">
        <ul class="list">
          <li class="listli" v-for="(item, index) in infoList" :key="index">
            <div class="title"><div class="titleTag">{{ item.organizationName!=null ? item.organizationName: item.department }}</div></div>
            <div class="qr">
              <img
                v-show="item.qrImgUrl"
                :src="item.qrImgUrl"
                @click="qrFn(item)"
              />
            </div>
            <div class="tel">
              <div class="telMain" v-if="item.complaintPhone && item.complaintPhone.length>0">
                <div class="telName">举报电话：</div>
                <ul>
                  <li v-for="(jitem,jindex) in item.complaintPhone" :key="jindex">
                    <a :href="'tel:'+jitem">{{jitem}}</a>
                  </li>
                </ul>
              </div>
              <div class="telMain" v-if="item.contactNumber && item.contactNumber.length>0">
                <div class="telName">联系电话：</div>
                <ul>
                  <li v-for="(jitem,jindex) in item.contactNumber" :key="jindex">
                    <a :href="'tel:'+jitem">{{jitem}}</a>
                  </li>
                </ul>
              </div>
              <div class="telMain" v-if="item.assistanceCall && item.assistanceCall.length>0">
                <div class="telName">援助电话：</div>
                <ul>
                  <li v-for="(jitem,jindex) in item.assistanceCall" :key="jindex">
                    <a :href="'tel:'+jitem">{{jitem}}</a>
                  </li>
                </ul>
              </div>
              
            </div>
          </li>
        </ul>
      </div>
    </van-popup>
    <Qr ref="qr"></Qr>
  </div>
</template>

<script>

import Qr from "@/components/Qr.vue";
export default {
  name: "cView",
  data() {
    return {
      selectCity: {},
      selectArea: {},
      show: false,
      infoList: [], //投诉列表
    };
  },
  components: {
    Qr,
  },
  methods: {
    init(selectCity, selectArea) {
      this.selectCity = selectCity; //城市
      this.selectArea = selectArea; //区县
      this.show = true;
      this.getInfoList();
    },
    //获取投诉列表
    getInfoList() {
      this.infoList = []
      this.infoList.push({
            "department":"住建部门",
            "organizationName":"住建（房建）",
            "qrImgUrl":"http://117.73.252.198:7001/qrcode/image/complaint/zibo.jpg",
            "webUrl":null,
            "complaintPhone":[
                "0532-85065008"
            ],
        },);
    },
    qrFn(item){
      let imgObj = {qrImgUrl:item.qrImgUrl,webUrl:item.webUrl}
      this.$refs.qr.init(imgObj)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.cView {
  .topTitle {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    overflow: hidden;
  }
  .main {
    height: calc(100% - 50px);
    background-color: #f1f1f1;
    overflow: auto;
    ul.list {
      li.listli {
        background-color: #fff;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
        overflow: hidden;
        font-size: 14px;
        line-height: 20px;
        vertical-align: middle;
        div.title {
          float: left;
          width: 40%;
          vertical-align: middle;
          .titleTag{
            padding-right: 3px;
          }
        }
        div.qr {
          float: left;
          height: 1px;
          width: 5%;
          vertical-align: middle;
          display: table-cell;
          img {
            height: 20px;
            width: 20px;
            vertical-align: middle;
          }
        }
        div.tel {
          float: left;
          width: 55%;
          vertical-align: middle;
          .telMain{
            float:left;
            padding-left: 3px;
            .telName {
              width: max-content;
              float: left;
            }
            ul {
              float: right;
              li {
              }
            }
          }
        }
      }
    }
  }
}
</style>
