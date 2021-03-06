// pages/ranking/ranking.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.onLoadData()
  },
  onLoadData() {
    wx.showNavigationBarLoading()
    app.api.getRankingList().then(res => {
      console.log(res.data)
      if (res.code === 0) {
        this.setData({
          topList: res.data.topList,
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
  //   app.api.getRankingList().then(res => {
  //     console.log(res.data)
  //     if (res.code === 0) {
  //       this.setData({
  //         topList: res.data.topList,
  //         show: true
  //       })
  //       wx.stopPullDownRefresh()
  //     }
  //   })
  // },
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