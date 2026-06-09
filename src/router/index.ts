import LandingView from '@/views/LandingView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import UserProfileView from '@/views/UserProfileView.vue'
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
    {
      path: '/register',
      component: SignupView,
    },
    {
      path: '/user-profile',
      component: UserProfileView,
    },
  ],
})

export default router
