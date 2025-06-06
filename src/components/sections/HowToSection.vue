<template>
  <section class="how-to" id="how-to">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="d-flex justify-content-between align-items-center">
            <h2 class="heading-2">Map Your Sucess</h2>
            <SimpleButton
              buttonText="See About page"
              buttonColor="green-60"
              textColor="black-text-200"
              to="/about"
            />
          </div>
        </div>
      </div>

      <div class="row cards horizontal-scroll">
        <div class="col-md-4 card-wrapper" v-for="(step, index) in steps" :key="index">
          <CardItem :number="`0${index + 1}`" :title="step.title" :description="step.description" />
        </div>
      </div>
      <div class="row">
        <PageBanner :src="Banner03" alt="Image showing a winding path going up a mountain" lazy />
      </div>
    </div>
  </section>
</template>

<script setup>
import SimpleButton from '@/components/buttons/SimpleButton.vue'
import CardItem from '@/components/cards/CardItem.vue'
import PageBanner from '@/components/sections/PageBanner.vue'
import Banner03 from '@/assets/images/banner03.png'

const steps = [
  {
    number: '1',
    title: 'Get Started',
    description: 'With our intuitive setup, you’re up and running in minutes.',
  },
  {
    number: '2',
    title: 'Customize and Configure',
    description: 'Adapt Area to your specific requirements and preferences.',
  },
  {
    number: '3',
    title: 'Grow Your Business',
    description: 'Make informed decisions to exceed your goals.',
  },
]
</script>
