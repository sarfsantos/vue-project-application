<script setup>
import Header from './components/navigation/PageHeader.vue'
import Footer from './components/navigation/PageFooter.vue'
</script>

<template>
  <Header></Header>
  <router-view :key="$route.fullPath" />
  <Footer></Footer>
</template>
