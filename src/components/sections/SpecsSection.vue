<template>
  <section class="specs-section" id="specifications">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <label class="label-2">Specs</label>
          <h2 class="heading-2">Why Choose Area?</h2>
          <p class="body-1">
            You need a solution that keeps up. That’s why we developed Area. A developer-friendly
            approach to streamline your business.
          </p>
          <SimpleButton
            buttonText="Discover More"
            buttonColor="green-60"
            textColor="green-text-200"
            to="https://plugin-value-scrum.figma.site/"
          />
        </div>
        <div class="col-lg-8 offset-lg-2">
          <TabsSection />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import TabsSection from '@/components/sections/TabsSection.vue'
import SimpleButton from '@/components/buttons/SimpleButton.vue'
</script>
