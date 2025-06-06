<template>
  <section class="contact-section" id="contact-us">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="heading-2">{{ title }}</h2>
          <p class="body-1">{{ description }}</p>
          <ModalButton
            buttonText="Learn More"
            buttonColor="bg-primary"
            buttonHoverColor="bg-primary-hover"
            textColor="white-100"
            :showIcon="true"
            @click="openModal"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import ModalButton from '@/components/buttons/ModalButton.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
})
</script>
