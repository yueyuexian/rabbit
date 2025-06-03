import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginService } from '@/api/login.js'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useCartStore } from './cartStore'
import 'element-plus/theme-chalk/el-message.css'

export const useUserStore = defineStore(
  'user',
  () => {
    const cartStore = useCartStore()

    // 定义 state
    const user = ref({})

    const router = useRouter()
    // 登录的 action
    const login = async (data) => {
      user.value = await loginService(data)
      // 获取购物车信息  先合并本地购物车再获取
      cartStore.mergeCart()
      cartStore.getCartList()
      // 提示用户登录成功
      ElMessage.success('登录成功')
      // 跳转首页 选择 replace 更好,可以防止用户返回登录页
      router.replace('/')
    }
    // 清除用户信息
    const clearUserInfo = () => {
      user.value = {}
      // 执行清除购物车的 action
      cartStore.clearCart()
    }
    // 退出登录的 action
    const logout = () => {
      router.push('/login')
      clearUserInfo()
    }
    return {
      user,
      login,
      logout,
      clearUserInfo
    }
  },
  { persist: true } // 开启持久化存储
)
