import request from '@/utils/request.js'
/**
 * 获取二级分类列表
 */
export const getSecondCategoryService = (id) => {
  return request.get('/category', {
    params: {
      id
    }
  })
}
