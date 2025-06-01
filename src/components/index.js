// 把components中的所有组件都进行全局注册
// 通过插件的方式
import ImageView from './ImgView/index.vue'
import XtxSku from './XtxSku/index.vue'
export const componentPlugin = {
  install(app) {
    // app.component('组件名称',组件配置对象)
    app.component('XtxImageView', ImageView)
    app.component('XtxSku', XtxSku)
  }
}
