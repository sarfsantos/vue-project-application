<template>
  <div
    class="button-wrapper"
    :class="buttonColor"
    @click="onClick"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <p class="button-text button-1" :class="textColor">
      {{ buttonText }}
      <span class="material-icons-round icon" aria-hidden="true"> call_made </span>
    </p>
  </div>
</template>

<script setup>
defineProps({
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
})

const emit = defineEmits(['click'])

const onClick = () => {
  emit('click')
}
</script>
