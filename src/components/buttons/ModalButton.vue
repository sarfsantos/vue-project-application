<template>
  <div
    class="button-wrapper"
    :class="buttonColor"
    @click="modalVisible = true"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <p class="button-text button-1" :class="textColor">
      {{ buttonText }}
      <span v-if="showIcon" class="material-icons-round icon" aria-hidden="true"> call_made </span>
    </p>
  </div>
  <PopModal v-model:visible="modalVisible">
    <h2 class="heading-2">Want to learn more?</h2>
    <p class="body-1">We'll get in touch as soon as possivel</p>
    <form @submit.prevent="handleSubmit" class="modal-form">
      <label for="email" class="label-2">Email:</label>
      <div class="input">
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Insert your email here"
          required
        />
      </div>
      <div class="action">
        <button class="submit-modal button-1" type="submit">Submit</button>
      </div>
    </form>
  </PopModal>
</template>

<script setup>
import { ref } from 'vue'
import PopModal from '@/components/modal/PopModal.vue'
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
  showIcon: {
    type: Boolean,
    default: false,
  },
})

const modalVisible = ref(false)
const email = ref('')

function handleSubmit() {
  console.log('Email enviado:', email.value)

  email.value = ''
  modalVisible.value = false
}
</script>
