// 订单接口
import request from '@/utils/request.js'

/**
 * 获取订单页数据
 */
export const getCheckInfoService = () => request.get('/member/order/pre')
