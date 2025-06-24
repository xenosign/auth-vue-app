<script setup>
import Header from '@/components/Header.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div id="app-main">
    <Header />
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
#app-main {
  text-align: center;
}
</style>
