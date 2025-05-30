// 封装banner轮播图相关的业务代码
import { ref } from 'vue'
import { getBannerService } from '@/api/home'

export function useBanner() {
  let bannerList = ref([])
  const getBannerList = async () => {
    const res = await getBannerService(2)
    bannerList.value = res
  }
  getBannerList()
  return {
    bannerList
  }
}
