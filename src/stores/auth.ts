import type { User } from '@/types/auth'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isLoggedIn = ref(false)

  const login = (userData: User) => {
    user.value = userData
    console.log('User logged in:', user.value)
    isLoggedIn.value = true
  }

  const logout = () => {
    user.value = null
    isLoggedIn.value = false
  }

  return { user, isLoggedIn, login, logout }
})
