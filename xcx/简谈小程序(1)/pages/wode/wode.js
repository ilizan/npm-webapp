var app = getApp();
Page({
  data: {
    nickName: '',
    avatarUrl: '',
    navH: 0
  },
  onLoad: function() {
    var that = this;
    that.setData({
      navH: app.globalData.navHeight
    });
    that.fetchUserModel();
  },
  //获取个人信息
  fetchUserModel: function() {
    var that = this;
    var openid = app.globalData.openid;
    if (openid) {
     
      wx.request({
        url: 'https://xcx.zkcmg.com/api_jt/JTAPI.asmx/GetUserModel',
        data: {
          openid: openid
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          //console.log(res)
          var resData = JSON.parse(res.data.data);
          that.setData({
            nickName: resData.nickName,
            avatarUrl: resData.avatarUrl,
          });
        }
      })
    }
  },

  xihuan: function(event) {
    wx.navigateTo({
      url: '/pages/wode/xihuan'
    });
  },
  pinglun: function(event) {
    wx.navigateTo({
      url: '/pages/wode/pinglun'
    });
  },
  woshang: function (event) {
    wx.navigateTo({
      url: '/pages/wode/baoming'
    });
  }

})