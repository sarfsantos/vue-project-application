<template>
  <nav class="main-menu">
    <div class="menu-container">
      <!-- hamburguer shows on mobile -->
      <button class="hamburger-menu" @click="toggleMenu" aria-label="Toggle menu">
        <span class="material-icons-round">{{ isOpen ? 'close' : 'menu' }}</span>
      </button>

      <!-- menu list -->
      <ul :class="{ open: isOpen }" class="menu-list">
        <li><a class="menu-item" href="#benefits">Benefits</a></li>
        <li><a class="menu-item" href="#specifications">Specifications</a></li>
        <li><a class="menu-item" href="#how-to">How-to</a></li>
        <li><a class="menu-item" href="#contact-us">Contact Us</a></li>

        <!-- button only visible in mobile -->
        <li class="button-wrapper mobile-only-button">
          <PrimaryButton
            buttonText="Learn More"
            buttonColor="bg-primary"
            buttonHoverColor="bg-primary-hover"
            textColor="white-100"
            :showIcon="true"
            @click="handleClick"
          />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'

const emit = defineEmits(['toggle-menu'])

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
  emit('toggle-menu', isOpen.value)
}

function handleClick() {
  console.log('Clicked!')
}
</script>
