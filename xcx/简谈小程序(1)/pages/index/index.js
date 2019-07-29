var app = getApp();
Page({
  data: {
    pageIndex: 1,
    pageSize: 10,
    totalPage: 1,
    pageLoad: true,
    tab: {
      tab1: true,
      tab2: false,
      xiahuaxian1: true,
      xiahuaxian2: false
    },
    duration: "500",
    imgUrls: [],
    current: 0,
    VideoList: [],
    GroupList: [],
    navH:0
  },
  swiperChange: function (e) {
    var that = this;
    if (e.detail.source == 'touch') {
      that.setData({
        current: e.detail.current,

      })
    }
  },
  onLoad: function (options) {
    //console.log(options);
    var that = this;
    that.setData({
      navH: app.globalData.navHeight
    })

    //that.fetchBannerList();
    that.fetchVideoList(); // 第一次请求数据
    that.fetchGroupList();

    if (options.guid != null && options.guid != '') {
      wx.navigateTo({
        url: '/pages/video/video?guid=' + options.guid
      });
    }

  },
  onShow: function () { },
  /**
      * 请求数据封装 banner图片
      */
  fetchBannerList: function () {
    var that = this;
    wx.request({
      url: 'https://xcx.zkcmg.com/api_jt/JTAPI.asmx/GetBannerList',
      data: {
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res)
        var resData = JSON.parse(res.data.data);
        console.log(resData, 'rap分类数据');      
        that.setData({
          imgUrls: resData
        });
      }
    })
  },
  /**
    * 请求数据封装 分类
    */
  fetchGroupList: function () {
    var that = this;
    wx.request({
      url: 'https://xcx.zkcmg.com/api_jt/JTAPI.asmx/GetGroupList',
      data: {
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        //console.log(res)
        var resData = JSON.parse(res.data.data);
        //console.log(resData, 'rap分类数据');      
        that.setData({
          GroupList: resData
        });
      }
    })
  },
  /**
   * 请求数据封装 视频
   */
  fetchVideoList: function () {
    wx.showLoading({
      title: '加载中',
    })

    var that = this;
    var pageIndex = this.data.pageIndex, // 第几次加载数据(第几页)
      pageSize = this.data.pageSize; //返回数据的个数(一次性取数据的个数)

    wx.request({
      url: 'https://xcx.zkcmg.com/api_jt/JTAPI.asmx/GetVideoList',
      data: {
        GroupId: "",
        pageIndex: pageIndex,
        pageSize: pageSize
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        // console.log(res) 
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

        wx.hideLoading()//隐藏加载

        //wx.stopPullDownRefresh();
      }
    })
  },
  onReachBottom: function () {
    console.log("page上拉触底")
    let that = this;
    if (that.data.pageLoad) {
      if (that.data.pageIndex + 1 <= that.data.totalPage) {
        that.setData({
          pageIndex: that.data.pageIndex + 1, //每次触发上拉事件，把requestPageNum+1
          pageLoad: false
        })
        
        that.fetchVideoList();
      } else {
        console.log("没有更多页了")
      }
    }
  },

  
  // 选项卡
  filterTab: function (e) {
    var data = [true, true, true],
      index = e.currentTarget.dataset.index;
    data[index] = !this.data.tab[index];
    this.setData({
      tab: data
    })
  },

  tab: function (e) {
    tab1: true;
    tab2: false;
    xiahuaxian1: true;
    xiahuaxian2: false;
    var n = e.currentTarget.dataset.index;
    if (n == 1) {
      this.setData({
        tab: {
          tab1: true,
          tab2: false,
          xiahuaxian1: true,
          xiahuaxian2: false
        }
      })
    } else {
      this.setData({
        tab: {
          tab1: false,
          tab2: true,
          xiahuaxian1: false,
          xiahuaxian2: true
        }
      })
    }
  },



  //视频跳转
  goToVideo: function (event) {
    var guid  = event.currentTarget.dataset.guid;
    wx.navigateTo({
      url: '/pages/video/video?guid=' + guid
    });
  },
  //分类跳转
  goToGroup: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/video/list?id=' + id
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
});