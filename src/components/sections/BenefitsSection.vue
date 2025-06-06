<template>
  <section class="benefits-section text-left" id="benefits">
    <div class="head-benefits">
      <span class="label-2">Benefits</span>
      <h2 class="heading-2">We’ve cracked the code.</h2>
      <p class="body-1">Area provides real insights, without the data overload.</p>
    </div>

    <div class="benefits-list">
      <TopicItem
        v-for="(benefit, index) in benefits"
        :key="index"
        :icon="benefit.icon"
        :title="benefit.title"
        :description="benefit.description"
      />
    </div>
    <PageBanner :src="Banner01" alt="Illustration showing analytics and growth" lazy />
  </section>
</template>

<script setup>
import TopicItem from '@/components/cards/TopicItem.vue'
import PageBanner from '@/components/sections/PageBanner.vue'
import Banner01 from '@/assets/images/banner01.png'

const benefits = [
  {
    icon: 'cable',
    title: 'Amplify Insights',
    description:
      'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.',
  },
  {
    icon: 'public',
    title: 'Control Your Global Presence',
    description:
      'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.',
  },
  {
    icon: 'record_voice_over',
    title: 'Remove Language Barriers',
    description:
      'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.',
  },
  {
    icon: 'show_chart',
    title: 'Visualize Growth',
    description:
      'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.',
  },
]
</script>
