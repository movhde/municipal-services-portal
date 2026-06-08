import LandingView from '@/views/LandingView.vue'
import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingView,
    },
    {
      path: '/login',
      component: LoginView,
    },
  ],
})

export default router
