import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginService } from '@/api/login.js'
import { useRouter } from 'vue-router'
export const useUserStore = defineStore(
  'user',
  () => {
    // 定义 state
    const user = ref({})

    const router = useRouter()
    // 登录的 action
    const login = async (data) => {
      user.value = await loginService(data)
      router.push('/')
    }
    // 退出登录的 action
    const logout = () => {
      router.push('/login')
      user.value = {}
    }
    return {
      user,
      login,
      logout
    }
  },
  { persist: true } // 开启持久化存储
)
