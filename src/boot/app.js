import { boot } from 'quasar/wrappers'
import util from 'src/util'
import request from "src/util/request";
export default boot(({ app }) => {
  app.config.globalProperties.$util = util
  app.config.globalProperties.$formatNumber = util.formatNumber
  app.config.globalProperties.$query = request.query
  app.config.globalProperties.$post = request.post
  app.config.globalProperties.$push = request.push
  app.config.globalProperties.$queryChild = request.queryChild
})
