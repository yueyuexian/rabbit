import request from '@/utils/request'
/**
 * 添加购物车
 * @param {*} data
 * @returns
 */
export const addCartService = (data) => request.post('/member/cart', data)
