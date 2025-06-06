<template>
  <section class="hero-banner">
    <div class="container">
      <div class="hero-image-wrapper">
        <div class="hero-background"></div>

        <div class="hero-image-inner">
          <div class="hero-image-box">
            <picture>
              <source :srcset="mobileImage" media="(max-width: 1279px)" />
              <img :src="desktopImage" alt="Hero image" class="hero-image" />
            </picture>
          </div>
        </div>

        <div class="hero-decoration"></div>
      </div>

      <div class="hero-shadow"></div>
    </div>
  </section>
</template>

<script setup>
import desktopImg from '@/assets/images/hero01.png'
import mobileImg from '@/assets/images/hero01mb.png'

const desktopImage = desktopImg
const mobileImage = mobileImg
</script>
