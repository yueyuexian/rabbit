import request from '@/utils/request.js'

export const getLikeListService = ({ limit = 4 }) => {
  return request({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}
