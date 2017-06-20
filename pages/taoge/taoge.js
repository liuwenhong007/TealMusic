// pages/taoge/taoge.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    marqueePace: 1,//滚动速度
    marqueeDistance: 0,//初始滚动距离
    marqueeDistance2: 0,
    marquee2copy_status: false,
    marquee2_margin: 60,
    size: 14,
    orientation: 'left',//滚动方向
    interval: 20, // 时间间隔
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.onLoadData(options.id)
  },
  onLoadData(id) {
    wx.showNavigationBarLoading()
    app.api.getHotList(id).then(res => {
      if (res.code === 0) {
        this.setData({
          cdlist: res.cdlist[0]
        })

        app.api.getBcColor(res.cdlist[0].logo).then(res => {
          if (res.code === 0) {
            if(res.magic_color == 0){
              res.magic_color = '000'
            }
            this.setData({
              color: '#' + res.magic_color.toString(16),
              show: true
            })
          }
        })
        setTimeout(() => {
          wx.hideNavigationBarLoading()
        }, 800)
      }
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})