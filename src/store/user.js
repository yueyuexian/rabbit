import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginService } from '@/api/login.js'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

export const useUserStore = defineStore(
  'user',
  () => {
    // 定义 state
    const user = ref({})

    const router = useRouter()
    // 登录的 action
    const login = async (data) => {
      user.value = await loginService(data)
      // 提示用户登录成功
      ElMessage.success('登录成功')
      // 跳转首页 选择 replace 更好,可以防止用户返回登录页
      router.replace('/')
    }
    // 清除用户信息
    const clearUserInfo = () => {
      user.value = {}
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
