import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/OnePage.vue'
import About from '@/views/PageAbout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
