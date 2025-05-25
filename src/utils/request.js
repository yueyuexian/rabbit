import axios from 'axios'
// 创建 axios 实例
const request = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 10000
})
// axios 请求拦截器
request.interceptors.request.use(
  (config) => {
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
    return Promise.reject(err)
  }
)
export default request
