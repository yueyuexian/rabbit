import axios from 'axios'
import { useUserStore } from '@/store/user.js'
import { ElMessage } from 'element-plus'
// import { useRouter } from 'vue-router'   注意： 通过 useRouter 获取router对象只能在vue组件中使用
import router from '@/router/index.js'
// 创建 axios 实例
const request = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 50000
})
// axios 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 从pinia中拿到 token 数据
    const userStore = useUserStore()
    const token = userStore.user.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// axios 响应拦截器
request.interceptors.response.use(
  (res) => {
    return res.data.result
  },
  (err) => {
    const userStore = useUserStore()
    // 统一错误提示
    ElMessage({
      type: 'warning',
      message: err.response.data.message
    })
    // 401 token失效处理
    // 1. 清除本地用户信息
    // 2. 跳转到登录页
    if (err.response.status === 401) {
      // 说明未登录或token失效
      userStore.clearUserInfo()
      router.push('/login')
    }
    return Promise.reject(err)
  }
)
export default request
