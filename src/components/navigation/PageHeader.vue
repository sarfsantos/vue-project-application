<template>
  <section class="top-header-navigation" :class="{ 'menu-open': isMenuOpen }">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="d-flex flex-header">
            <p class="subheading-1">Area</p>
            <div class="menu-fixed-wrapper">
              <PageMenu @toggle-menu="handleToggleMenu" />
            </div>
            <ModalButton
              customClass="button-only-desktop"
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
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import PageMenu from '@/components/navigation/PageMenu.vue'
import ModalButton from '@/components/buttons/ModalButton.vue'

const isMenuOpen = ref(false)

function handleToggleMenu(open) {
  isMenuOpen.value = open
}
</script>
