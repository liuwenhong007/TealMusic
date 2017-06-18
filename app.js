//app.js
const api = require('./utils/api.js'),
      util = require('./utils/util.js')
      
App({
  globalData: {
    hasLogin: false,
    sessionId: null
  },
  api,
  util
})