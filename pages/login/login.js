// pages/login/login.js
const app = getApp()
const APPID = 'wxbb5f86d6578564bb',
  SECRET = '1ff0a8939eb0fd4b9a933ed4270ec474'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.login({
      success(res) {
        let JSCODE = res.code
        app.api.getLoginCode(APPID, SECRET, JSCODE).then(res => {
          wx.setStorageSync('session_key', res.data.session_key)
          wx.setStorageSync('openid', res.data.openid)
        })
        .catch(e => {
          console.log(e)
        })
      }
    })
    this.getUserInfo()
  },
  getUserInfo() {
    const that = this
    wx.getUserInfo({
      success(res) {
        that.setData({
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl,
          flag: true
        })
        wx.setStorageSync('nickName', res.userInfo.nickName)
        wx.setStorageSync('avatarUrl', res.userInfo.avatarUrl)
        wx.setStorageSync('flag', true)
      }
    })
  },
  login() {
    wx.switchTab({
      url: '../mine/mine',
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