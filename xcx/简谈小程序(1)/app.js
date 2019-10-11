//app.js
App({
  
  globalData: {
    navHeight: 0
  },
  onLaunch: function() {
    var that = this;
    // 获取手机系统信息
    wx.getSystemInfo({
      success: res => {
        //导航高度    
        that.globalData.navHeight = res.statusBarHeight + 46;
        //console.log(that.globalData.navHeight)
        console.log(that.globalData.navHeight)
      }, fail(err) {
        console.log(err);
      }
    })
  
    // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.userInfo" 这个 scope
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          //未授权 跳转到授权页面
          console.log("未授权");
          wx.reLaunch({
            url: '/pages/auth/auth',
          })
        } else {
          //已授权
          console.log("已授权");
          //验证session_key过期
          wx.checkSession({
            success: function() {
              //session_key 未过期，并且在本生命周期一直有效
              console.log("session_key 未过期");
              //从缓存读取
              var user = wx.getStorageSync('user') || {};
              //console.log(user);
              //openid等于null
              if (!user.openid) {
                //重新登录 
                that.userlogin();
              } else {
                that.globalData.openid = user.openid;
                that.globalData.session_key = user.session_key;
              }
            },
            fail: function() {
              // session_key 已经失效，需要重新执行登录流程
              console.log("session_key 已经失效");
              //重新登录
              that.userlogin();
            }
          });
        }
      }
    });
  },
  userlogin: function() {
    var that = this;
    wx.login({
      success: function(res) {
        console.log(res)
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://xcx.zkcmg.com/api_jt/JTAPI.asmx/GetLoginVoucher',
            data: {
              js_code: res.code,
            },
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function(res) {
              //console.log(res)

              var openid = res.data.openid;
              var session_key = res.data.session_key;
              //获取成功               
              if (openid) {
                var obj = {};
                obj.openid = openid;
                obj.session_key = session_key;

                // 必须是在用户已经授权的情况下调用
                wx.getUserInfo({
                  success(res2) {
                    const userInfo = res2.userInfo
                    const nickName = userInfo.nickName
                    const avatarUrl = userInfo.avatarUrl
                    const gender = userInfo.gender // 性别 0：未知、1：男、2：女
                    const province = userInfo.province
                    const city = userInfo.city
                    const country = userInfo.country
                    const language = userInfo.language
                    //保存到服务器
                    wx.request({
                      url: 'https://xcx.zkcmg.com/api_jt/JTAPI.asmx/WxUserInfo',
                      data: {
                        openid: openid,
                        sessionkey: session_key,
                        nickName: nickName,
                        avatarUrl: avatarUrl,
                        gender: gender,
                        country: country,
                        province: province,
                        city: city,
                        language: language
                      },
                      method: 'POST',
                      header: {
                        'content-type': 'application/x-www-form-urlencoded'
                      },
                      success: function(res3) {
                        if (res3.data.errcode == 0) {
                          wx.setStorageSync('user', obj); //存储openid 
                          that.globalData.openid = openid;
                          that.globalData.session_key = session_key;

                          console.log("保存成功");
                          //由于这里是网络请求，可能会在 Page.onLoad 之后才返回
                          // 所以此处加入 callback 以防止这种情况
                          if (that.userReadyCallback) {
                            that.userReadyCallback(res.data.openid);
                          }
                        } else {
                          //保存失败
                          wx.showToast({
                            title: '服务器错误！',
                            icon: 'none',
                            duration: 2000
                          });
                          console.log(res3)
                        }
                      },
                      fail: function(res3) {
                        //保存失败
                        wx.showToast({
                          title: '服务器错误！',
                          icon: 'none',
                          duration: 2000
                        });
                        console.log(res3)
                      }
                    })
                  }
                })

              } else {
                //获取失败
                wx.showToast({
                  title: '获取openid失败1！',
                  icon: 'none',
                  duration: 2000
                });
                console.log(res)
              }

            },
            fail: function(res) {
              //获取失败
              wx.showToast({
                title: '获取openid失败2！',
                icon: 'none',
                duration: 2000
              });
              console.log(res)
            }
          })
        } else {
          wx.showToast({
            title: '登录失败！',
            icon: 'none',
            duration: 2000
          });
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  globalData: {
    openid: '',
    session_key: '',
  }
})