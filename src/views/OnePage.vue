<template>
  <div class="home-container">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 class="heading-1 page-title">Browse everything.</h1>
          <PageHeroBanner />
          <LogosList />
          <BenefitsSection />
          <SlideSection />
          <SpecsSection />
          <QuoteSection />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LogosList from '@/components/sections/LogosList.vue'
import PageHeroBanner from '@/components/sections/PageHeroBanner.vue'
import BenefitsSection from '@/components/sections/BenefitsSection.vue'
import SlideSection from '@/components/sections/SlideSection.vue'
import SpecsSection from '@/components/sections/SpecsSection.vue'
import QuoteSection from '@/components/sections/QuoteSection.vue'
</script>
