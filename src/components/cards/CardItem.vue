<template>
  <div class="card-item-container text-left">
    <div class="card-item-number">{{ number }}</div>
    <h3 class="heading-3">{{ title }}</h3>
    <p class="body-1">{{ description }}</p>
  </div>
</template>
<script setup>
defineProps({
  number: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: Boolean,
    default: true,
  },
})
</script>
