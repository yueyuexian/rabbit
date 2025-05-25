<script setup></script>

<template>
  <div class="container">
    <router-view></router-view>
    <div class="test">test scss</div>
  </div>
</template>

<style lang="scss" scoped>
.test {
  color: $priceColor;
}
</style>
