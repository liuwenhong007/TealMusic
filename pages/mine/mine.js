// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    flag: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.bindLogin()
    wx.checkSession({
      success() {
        //session 未过期，并且在本生命周期一直有效
      },
      fail() {
        //登录态过期
        bindLogin() //重新登录
      }
    })
  },
  bindLogin() {
    wx.navigateTo({
      url: '../login/login',
    })
  },
  bindQuit() {
    wx.showToast({
      title: '退出成功',
      icon: 'success',
      duration: 1000,
      mask: true
    })
    setTimeout(() => {
      wx.switchTab({
        url: '../index/index'
      })
      wx.clearStorage()
    }, 1000)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showNavigationBarLoading()
    this.onLogin()
    setTimeout(() => {
      wx.hideNavigationBarLoading()
    }, 800)
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

  },
  /**
   * 登录
   */
  onLogin() {
    this.setData({
      nickName: wx.getStorageSync('nickName'),
      avatarUrl: wx.getStorageSync('avatarUrl'),
      flag: wx.getStorageSync('flag')
    })
  }
})