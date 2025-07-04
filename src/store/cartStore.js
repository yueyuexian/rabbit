// 封装购物车模块
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  addCartService,
  getCartListService,
  deleteCartService,
  mergeCartService
} from '@/api/cart.js'
import { useUserStore } from '@/store/user'
import { ElMessage } from 'element-plus'

export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.user.token)
    // 定义状态state - cartList
    const cartList = ref([])

    // 获取最新购物车列表
    const getCartList = async () => {
      const res = await getCartListService()
      cartList.value = res
    }
    // 定义action - addCart 添加购物车
    const addCart = async (goods) => {
      const { skuId, count } = goods
      if (isLogin.value) {
        // 登录之后的加入购物车逻辑
        await addCartService({ skuId, count })
        getCartList()
      } else {
        // 未登录 就走加入本地购物车逻辑
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
      // 提示用户加入购物车成功
      ElMessage.success('加入购物车成功')
    }

    // 删除购物车
    const delCart = async (skuId) => {
      if (isLogin.value) {
        // 调用接口实现接口购物车中的删除功能
        await deleteCartService([skuId])
        getCartList()
      } else {
        // 思路：
        // 1. 找到要删除项的下标值 - splice
        // 2. 使用数组的过滤方法 - filter

        // const idx =cartList.value.findIndex(item => item.skuId === skuId)
        // cartList.value.splice(idx,1)
        cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
      }
      // 提示用户删除商品成功
      ElMessage.success('删除购物车商品成功')
    }

    // 清除购物车
    const clearCart = () => {
      cartList.value = []
    }

    // 合并购物车
    const mergeCart = async () => {
      await mergeCartService(
        cartList.value.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count
          }
        })
      )
    }
    // 单选功能
    const singleCheck = (skuId, selected) => {
      // 通过 skuId 找到要修改的那一项 把 selected值修改为传过来的值
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = selected
    }

    // 全选功能
    //把 cartList 中的每一项的selected都修改为何全选状态一致
    const allCheck = (selected) => cartList.value.forEach((item) => (item.selected = selected))

    // 计算属性
    // 1. 总的数量 所有项的 count 之和
    const allCount = computed(() => {
      // old 是上一次计算的结果, val是当前数组元素
      return cartList.value.reduce((old, val) => old + val.count, 0)
    })
    // 2. 总价  所有项的 count*price 之和
    const allPrice = computed(() =>
      cartList.value.reduce((old, val) => old + val.count * val.price, 0)
    )

    // 3. 已选择数量
    const selectedCount = computed(() => {
      // 先筛选出已选择项
      const selectedList = cartList.value.filter((item) => item.selected === true)
      // 在计算 count和
      return selectedList.reduce((oldVal, currentVal) => oldVal + currentVal.count, 0)
    })
    // 4. 已选择额商品价钱合计
    const selectedAllPrice = computed(() => {
      // 先筛选出已选择项
      const selectedList = cartList.value.filter((item) => item.selected === true)
      // 再计算总价钱
      return selectedList.reduce(
        (oldVal, currentVal) => oldVal + currentVal.count * currentVal.price,
        0
      )
    })
    // 是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected === true))

    // 以对象格式 return state 和 action
    return {
      cartList,
      allCount,
      allPrice,
      isAll,
      selectedCount,
      selectedAllPrice,
      addCart,
      delCart,
      singleCheck,
      allCheck,
      clearCart,
      getCartList,
      mergeCart
    }
  },
  {
    persist: true
  }
)
