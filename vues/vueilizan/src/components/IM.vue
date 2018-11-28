<template>
  <div class="im">
    <Card class="im_bg" dis-hover :bordered="false">
      <p slot="title" class="tit">与ilizan聊天</p>
      <div id="box" class="box">
        <div v-bind:class="{ act: item.type==2 }" v-for="item in msg" class="text item">
          <p class="msg_info" v-html="item.info"></p>
        </div>
      </div>
      <div class="footer">
        <div class="f_1" @click="textV=!textV">|</div>
        <div class="user_msg" v-if="textV">
          <ul v-if="lastDialog">
            <li v-for="item in lastDialog" class="text item" @click="msgClick(item)">
              {{item.content}}
            </li>
          </ul>
          <ul v-if="lastDialogTag" class="tag">
            <li v-for="item in lastDialogTag" class="text item" @click="msgTagClick(item)">
              {{item.brief}}
            </li>
          </ul>
        </div>
      </div>
    </Card>
    
  </div>
</template>

<script>
export default {
  name: "IM",
  data: function() {
    return {
      dataMsg: {}, //json数据
      diaLogOjb: [], //聊天的消息-对象
      msg: [], //聊天的消息
      lastDialog: [], //弹窗选择
      lastDialogTag: [], //弹窗标签选择
      textV: false
    };
  },
  watch: {
    msg: {
      //深度监听，可监听到对象、数组的变化
      handler(val, oldVal) {
        // console.log(val+"=="+oldVal); //但是这两个值打印出来却都是一样的
      },
      deep: true
    }
  },
  props: {
    // msg: String
  },
  
  methods: {
    setMsgList: function(msg, type) {
      //msg:消息内容;type:消息类型;
      let n = this;
      //type:1左侧消息；2右侧消息
      n.msg.push({ info: msg, type: type });
      //滚动条底部
      n.$nextTick(function() {
        var div = document.getElementById("box");
        div.scrollTop = div.scrollHeight;
      });
    },
    getData: function() {
      let _this = this;
      this.axios
        .get("../data.json")
        .then(function(response) {
          _this.dataMsg = response.data;
          _this.getMsg("0000");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getMsg(id) {
      //根据id取dataMsg消息
      this.lastDialogTag = [];
      let _thisMsg = this.dataMsg.fromLizan.find(ele => ele.id == id);
      this.diaLogOjb.push(_thisMsg); //聊天对象列表
      for (const i in _thisMsg.details[0]) {
        if (_thisMsg.details[0].hasOwnProperty(i)) {
          const element = _thisMsg.details[0][i];
          this.setMsgList(element, 1); //添加消息到页面
        }
      }
      if (_thisMsg.responses) {
        this.lastDialog = _thisMsg.responses;
      } else {
        this.lastDialog = [];
        if (_thisMsg.nextLizan) {
          this.getMsg(_thisMsg.nextLizan[0]);
        } else {
          this.lastDialogTag = this.dataMsg.fromUser;
        }
      }
    },
    msgClick(item) {
      this.setMsgList(item.content, 2); //添加消息到页面
      if (item.nextLizan) {
        this.getMsg(item.nextLizan[0]);
      } else {
        this.lastDialog = [];
        this.lastDialogTag = this.dataMsg.fromUser;
      }
      this.textV = false;
    },
    msgTagClick(item) {
      console.log(item);
      item.details.forEach(item => {
        this.setMsgList(item, 2); //添加消息到页面
      });
      this.getMsg(item.nextLizan[0]);
      this.textV = false;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="scss">
.im {
  // margin: 200px 0;
  background-image: url(../assets/iphonex.png);
  height: 727px;
  width: 364px;
  * {
    // border: 1px solid #ccc;
  }
  ul,
  li {
    display: block;
    margin: 0;
  }
  .im_bg {
    background-color: #e9ebe9;
    position: relative;
    top: 22px;
    left: 24px;
    width: 316px;
    border-radius: 33px;
    overflow: hidden;
    .tit {
      color: #fff;
    }
  }
  .ivu-card-head {
    background-color: #2f302f;
  }
  .ivu-card-body {
    padding: 5px;
  }
  .box {
    height: 586px;
    // height:300px;
    overflow: scroll;
  }
  .box .item {
    line-height: 25px;
    margin: 5px 0;
    .msg_info {
      border: 1px solid #e0e2e0;
      border-radius: 4px;
      background-color: #fff;
      display: inline-block;
      max-width: 100%;
      overflow: hidden;
      padding: 5px;
    }
  }
  .box .item.act {
    text-align: right;
    .msg_info {
      background-color: #9eea6a;
    }
  }
  .box::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 0px;
  }
  .box::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #ccc;
  }
  .box::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background: #ededed;
  }
  .footer {
    height: 40px;
    border: 1px solid #ccc;
    line-height: 40px;
    position: relative;
    .f_1:hover {
      cursor: pointer;
    }
  }
  .user_msg {
    position: absolute;
    width: 100%;
    bottom: 40px;
    background-color: #fff;
  }
  .user_msg ul li {
    line-height: 30px;
    padding: 0 10px;
  }
  .user_msg ul li:hover {
    background-color: #e7e7e7;
    cursor: pointer;
  }
  .tag li {
    width: 20%;
    float: left;
    text-align: center;
  }
}
</style>