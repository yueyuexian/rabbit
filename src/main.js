import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

//引入我们的初始化样式
import '@/styles/common.scss'

// 引入懒加载指令插件并注册
import { lazyPlugin } from './directives'

// 引入全局组件插件
import { componentPlugin } from './components/index'

const pinia = createPinia()
pinia.use(persist)

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
