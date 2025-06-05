// 支付页接口
import request from '@/utils/request.js'
/**
 * 获取订单详情
 */
export const getOrderService = (id) => {
  return request.get(`/member/order/${id}`)
}
