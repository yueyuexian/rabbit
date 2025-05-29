// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    // 懒加载指令逻辑
    // 定义全局自定义指令
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el: 指令绑定的元素
        // binding: binding.value 指令等于号后面表达式的值  此处为图片 url
        const { stop } = useIntersectionObserver(el, ([entry]) => {
          console.log(entry.isIntersecting)
          if (entry.isIntersecting) {
            // 进入视口区域
            el.src = binding.value
            stop()
          }
        })
      }
    })
  }
}
