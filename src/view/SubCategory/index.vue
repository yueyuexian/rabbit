<script setup>
import { getCategoryFilterServie, getSubCategoryService } from '@/api/category'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import GoodsItem from '@/view/Home/components/GoodsItem.vue'

// 获取二级分类列表
let filterData = ref({})
const route = useRoute()
const getFilterData = async () => {
  const res = await getCategoryFilterServie(route.params.id)
  filterData.value = res
}
getFilterData()

// 获取二级分类商品数据
let goodsList = ref([])
let reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const getGoodsList = async () => {
  const res = await getSubCategoryService(reqData.value)
  goodsList.value = res.items
}
getGoodsList()

// tab切换
const tabChange = () => {
  reqData.value.page = 1
  disabled.value = false
  getGoodsList()
}
// 无限滚动
const disabled = ref(false)
const load = async () => {
  // 滚动到底部，加载下一页数据
  reqData.value.page++
  const res = await getSubCategoryService(reqData.value)
  // goodsList.value = [...goodsList.value, ...res.items]
  goodsList.value.push(...res.items)
  // 加载完毕 停止监听
  if (res.items.length === 0) {
    disabled.value = true
  }
}
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${filterData.parentId}` }"
          >{{ filterData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- tab组件 -->
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <GoodsItem v-for="good in goodsList" :key="good.id" :good="good" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
