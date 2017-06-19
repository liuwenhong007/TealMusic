// pages/search/search.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    focus: false,
    shows: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    
  },
  onLoadData() {
    wx.showNavigationBarLoading()
    app.api.getSearchList().then(res => {
      // console.log(res)
      if (res.code === 0) {
        let hotkey = this.getRandomArrayElements(res.data.hotkey, 9)
        this.setData({
          special_key: res.data.special_key,
          hotkey,
          shows: true
        })
        setTimeout(() => {
          wx.hideNavigationBarLoading()
        }, 800)
      }
    })
  },
  // onPullDownRefresh() {
  //   app.api.getSearchList().then(res => {
  //     if (res.code === 0) {
  //       let hotkey = this.getRandomArrayElements(res.data.hotkey, 9)
  //       this.setData({
  //         special_key: res.data.special_key,
  //         hotkey,
  //         shows: true
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
    this.onLoadData()
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
   * 随机数组中随机取几个元素
   */
  getRandomArrayElements (arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while(i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(min);
  },
  bindGetfocus() {
    this.setData({
      focus: true,
      show: true
    })
  },
  bindtapcancel() {
    this.setData({
      focus: false,
      show: false
    })
  }
})