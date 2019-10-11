var app = getApp();
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
  /**
   * 页面的初始数据
   */
  data: {
    VideoGuid: '',
    VideoName: '',
    GroupName: '',
    VideoDuration: '0:0',
    Description: '',
    VideoUrl: '',
    ImageUrl: '',
    islike: false,
    LikeNumber: 0,
    ShareNumber: 0,
    CommentNumber: 0,
    pageIndex: 1,
    navH: 0,
    pageSize: 10,
    totalPage: 1,
    pageLoad: true,
    Commentlist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.setData({
      navH: app.globalData.navHeight
    });
    var VideoGuid = options.guid

    that.setData({
      VideoGuid: VideoGuid
    });
    wx.showLoading({
      title: '加载中',
    })
    that.fetchUserModel();
    that.fetchCommentList();
    that.AddViewRecord();
    wx.hideLoading() //隐藏加载
  },

  //获取视频信息
  fetchUserModel: function() {
    var that = this;
    var VideoGuid = that.data.VideoGuid;
    var openid = app.globalData.openid;
    //console.log(VideoGuid,"视频guid");
    if (VideoGuid != null && VideoGuid != '' && openid != null && openid != "") {
      wx.request({
        url: 'https://xcx.zkcmg.com/api_jt/JTAPI.asmx/GetVideoModel',
        data: {
          guid: VideoGuid,
          openid: openid
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          //console.log(res)
          var data = JSON.parse(res.data.data);
          var resData = data.data;
          var islike = data.islike;

          that.setData({
            VideoName: resData.VideoName,
            GroupName: resData.GroupName,
            VideoDuration: resData.VideoDuration,
            Description: resData.Description,
            VideoUrl: resData.VideoUrl,
            ImageUrl: resData.ImageUrl,
            LikeNumber: resData.LikeNumber,
            ShareNumber: resData.ShareNumber,
            CommentNumber: resData.CommentNumber,
            islike: islike
          });
        }
      })
    }
  },
  /**
   * 请求数据封装 评论列表
   */
  fetchCommentList: function() {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    var pageIndex = this.data.pageIndex, // 第几次加载数据(第几页)
      pageSize = this.data.pageSize; //返回数据的个数(一次性取数据的个数)

    var VideoGuid = that.data.VideoGuid;
    var openid = app.globalData.openid;

    wx.request({
      url: 'https://xcx.zkcmg.com/api_jt/JTAPI.asmx/GetVideoCommentList',
      data: {
        openid: openid,
        VideoGuid: VideoGuid,
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
        console.log(pageNum, '评论数据总页码');
        console.log(that.data.pageIndex, '评论当前第几页')

        that.setData({
          pageLoad: true,
          Commentlist: that.data.Commentlist.concat(resData)
        });

        wx.hideLoading() //隐藏加载

        //wx.stopPullDownRefresh();
      }
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("page上拉触底")
    let that = this;
    if (that.data.pageLoad) {
      if (that.data.pageIndex + 1 <= that.data.totalPage) {
        that.setData({
          pageIndex: that.data.pageIndex + 1, //每次触发上拉事件，把requestPageNum+1
          pageLoad: false
        })

        that.fetchCommentList();
      } else {
        console.log("没有更多页了")
      }
    }
  },
  //添加播放记录
  AddViewRecord: function() {
    var that = this;
    var VideoGuid = that.data.VideoGuid;
    var openid = app.globalData.openid;
    if (VideoGuid != null && VideoGuid != '' && openid != null && openid != "") {
      wx.request({
        url: 'https://xcx.zkcmg.com/api_jt/JTAPI.asmx/GetVideoViewRecord',
        data: {
          VideoGuid: VideoGuid,
          openid: openid
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          //console.log(res)
          if (res.statusCode == 200) {
            if (res.data.errcode == 0) {

            }
          }
        }
      })
    }
  },
  //喜欢 取消喜欢
  OntoLike: function() {
    var that = this;
    var VideoGuid = that.data.VideoGuid;
    var openid = app.globalData.openid;
    //console.log(VideoGuid,"视频guid");
    if (VideoGuid != null && VideoGuid != '' && openid != null && openid != "") {
      wx.request({
        url: 'https://xcx.zkcmg.com/api_jt/JTAPI.asmx/GetVideoLike',
        data: {
          VideoGuid: VideoGuid,
          openid: openid
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          if (res.statusCode == 200) {
            //console.log(res)
            if (res.data.errcode == 0) {
              var islike = that.data.islike;
              console.log(islike)
              if (islike == true || islike == 'True') {
                that.setData({
                  islike: false,
                  LikeNumber: that.data.LikeNumber - 1
                })
              } else {
                that.setData({
                  islike: true,
                  LikeNumber: that.data.LikeNumber + 1
                })
              }
            } else {
              wx.showToast({
                title: '操作失败',
                icon: 'none',
                duration: 2000
              });
            }
          }
        }
      })
    }
  },
  //评论点赞 取消
  OntoCommentPraise: function(event) {
    var that = this;
    var openid = app.globalData.openid;

    var CommentGuid = event.currentTarget.dataset.guid;
    if (CommentGuid != null && CommentGuid != '' && openid != null && openid != "") {
      wx.request({
        url: 'https://xcx.zkcmg.com/api_jt/JTAPI.asmx/GetVideoCommentPraise',
        data: {
          CommentGuid: CommentGuid,
          openid: openid
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          if (res.statusCode == 200) {
            //console.log(res)
            if (res.data.errcode == 0) {
              var Commentlist = that.data.Commentlist;
              //console.log(Commentlist.length)
              for (var i = 0; i < Commentlist.length; i++) {
                if (CommentGuid == Commentlist[i].Guid) {
                  var pState = Commentlist[i].pState;

                  if (pState == 1) {
                    Commentlist[i].pState = 0;
                    Commentlist[i].Praise = Number(Commentlist[i].Praise) - 1;
                    that.setData({
                      Commentlist: Commentlist
                    })
                  } else {
                    Commentlist[i].pState = 1;
                    Commentlist[i].Praise = Number(Commentlist[i].Praise) + 1;
                    that.setData({
                      Commentlist: Commentlist
                    })
                  }
                }
              }
            } else {
              wx.showToast({
                title: '操作失败',
                icon: 'none',
                duration: 2000
              });
            }
          }
        }
      })
    }
  },
  pinglun: function(event) {
    wx.navigateTo({
      url: '/pages/pinglun/pinglun'
    });
  },
  addComment: function(value) {
    var content = value;
    console.log(content);
    if (content.length>0) {
      var that = this;
      var VideoGuid = that.data.VideoGuid;
      var openid = app.globalData.openid;
      if (VideoGuid != null && VideoGuid != '' && openid != null && openid != "") {
        wx.request({
          url: 'https://xcx.zkcmg.com/api_jt/JTAPI.asmx/GetVideoComment',
          data: {
            VideoGuid: VideoGuid,
            Content:content,
            openid: openid
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            //console.log(res)
            if (res.statusCode == 200) {
              if (res.data.errcode == 0) {
                that.setData({
                  pageLoad: true,
                  pageIndex: 1,
                  pageSize: 10,
                  totalPage: 1,
                  pageLoad: true,                 
                  CommentNumber: that.data.CommentNumber+1,
                  Commentlist: [],
                });
                that.fetchCommentList();
              }
            }else{
              wx.showToast({
                title: '数据加载失败',
                icon: 'none',
              });
            }
          }
        })
      }
    } 
  },
  /**
 * 用户点击右上角分享
 */
  onShareAppMessage(res) {
    var that = this;
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log()
      return {
        title: that.data.VideoName,
        path: '/pages/index/index?guid=' + that.data.VideoGuid,
        imageUrl: that.data.ImageUrl
      }
    }
    wx.showShareMenu({
      withShareTicket: true
    })
  }
})