<template>
  <section class="quote-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <PageBanner
            :src="Banner02"
            alt="A image of a concrete sphere, balanced between two other larger spheres"
            lazy
          />
        </div>
        <div class="col-lg-6 text-left">
          <div class="quote-text">
            <p class="quote-1">
              “I was skeptical, but Area has completely transformed the way I manage my business.
              The data visualizations are so clear and intuitive, and the platform is so easy to
              use. I can't imagine running my company without it.”
            </p>
            <p class="label-1">Jonh Smith</p>
            <p class="label-2">Head of Data</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PageBanner from '@/components/sections/PageBanner.vue'
import Banner02 from '@/assets/images/banner02.png'
</script>
