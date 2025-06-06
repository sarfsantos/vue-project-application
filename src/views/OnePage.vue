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
          <HowToSection />
          <ContactSection
            title="Connect with us"
            description="Schedule a quick call to learn how Area can turn your regional data into a powerful advantage."
          />
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
import HowToSection from '@/components/sections/HowToSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>
