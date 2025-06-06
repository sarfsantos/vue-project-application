<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="close-btn" @click="close">
        <span class="material-icons-round">close</span>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:visible'])

function close() {
  emit('update:visible', false)
}
</script>
