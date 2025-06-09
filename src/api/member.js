import request from '@/utils/request.js'

export const getLikeListService = ({ limit = 4 }) => {
  return request({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}
/*
params: {
	orderState:0,
  page:1,
  pageSize:2
}
*/

export const getUserOrderAPI = (params) => {
  return request({
    url: '/member/order',
    method: 'GET',
    params
  })
}
