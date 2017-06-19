//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    show: false
  },
  onLoad(e) {
    this.onLoadData()
  },
  /**
   * 加载首页数据
   */
  onLoadData() {
    wx.showNavigationBarLoading()
    app.api.getHomeList().then(res => {
      // console.log(res.data)
      if (res.code === 0) {
        this.setData({
          radioList: res.data.radioList,
          slider: res.data.slider,
          songList: res.data.songList,
          show: true
        })
        setTimeout(() => {
          wx.hideNavigationBarLoading()
        }, 800)
      }
    })
  },
  // onPullDownRefresh() {
  //   console.log(1)
  //   app.api.getHomeList().then(res => {
  //     // console.log(res.data)
  //     if (res.code === 0) {
  //       this.setData({
  //         radioList: res.data.radioList,
  //         slider: res.data.slider,
  //         songList: res.data.songList,
  //         show: true
  //       })
  //       wx.stopPullDownRefresh()
  //     }
  //   })  
  // },
  onShareAppMessage (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'TealMusic',
      path: '/page/index/index',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  },
  /**
   * 
   */
  bindTotaoge(e) {
    console.log(e)
    wx.navigateTo({
      url: '../taoge/taoge?id=' + e.currentTarget.id
    })
  }
})
