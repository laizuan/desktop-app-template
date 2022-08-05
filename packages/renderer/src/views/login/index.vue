<!-- 登入页面 -->
<template>
  <h1>登录</h1>
  {{ username }}
</template>

<script lang='ts' setup>
import { ref } from 'vue';
const username = ref('admin');
</script>
<style lang='scss' scoped>
</style>
