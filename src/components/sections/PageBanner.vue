<template>
  <div class="page-banner">
    <img v-if="src" :src="src" :alt="alt" class="banner-image" :loading="lazy ? 'lazy' : 'eager'" />
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  lazy: {
    type: Boolean,
    default: true,
  },
})
</script>
