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
    form_info:'',
  },
  onLoad: function () {
    var that = this;
    that.setData({
      navH: app.globalData.navHeight
    });

  },
  formSubmit: function (e) {
    //console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var that=this;
    var Name = e.detail.value.Name.trim();
    var Mobile = e.detail.value.Mobile.trim();
    var WeChat = e.detail.value.WeChat.trim();
    var Professional = e.detail.value.Professional.trim();
    var Describe = e.detail.value.Describe.trim();
    if (Name != "" && Mobile != "" && WeChat != "" && Professional != "" && Describe!=""){
      wx.request({
        url: 'https://xcx.zkcmg.com/api_jt/JTAPI.asmx/AddJTEntry',
        data: {
          Name: Name,
          Mobile: Mobile,
          WeChat: WeChat,
          Professional: Professional,
          Describe: Describe
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          if (res.data.errcode == 0) {
            wx.showToast({
              title: '提交成功',
            })
            that.setData({
              form_info: ''
            })
          }else{
            wx.showToast({
              title: '提交失败',
              icon: 'none',
            })
          }     
        }
      })    
    }else{
      wx.showToast({
        title: '请补充填写个人信息！',
        icon: 'none',
      });
    }

  },

})