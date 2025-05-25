import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryService } from '@/api/layout.js'
export const useCategoryStore = defineStore('category', () => {
  // 导航列表的数据管理
  // state 导航列表数据
  const categoryList = ref([])

  // action 获取导航数据的方法
  async function getCategoryList() {
    categoryList.value = await getCategoryService()
  }
  return {
    categoryList,
    getCategoryList
  }
})
