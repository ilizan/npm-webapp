var helloData = {
  name: 'WeChat',
  msg: '1212121',
  text: "This is page data.",
  array: [1, 2, 3, 4, 5],
  staffA: { firstName: 'Hulk', lastName: 'Hu' },
  staffB: { firstName: 'Shang', lastName: 'You' },
  staffC: { firstName: 'Gideon', lastName: 'Lin' },
  count: 1,
  id: 0,
  condition: true,
  checkbox:true,
  a: 1,
  b: 2,
  c: 3,
  object: {
    key: 'Hello '
  },
  array: ['MINA'],
  zero: 66,
  aa: 11,
  bb: 22,
  obj1: {
    a: 1,
    b: 2
  },
  obj2: {
    c: 3,
    d: 4
  },
  item: {
    index: 0,
    msg: 'this is a template',
    time: '2016-09-15'
  }
}


  Page({
    data: helloData,
    tapName: function (event) {
      console.log(event)
    },
    add: function (e) {
      this.setData({
        count: this.data.count + 1
      })
    },
    onLoad: function () {//监听页面加载
      console.log("demo onLoad: 页面加载")
    },
    onReady: function () {//监听页面初次渲染完成
      console.log("监听页面初次渲染完成")
    },
    onShow: function () {//监听页面显示
      console.log("监听页面显示")
    },
    onHide: function () {//监听页面隐藏
      console.log("监听页面隐藏")
    },
    onPullDownRefresh: function () {//监听用户下拉动作
      console.log("监听用户下拉动作")
    },
    onReachBottom: function () {//页面上拉触底事件的处理函数
      console.log("页面上拉触底事件的处理函数---滚动到底")
    },
    onShareAppMessage: function () {//用户点击右上角转发
      console.log("用户点击右上角转发")
      return {
        title: '自定义转发title',
        path: '/demo/demo'
      }
    },
    onPageScroll: function (objs) {//页面滚动触发事件的处理函数
      console.log("页面滚动触发事件的处理函数" + objs.scrollTop)
    },
    onTabItemTap: function (item) {//当前是 tab 页时，点击tab时触发
      console.log("当前是tab页时，点击tab时触发")
      console.log(item.index)
      console.log(item.pagePath)
      console.log(item.text)
    },
    viewTap: function () {
      this.setData({
        text: 'Set some data for updating view.'
      }, function () {
        // this is setData callback
      })
    },
    customData: {
      hi: 'MINA'
    },
    changeName: function (e) {
      // sent data change to view
      this.setData({
        name: 'MINA'
      })
    }
  })