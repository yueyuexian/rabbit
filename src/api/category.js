import request from '@/utils/request.js'
/**
 * 获取一级分类列表
 */
export const getTopCategoryService = (id) => {
  return request.get('/category', {
    params: {
      id
    }
  })
}
/**
 * 获取二级分类列表数据
 */
export const getCategoryFilterServie = (id) => {
  return request.get('/category/sub/filter', {
    params: {
      id
    }
  })
}
/**
 * 获取二级分类商品数据
 */
export const getSubCategoryService = (data) => {
  return request.post('/category/goods/temporary', data)
}
