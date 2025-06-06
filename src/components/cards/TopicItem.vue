<template>
  <div class="topic-item">
    <span class="material-icons-round">{{ icon }}</span>
    <h3 class="heading-3">{{ title }}</h3>
    <p class="body-1">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: String,
})
</script>
