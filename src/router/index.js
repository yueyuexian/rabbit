import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import LoginVue from '@/view/Login/index.vue'
import LayoutVue from '@/view/Layout/index.vue'
import HomeVue from '@/view/Home/index.vue'
import CategoryVue from '@/view/Category/index.vue'
import SubCategoryVue from '@/view/SubCategory/index.vue'
import DetailVue from '@/view/Detail/index.vue'
import CartList from '@/view/CartList/index.vue'
import CheckoutVue from '@/view/Checkout/index.vue'
import PayVue from '@/view/Pay/index.vue'
import PayCallbackVue from '@/view/Pay/PayBack.vue.vue'
const routes = [
  {
    path: '/',
    component: LayoutVue,
    children: [
      { path: '', component: HomeVue },
      // 加 ? 表示可选
      { path: 'category/:id?', component: CategoryVue },
      { path: 'category/sub/:id', component: SubCategoryVue },
      { path: 'detail/:id', component: DetailVue },
      { path: 'cartlist', component: CartList },
      { path: 'checkout', component: CheckoutVue },
      { path: 'pay', component: PayVue },
      { path: 'paycallback', component: PayCallbackVue }
    ]
  },
  { path: '/login', component: LoginVue }
]

const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes,
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
