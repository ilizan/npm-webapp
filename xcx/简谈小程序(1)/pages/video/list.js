var app = getApp();
Page({
  // 返回上一页
  navBack: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  navHome: function() {
    wx.reLaunch({
      url: '../index/index'
    })
  },
  data: {
    pageIndex: 1,
    pageSize: 10,
    totalPage: 1,
    pageLoad: true,
    GroupId: 0,
    navH: 0,
    GroupName: '',
    Description: '',
    GroupImageUrl: '',
    VideoList: [],
  },
  onLoad: function(options) {
    var that = this;
    that.setData({
      navH: app.globalData.navHeight
    });
    var id = options.id

    that.setData({
      GroupId: id
    });
    wx.showLoading({
      title: '加载中',
    })
    that.fetchGroupModel();
    that.fetchVideoList();
  },
  onReady: function() {

  },
  //获取类型实例
  fetchGroupModel: function() {
    var that = this;
    wx.request({
      url: 'https://xcx.zkcmg.com/api_jt/JTAPI.asmx/GetGroupModel',
      data: {
        id: that.data.GroupId
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        //console.log(res)
        var resData = JSON.parse(res.data.data);
        that.setData({
          GroupName: resData.GroupName,
          Description: resData.Description,
          GroupImageUrl: resData.ImageUrl,
        });
        wx.setNavigationBarTitle({
          title: resData.GroupName + '主页' //修改title
        })
      }
    })
  },
  /**
   * 请求数据封装 视频
   */
  fetchVideoList: function() {
    var that = this;
    var pageIndex = this.data.pageIndex, // 第几次加载数据(第几页)
      pageSize = this.data.pageSize; //返回数据的个数(一次性取数据的个数)

    wx.request({
      url: 'https://xcx.zkcmg.com/api_jt/JTAPI.asmx/GetVideoList',
      data: {
        GroupId: that.data.GroupId,
        pageIndex: pageIndex,
        pageSize: pageSize
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        //console.log(res) 
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
          VideoList: that.data.VideoList.concat(resData)
        });

        wx.hideLoading() //隐藏加载

        //wx.stopPullDownRefresh();
      }
    })
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
        wx.showLoading({
          title: '加载中',
        })
        that.fetchVideoList();
      } else {
        console.log("没有更多页了")
      }
    }
  },
  //视频跳转
  goToVideo: function(event) {
    var guid = event.currentTarget.dataset.guid;
    wx.navigateTo({
      url: '/pages/video/video?guid=' + guid
    });
  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target.dataset.guid)
    }
    wx.showShareMenu({
      withShareTicket: true
    })
    return {
      title: res.target.dataset.videoname,
      path: '/pages/index/index?guid=' + res.target.dataset.guid,
      imageUrl: res.target.dataset.img
    }
  }
})