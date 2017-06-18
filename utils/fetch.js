const Promise = require('./es6-promise.min.js')
/**
 * 抓取远端api的结构
 * @param (String) url 根地址
 * @param (String) api api请求地址
 * @param (object) types 请求类型
 * @param (Promise) 包含抓取任务的Promise对象
 */

module.exports = (url, types, api, option) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${url}/${api}`,
      data: option,
      method: types,
      header: { 'Content-Type': 'appliction/json', 'sessionId': getApp().globalData.sessionId},
      success: resolve,
      fail: reject
    })
  }).catch(e => {
    console.log(e)
  })
}