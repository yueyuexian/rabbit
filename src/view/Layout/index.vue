<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
// 触发获取导航列表的 action
import { useCategoryStore } from '@/store/category'
const categoryStore = useCategoryStore()
categoryStore.getCategoryList()
</script>
<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <router-view></router-view>
  <LayoutFooter />
</template>
