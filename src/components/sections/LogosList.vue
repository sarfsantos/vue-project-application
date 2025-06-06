<template>
  <section class="logos-list">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p class="label-1 text-center">Trusted by:</p>
          <ul class="logo-grid">
            <li v-for="(logo, index) in logos" :key="index" class="logo-item">
              <img :src="logo" :alt="`Logo ${index + 1}`" class="logo-img" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import logo1 from '@/assets/images/logos/logo01.png'
import logo2 from '@/assets/images/logos/logo02.png'
import logo3 from '@/assets/images/logos/logo03.png'
import logo4 from '@/assets/images/logos/logo04.png'
import logo5 from '@/assets/images/logos/logo05.png'
import logo6 from '@/assets/images/logos/logo06.png'

const logos = [logo1, logo2, logo3, logo4, logo5, logo6]
</script>
