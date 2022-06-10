<script setup lang="ts">
console.log(typeof import.meta.env.VITE_API_URL);//全是字符串 我们要在生产或者开发者模式下看
</script>

<template> 
<!-- 可以用tailwindcss了 -->
  <div class="bg-red-800">
    <ul >
      <li>首页</li>
      <li>商品</li>
      <li>评价</li>
    </ul>
    <router-view/>
  </div>
  
</template>


<style lang="scss">
</style>