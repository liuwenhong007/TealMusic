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
    return fetchApi('GET', `/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?format=json`).then(res => res.data)
  },
  /**
   * 获取排行数据列表
   */
  getRankingList() {
    return fetchApi('GET', `v8/fcg-bin/fcg_myqq_toplist.fcg?format=json`).then(res => res.data)
  },
  /**
   * 获取搜索页面数据列表
   */
  getSearchList() {
    return fetchApi('GET', `/splcloud/fcgi-bin/gethotkey.fcg?format=json`).then(res => res.data)
  },
  /**
   * 搜索关键词获取数据列表
   */
  getSearchKeyList(key) {
    return fetchApi('GET', `soso/fcgi-bin/search_for_qq_cp?w=${key}&format=json`).then(res => res.data)
  },
  /**
   * 获取选中的热门歌单的数据列表
   */
  getHotList(disstid) {
    return fetchApi('GET', `/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?disstid=${disstid}&format=json`).then(res => res.data)
  }
}
