import { createRouter, createWebHashHistory } from 'vue-router'
import LoginVue from '@/view/Login/index.vue'
import LayoutVue from '@/view/Layout/index.vue'
import HomeVue from '@/view/Home/index.vue'
import CategoryVue from '@/view/Category/index.vue'
import SubCategoryVue from '@/view/SubCategory/index.vue'
const routes = [
  {
    path: '/',
    component: LayoutVue,
    children: [
      { path: '', component: HomeVue },
      { path: 'category/:id?', component: CategoryVue },
      { path: 'category/sub/:id?', component: SubCategoryVue }
    ]
  },
  { path: '/login', component: LoginVue }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
