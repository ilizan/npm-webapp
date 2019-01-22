var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var arr = [];
    for (var i = 0; i < 50; i++) {
      arr.push({
        id: i + 1,
        name: "li" + i + 1
      })
    }
    this.setData({
      list: arr
    })
    
    console.log('监听页面加载')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('监听页面初次渲染完成')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('页面隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log('卸载')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log('下拉')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var arr = [];
    for (var i = 0; i < 50; i++) {
      arr.push({
        id: i + 1,
        name: "li" + i + 1
      })
    }
    // console.log(getCurrentPages)
    // this.setData({
    //   list: this.list.concat(arr)
    // })
    console.log('触底')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log('右上角分享')
  }
})