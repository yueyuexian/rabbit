<script setup>
import request from '@/utils/request.js'
async function testAxios() {
  console.log(await request.post('/login', { account: 'xiaotuxian001', password: '123456' }))
}
</script>

<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
