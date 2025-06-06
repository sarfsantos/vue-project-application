<template>
  <div class="tabs-container">
    <div class="tab-buttons">
      <button
        class="subheading-2"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
      >
        {{ tab.name }}
      </button>
    </div>

    <ul class="tab-content">
      <li class="body-1" v-for="(feature, i) in tabs[activeTab].features" :key="i">
        {{ feature }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = [
  {
    name: 'Area',
    features: [
      '✓ Ultra-fast browsing',
      '✓ Advanced AI insights',
      '✓ Seamless integration',
      '✓ Advanced AI insights',
      '✓ Ultra-fast browsing',
      '✓ Full UTF-8 support',
    ],
  },
  {
    name: 'WebSurge',
    features: [
      '✓ Fast browsing',
      '✓ Basic AI recommendations',
      '✓ Restricts customization',
      'X Basic AI insights',
      '✓ Fast browsing',
      'X Potential display errors',
    ],
  },
  {
    name: 'HyperView',
    features: [
      'X Moderate speeds',
      'X No AI assistance',
      'X Steep learning curve',
      'X No AI assistance',
      'X Moderate speeds',
      'X Partial UTF-8 support',
    ],
  },
]

const activeTab = ref(0)
</script>
