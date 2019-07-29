const app = getApp()
Page({
  // 返回上一页
  navBack: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  navHome: function () {
    wx.reLaunch({
      url: '../index/index'
    })
  },
  
  data: {
    navH: 0,
    texts: "至少5个字",
    min: 5,//最少字数
    max: 300, //最多字数 (根据自己需求改变) 
    currentWordNumber:0,
    content:''
  },
  onLoad: function () {
    var that = this;
    that.setData({
      navH: app.globalData.navHeight
    });
  },
  //字数限制  
  inputs: function (e) {
    var that = this;
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);


    that.setData({
      content: value
    });
    // //最少字数限制
    // if (len <= this.data.min)
    //   this.setData({
    //     texts: "加油"
    //   })
    // else if (len >= this.data.min)
    //   this.setData({
    //     texts: " "
    //   })

    
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      currentWordNumber: len //当前字数  
    });
  },
  quxiao:function(e){
    console.log(1)
    //返回
    wx.navigateBack({
      delta:1
    })
  },
  fabu:function(e){
    var that = this;
    var content = that.data.content.trim();
    
    if (content.length>0){
      //获取页面栈
      var pages = getCurrentPages();
      if (pages.length > 1) {
        //上一个页面实例对象
        var prePage = pages[pages.length - 2];
        //关键在这里
        prePage.addComment(content);
        wx.navigateBack({
          delta: 1
        })
      }
    }else{
      wx.showToast({
        title: '评论为空',
        icon: 'none',      
      });
    }    
  }
})