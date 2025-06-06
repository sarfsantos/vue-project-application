<template>
  <section class="slide-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 text-left">
          <h2 class="heading-2">See the Big Picture</h2>
          <p class="body-1">
            Area turns your data into clear, vibrant visuals that show you exactly what's happening
            in each region.
          </p>
          <ul class="list-items">
            <li>
              <strong class="number">01</strong>
              <span class="body-1">Spot Trends in Seconds: No more digging through numbers.</span>
            </li>
            <li>
              <strong class="number">02</strong>
              <span class="body-1"
                >Get Everyone on the Same Page: Share easy-to-understand reports with your
                team.</span
              >
            </li>
            <li>
              <strong class="number">03</strong>
              <span class="body-1"
                >Make Presentations Pop: Interactive maps and dashboards keep your audience
                engaged.</span
              >
            </li>
            <li>
              <strong class="number">04</strong>
              <span class="body-1"
                >Your Global Snapshot: Get a quick, clear overview of your entire operation.</span
              >
            </li>
          </ul>
          <SimpleButton
            buttonText="Discover More"
            buttonColor="green-100"
            textColor="white-text-100"
            to="https://plugin-value-scrum.figma.site/"
          />
        </div>
        <div class="col-lg-6">
          <SlideImage />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import SlideImage from '@/components/sections/SlideImage.vue'
import SimpleButton from '@/components/buttons/SimpleButton.vue'
</script>
