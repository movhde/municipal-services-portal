<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const logout = () => {
  authStore.logout()
  router.push('/')
}
</script>

<template>
  <aside
    class="w-full lg:w-72 flex flex-col gap-4 rounded-3xl bg-linear-to-b from-[#012467] to-[#01308A] p-4 lg:p-6 text-white"
  >
    <nav class="flex flex-col gap-2">
      <button
        class="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 cursor-pointer"
      >
        <span>اطلاعات شخصی</span>
        <i class="pi pi-user"></i>
      </button>

      <button
        class="flex items-center justify-between px-5 py-4 hover:bg-white/5 rounded-2xl transition cursor-pointer"
      >
        <span>تغییر رمز عبور</span>
        <i class="pi pi-lock"></i>
      </button>

      <button
        class="flex items-center justify-between px-5 py-4 hover:bg-white/5 rounded-2xl transition cursor-pointer"
      >
        <span>اعلان ها</span>
        <i class="pi pi-bell"></i>
      </button>

      <div class="border-t border-white/20 my-2"></div>

      <button
        @click="logout"
        class="flex items-center justify-between px-5 py-4 hover:bg-red-500/20 rounded-2xl transition cursor-pointer"
      >
        <span>خروج از حساب</span>
        <i class="pi pi-sign-out"></i>
      </button>
    </nav>
  </aside>
</template>
