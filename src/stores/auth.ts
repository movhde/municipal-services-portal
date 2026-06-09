import type { User } from '@/types/auth'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)

  const isLoggedIn = computed(() => user.value !== null)

  const login = (userData: User) => {
    user.value = userData

    localStorage.setItem('user', JSON.stringify(userData))
  }

  const logout = () => {
    user.value = null

    localStorage.removeItem('user')
  }

  const initializeAuth = () => {
    const storedUser = localStorage.getItem('user')

    if (storedUser) {
      user.value = JSON.parse(storedUser)
    }
  }

  initializeAuth()

  return { user, isLoggedIn, login, logout, initializeAuth }
})
