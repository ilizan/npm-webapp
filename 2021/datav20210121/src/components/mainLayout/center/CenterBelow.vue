<template>
  <div class="centerBelow">
    <div class="boxTitle">
      <ul>
        <li class="active">项目概况</li>
      </ul>
    </div>
    <div class="boxMain">
      <div class="left">
        <ul>
          <li class="count">
            <div><span>1733</span>个</div>
          </li>
          <li class="addCount">
            <div><span>742</span>个</div>
          </li>
        </ul>
      </div>
      <div class="right">
          <div class="tabs">
              <div class="tabTitle" v-bind:class="{active:activeIndex == 1}" @click="activeIndex = 1">施工状态</div>
              <div class="tabTitle" v-bind:class="{active:activeIndex == 2}" @click="activeIndex = 2">投资类别</div>
              <div class="tabTitle" v-bind:class="{active:activeIndex == 3}" @click="activeIndex = 3">行业分类</div>
          </div>
          <div class="tabInfo" v-show="activeIndex == 1">
              <VChart1></VChart1>
          </div>
          <div class="tabInfo" v-show="activeIndex == 2">
              <VChart2></VChart2>
              
          </div>
          <div class="tabInfo" v-show="activeIndex == 3">
              <VChart3></VChart3>
              <div class="rightIcon">

              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import VChart1 from './VChart1';
import VChart2 from './VChart2';
import VChart3 from './VChart3';
export default {
    data() {
        return {
            activeIndex:1,
        }
    },
    components: {
        VChart1,
        VChart2,
        VChart3
    },
};
</script>

<style lang="scss" scoped>
body * {
//   border: 1px solid #ccc;
}
.centerBelow {
  .boxMain {
    .left {
      width: 200px;
      float: left;
      height: 340px;
      ul {
        li {
          width: 142px;
          margin: 30px auto;
          height: 128px;
          position: relative;
          div {
              position: absolute;
              top: 90px;
              width: 100%;
              text-align: center;
              span{
                  font-size: 24px;
                  margin-right: 4px;
              }
          }
        }
        .count {
          background-image: url("./../../../assets/images/project/count.png");
        }
        .addCount {
          background-image: url("./../../../assets/images/project/addCount.png");
        }
      }
    }
    .right{
        float: left;
        width: 440px;
        margin-top: 10px;
        .tabInfo{
            position: relative;
            .rightIcon{
                position: absolute;
                background-image: url('./../../../assets/images/project/rightIcon.png');
                width: 12px;
                height: 18px;
                right: 0;
                top: 50%;
            }
        }
    }
  }
}
</style>