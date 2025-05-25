import request from '@/utils/request'
export function getCategoryService() {
  return request.get('/home/category/head')
}
