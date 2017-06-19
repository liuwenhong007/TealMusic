//index.js
//获取应用实例
var app = getApp()
Page({
  data: {

  },
  onLoad(e) {
    app.api.getHomeList().then(res => {
      // console.log(res.data)
      if(res.code === 0) {
        this.setData({
          radioList: res.data.radioList,
          slider: res.data.slider,
          songList: res.data.songList
        })
      }
    })
  },
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
  }
})
