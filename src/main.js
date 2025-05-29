import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

import { useIntersectionObserver } from '@vueuse/core'

//引入我们的初始化样式
import '@/styles/common.scss'

const pinia = createPinia()
pinia.use(persist)

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')

// 定义全局自定义指令
app.directive('img-lazy', {
  mounted(el, binding) {
    // el: 指令绑定的元素
    // binding: binding.value 指令等于号后面表达式的值  此处为图片 url
    useIntersectionObserver(el, ([entry]) => {
      console.log(entry.isIntersecting)
      if (entry.isIntersecting) {
        // 进入视口区域
        el.src = binding.value
      }
    })
  }
})
