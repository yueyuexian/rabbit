// 封装分类数据业务相关的代码
import { useRoute } from 'vue-router'
import { getTopCategoryService } from '@/api/category.js'
import { ref, watch } from 'vue'
export function useCategory() {
  const route = useRoute()
  let categoryData = ref({})
  async function getSecondCategory() {
    const res = await getTopCategoryService(route.params.id)
    categoryData.value = res
  }
  // 使用监听器监听路由参数变化
  watch(
    () => route.params.id,
    () => {
      getSecondCategory()
    },
    { immediate: true }
  )
  return {
    categoryData
  }
}
