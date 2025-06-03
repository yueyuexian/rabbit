// 订单接口
import request from '@/utils/request.js'

/**
 * 获取订单页数据
 */
export const getCheckInfoService = () => request.get('/member/order/pre')
/**
 * 提交订单
 */
export const submitOrderService = (data) => {
  return request.post('/member/order', data)
}
