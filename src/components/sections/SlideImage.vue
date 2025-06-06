<template>
  <div class="slide-container">
    <div class="slide-image" :style="{ backgroundImage: `url(${slides[currentIndex]})` }"></div>

    <button class="nav-button position-left" @click="prevSlide">
      <span class="material-icons-round">chevron_left</span>
    </button>
    <button class="nav-button position-right" @click="nextSlide">
      <span class="material-icons-round">chevron_right</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const slides = [
  new URL('@/assets/images/slide01.png', import.meta.url).href,
  new URL('@/assets/images/slide02.png', import.meta.url).href,
  new URL('@/assets/images/slide03.png', import.meta.url).href,
]

const currentIndex = ref(0)

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}
</script>
