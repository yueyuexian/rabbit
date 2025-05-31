import request from '@/utils/request.js'
/**
 * 获取商品详情
 */

export const getGoodsDetailService = (id) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}
