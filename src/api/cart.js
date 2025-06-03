import request from '@/utils/request'
/**
 * 添加购物车
 * @param {*} data
 * @returns
 */
export const addCartService = (data) => request.post('/member/cart', data)

/**
 * 获取最新的购物车列表
 */
export const getCartListService = () => request.get('/member/cart')

/**
 * 删除购物车商品
 */
export const deleteCartService = (ids) => {
  return request.delete('/member/cart', { data: { ids } })
}
