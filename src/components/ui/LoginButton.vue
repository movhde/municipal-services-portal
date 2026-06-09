<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <div class="w-fit px-3 py-2 flex items-center gap-2 bg-[#d7e7ec] rounded-2xl">
    <i class="pi pi-user text-[#2a7e97]"> </i>
    <div v-if="authStore.isLoggedIn">
      <RouterLink
        to="/user-profile"
        class="text-xs md:text-sm text-gray-500 hover:text-[#2a7e97] transition-colors duration-300 whitespace-nowrap"
        >{{ authStore.user?.firstName + ' ' + authStore.user?.lastName }}</RouterLink
      >
    </div>

    <div v-else class="flex items-center gap-1 text-gray-500">
      <RouterLink
        to="/login"
        class="text-xs md:text-sm hover:text-[#2a7e97] transition-colors duration-300"
        >ورود</RouterLink
      >
      <span>/</span>
      <RouterLink
        to="/register"
        class="text-xs md:text-sm whitespace-nowrap hover:text-[#2a7e97] transition-colors duration-300"
        >ثبت نام</RouterLink
      >
    </div>
  </div>
</template>
