// 封装详情页热榜模块的业务逻辑
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getHotGoodsService } from '@/api/detail.js'

export const useDetailHot = (type) => {
  const hotList = ref([])
  const route = useRoute()
  async function getHotGoods() {
    const res = await getHotGoodsService({
      id: route.params.id,
      type
    })
    hotList.value = res
  }
  getHotGoods()
  return {
    hotList
  }
}
