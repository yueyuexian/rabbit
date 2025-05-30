import request from '@/utils/request'
/**
 * 获取轮播图数据
 */
export function getBannerService(param) {
  return request.get('/home/banner', {
    param: {
      distributionSite: param
    }
  })
}
/**
 * 获取--新鲜好物
 */
export const getNewGoodsService = () => request.get('/home/new')

/**
 * 获取--新鲜好物
 */
export const getHotGoodsService = () => request.get('/home/hot')
/**
 * 获取所有商品模块
 */
export const getGoodsService = () => {
  return request.get('/home/goods')
}
