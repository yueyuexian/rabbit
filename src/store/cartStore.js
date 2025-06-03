// 封装购物车模块
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { addCartService } from '@/api/cart.js'

export const useCartStore = defineStore(
  'cart',
  () => {
    // 定义状态state - cartList
    const cartList = ref([])

    // 定义action - addCart
    const addCart = (goods) => {
      // 添加购物车操作
      // 已添加过 - count + 1
      // 没有添加过 - 直接push
      // 思路： 通过匹配传递过来的商品对象中的 skuId 能不能在cartList中找到
      const item = cartList.value.find((item) => item.skuId === goods.skuId)
      if (item) {
        // 找到了
        item.count = goods.count + item.count
      } else {
        // 没找到
        cartList.value.push(goods)
      }
    }

    // 以对象格式 return state 和 action
    return {
      cartList,
      addCart
    }
  },
  {
    persist: true
  }
)
