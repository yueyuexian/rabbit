import { createRouter, createWebHashHistory } from 'vue-router'
import LoginVue from '@/view/Login/index.vue'
import LayoutVue from '@/view/Layout/index.vue'
import HomeVue from '@/view/Home/index.vue'
import CategoryVue from '@/view/Category/index.vue'
import SubCategoryVue from '@/view/SubCategory/index.vue'
import DetailVue from '@/view/Detail/index.vue'
const routes = [
  {
    path: '/',
    component: LayoutVue,
    children: [
      { path: '', component: HomeVue },
      // 加 ? 表示可选
      { path: 'category/:id?', component: CategoryVue },
      { path: 'category/sub/:id', component: SubCategoryVue },
      { path: 'detail/:id', component: DetailVue }
    ]
  },
  { path: '/login', component: LoginVue }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
