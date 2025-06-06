<template>
  <!--renderize when url is internal-->
  <router-link
    v-if="isInternal"
    :to="to"
    class="button-wrapper"
    :class="buttonColor"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <p class="button-text button-1" :class="textColor">{{ buttonText }}</p>
  </router-link>

  <!--renderize when url is external-->
  <a
    v-else-if="isExternal"
    :href="to"
    class="button-wrapper"
    :class="buttonColor"
    target="_blank"
    rel="noopener"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <p class="button-text button-1" :class="textColor">{{ buttonText }}</p>
  </a>
  <!--renderize for local actions-->
  <div
    v-else
    class="button-wrapper"
    :class="buttonColor"
    @click="handleClick"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <p class="button-text button-1" :class="textColor">{{ buttonText }}</p>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  buttonText: {
    type: String,
    default: 'Learn more',
  },
  buttonColor: {
    type: String,
    default: 'bg-primary',
  },
  textColor: {
    type: String,
    default: 'white-100',
  },
  to: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(['click'])

const isExternal = computed(() => props.to?.startsWith('http'))
const isInternal = computed(() => props.to && !isExternal.value)

function handleClick(event) {
  if (!props.to) {
    emit('click', event)
  }
}
</script>
