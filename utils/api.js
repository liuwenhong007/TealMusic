const url = 'https://c.y.qq.com/'
const fetch = require('./fetch')

function fetchApi(types, api, option) {
  return fetch(url, types, api, option)
}

module.exports = {
  /**
   * 获取主页数据列表
   */
  getHomeList() {
    return fetchApi('GET', `/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg`).then(res => res.data)
  }
}