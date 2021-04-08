<template>
  <div class="herder">
    <div class="logo">山东省农民工工资支付监管平台</div>
    <div class="toolAll">
      <div class="dateAll">
        <img src="./../assets/images/herder/time.png" alt="" />
        <span class="timeName">时间</span>
        <span class="time">{{ currentTime }}</span>
        <span class="date">{{ currentDate }}</span>
        <span class="week">星期{{currentWeek}}</span>
      </div>
      <div class="tool">
        <ul>
          <li><img src="./../assets/images/herder/full.png" alt="" />全屏</li>
          <li>
            <img src="./../assets/images/herder/home.png" alt="" />全省人社
          </li>
          <li>
            <img src="./../assets/images/herder/sc.png" alt="" />切换系统首页
          </li>
          <li>
            <img src="./../assets/images/herder/quit.png" alt="" />退出登录
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: "", //定义一个定时器的变量
      currentDate: "", //当前日期
      currentTime: "", // 获取当前时间
      currentWeek: "", //当前周
    };
  },
  methods: {
    getDate() {
      this.currentDate =
        new Date().getFullYear() +
        "年" +
        (new Date().getMonth() + 1) +
        "月" +
        new Date().getDate() +
        "日";
      this.currentTime = new Date().getHours() + ":" + new Date().getMinutes()+':'+new Date().getSeconds();
      var a = new Array("日", "一", "二", "三", "四", "五", "六");
      this.currentWeek = a[new Date().getDay()]
    },
  },
  mounted() {
    this.getDate();
    var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(function () {
        _this.getDate()
    });
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style lang="scss" scoped>
.herder {
  height: 108px;
  line-height: 108px;
  width: 100%;
  background-image: url("./../assets/images/herder/topbg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  line-height: 108px;
  color: #00c4f7;
  .logo {
    font-size: 32px;
    padding-left: 30px;
    float: left;
    font-weight: bold;
  }
  .toolAll {
    float: right;

    .dateAll {
      float: left;
      margin-right: 220px;
      img {
        vertical-align: middle;
        margin-top: -10px;
      }
      span {
        font-size: 24px;
        margin: 0 10px;
        font-weight: 400;
      }
      .time{
          font-size: 28px;
      }
    }
    .tool {
      float: right;
      ul {
        li {
          font-size: 18px;
          float: left;
          margin: 0 5px;
          padding: 0 10px;
          cursor: pointer;
          img {
            margin: 0 5px;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
// @media screen and (max-width: 1760px) {
//     .herder .toolAll .dateAll{
//         margin-right: 20px;
//     }
//     .herder .toolAll .dateAll span{
//         margin: 0 5px;
//     }
//     .herder .toolAll .tool ul li{
//         margin: 0;
//         padding: 0;
//     }
// }
</style>