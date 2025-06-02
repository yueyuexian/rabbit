import request from '@/utils/request.js'

/**
 * 登录接口
 */
export const loginService = (data) => {
  return request.post('/login', data)
}
