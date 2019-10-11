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
    pageIndex: 1,
    pageSize: 10,
    totalPage: 1,
    navH: 0,
    pageLoad: true,
    likelist: []
  },
  onLoad: function() {
    var that = this;
    that.setData({
      navH: app.globalData.navHeight
    });
    that.fetchLikeList();
  },
  //获取列表
  fetchLikeList: function() {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    
    var openid = app.globalData.openid;
    if (openid) {
      var that = this;
      var pageIndex = this.data.pageIndex, // 第几次加载数据(第几页)
        pageSize = this.data.pageSize; //返回数据的个数(一次性取数据的个数)

      wx.request({
        url: 'https://xcx.zkcmg.com/api_jt/JTAPI.asmx/GetLikeVideoList',
        data: {
          openid: openid,
          pageIndex: pageIndex,
          pageSize: pageSize
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          console.log(res) 
          var data = JSON.parse(res.data.data);
          var resData = data.data;
          var pageNum = data.totalPage; //rap数据总页码
          that.setData({
            totalPage: pageNum, //每次触发上拉事件，把requestPageNum+1
          })

          //console.log(resData, 'rap视频数据');
          console.log(pageNum, 'rap数据总页码');
          console.log(that.data.pageIndex, '当前第几页')

          that.setData({
            pageLoad: true,
            likelist: that.data.likelist.concat(resData)
          });
          wx.hideLoading() //隐藏加载

          //wx.stopPullDownRefresh();
        }
      })
    } else {
      wx.hideLoading() //隐藏加载
    }
  },
  onReachBottom: function() {
    console.log("page上拉触底")
    let that = this;
    if (that.data.pageLoad) {
      if (that.data.pageIndex + 1 <= that.data.totalPage) {
        that.setData({
          pageIndex: that.data.pageIndex + 1, //每次触发上拉事件，把requestPageNum+1
          pageLoad: false
        })

        that.fetchLikeList();
      } else {
        console.log("没有更多页了")
      }
    }
  },
  //视频跳转
  goToVideo: function (event) {
    var guid = event.currentTarget.dataset.guid;
    wx.navigateTo({
      url: '/pages/video/video?guid=' + guid
    });
  },
})