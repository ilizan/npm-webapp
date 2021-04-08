<template>
  <div class="rightPage">
    <div class="boxTitle">
      <ul>
        <li class="active">预警</li>
      </ul>
    </div>
    <div class="boxMain box1">
      <div class="tags">
        <div class="name">
          <span>实名制<br/>制度预警</span>
        </div>
        <ul class="tag">
          <li @click="selectClick('10')">
            <img :src="require('../../assets/images/w/10.png')" alt="" />
            <img class="selects" v-show="isClick && clickCode=='10'" :src="require('../../assets/images/w/10click.png')" alt="" />
            <p><label>100</label>个</p>
          </li>
          <li @click="selectClick('04')">
            <img :src="require('../../assets/images/w/04.png')" alt="" />
            <img class="selects" v-show="isClick && clickCode=='04'" :src="require('../../assets/images/w/04click.png')" alt="" />
            <p><label>100</label>个</p>
          </li>
          <li @click="selectClick('06')">
            <img :src="require('../../assets/images/w/06.png')" alt="" />
            <img class="selects" v-show="isClick && clickCode=='06'" :src="require('../../assets/images/w/06click.png')" alt="" />
            <p><label>100</label>个</p>
            <div class="hr">

            </div>
          </li>
          <li @click="selectClick('14')">
            <img :src="require('../../assets/images/w/14.png')" alt="" />
            <img class="selects" v-show="isClick && clickCode=='14'" :src="require('../../assets/images/w/14click.png')" alt="" />
            <p><label>100</label>个</p>
          </li>
        </ul>
      </div>
      <div class="tags">
        <div class="name">
          <span>分账管理<br/>制度预警</span>
        </div>
        <ul class="tag">
          <li @click="selectClick('07')">
            <img :src="require('../../assets/images/w/07.png')" alt="" />
            <img class="selects" v-show="isClick && clickCode=='07'" :src="require('../../assets/images/w/07click.png')" alt="" />
            <p><label>100</label>个</p>
          </li>
          <li @click="selectClick('09')">
            <img :src="require('../../assets/images/w/09.png')" alt="" />
            <img class="selects" v-show="isClick && clickCode=='09'" :src="require('../../assets/images/w/09click.png')" alt="" />
            <p><label>100</label>个</p>
          </li>
        </ul>
      </div>
      <div class="tags">
        <div class="name">
          <span>工资保证<br/>金预警</span>
        </div>
        <ul class="tag">
          <li @click="selectClick('66')">
            <img :src="require('../../assets/images/w/66.png')" alt="" />
            <img class="selects" v-show="isClick && clickCode=='66'" :src="require('../../assets/images/w/66click.png')" alt="" />
            <p><label>100</label>个</p>
          </li>
        </ul>
      </div>
      
      <div class="tags">
        <div class="name">
          <span>银行代发<br/>制度预警</span>
        </div>
        <ul class="tag">
          <li @click="selectClick('01')">
            <img :src="require('../../assets/images/w/01.png')" alt="" />
            <img class="selects" v-show="isClick && clickCode=='01'" :src="require('../../assets/images/w/01click.png')" alt="" />
            <p><label>100</label>个</p>
          </li>
          <li @click="selectClick('02')">
            <img :src="require('../../assets/images/w/02.png')" alt="" />
            <img class="selects" v-show="isClick && clickCode=='02'" :src="require('../../assets/images/w/02click.png')" alt="" />
            <p><label>100</label>个</p>
          </li>
        </ul>
      </div>
      
      <div class="tags">
        <div class="name">
          <span>其他预警</span>
        </div>
        <ul class="tag">
          <li @click="selectClick('11')">
            <img :src="require('../../assets/images/w/11.png')" alt="" />
            <img class="selects" v-show="isClick && clickCode=='11'" :src="require('../../assets/images/w/11click.png')" alt="" />
            <p><label>100</label>个</p>
          </li>
          <li @click="selectClick('88')">
            <img :src="require('../../assets/images/w/88.png')" alt="" />
            <img class="selects" v-show="isClick && clickCode=='88'" :src="require('../../assets/images/w/88click.png')" alt="" />
            <p><label>100</label>个</p>
          </li>
        </ul>
      </div>
      

    </div>
    <div class="boxMain">
      <WarningList></WarningList>
    </div>
  </div>
</template>

<script>
import WarningList from './right/WarningList';
export default {
  data() {
    return {
      isClick:false,
      clickCode:''
    };
  },
  components: {
    WarningList,
  },
  methods: {
    selectClick(code) {
      this.isClick = true;
      this.clickCode = code
    },
  },
};
</script>

<style lang="scss" scoped>
.rightPage {
  height: 905px;
  background-image: url("./../../assets/images/box4.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  .boxMain {
    padding-bottom: 10px;
    margin: 0 30px 30px;
    .tags {
      overflow: hidden;
      .name {
        float: left;
        height: auto;
        width: 80px;
        text-align: center;
        color: #00c4f7;
        padding-top: 17px;
      }
      .tag {
        float: left;
        width: 425px;
        li {
          width: 180px;
          height: 58px;
          float: left;
          margin: 10px 15px;
          position: relative;
          cursor: pointer;
          img{
            z-index: 10;
          }
          .selects{
            position: absolute;
            top:0;right:0;bottom: 0;left: 0;
            z-index: 11;
          }
          p {
            bottom: 4px;
            position: absolute;
            left: 80px;
            font-size: 16px;
            z-index: 12;
            label {
          cursor: pointer;
              font-size: 22px;
            }
          }
          .hr{
            position:absolute;
            height: 58px;
            z-index: 13;
            width: 2px;
            background-color: #086793;
            top:0;right:-15px;
          }
        }
      }
    }
  }
  .box1 {
    border-bottom: 1px solid #0b82ac;
  }
}
</style>
