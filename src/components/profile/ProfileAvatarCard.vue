<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const fullName = computed(() => {
  const user = authStore.user

  if (!user) return ''

  return `${user.firstName} ${user.lastName}`
})
</script>

<template>
  <div class="lg:col-span-4 order-1 lg:order-2">
    <div class="rounded-3xl border border-slate-200 p-6 md:p-8 text-center">
      <img
        src="/images/me.jpg"
        alt="avatar"
        class="mx-auto h-28 w-28 md:h-40 md:w-40 rounded-full object-cover"
      />

      <h3 class="mt-4 text-xl md:text-2xl font-bold text-slate-800">
        {{ fullName }}
      </h3>

      <span class="mt-3 inline-block rounded-full px-4 py-2 text-sm bg-blue-100 text-blue-700">
        کاربر سامانه
      </span>

      <button
        class="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-blue-500 py-3 text-blue-600 hover:bg-blue-50 transition cursor-pointer"
      >
        <i class="pi pi-camera"></i>
        تغییر تصویر پروفایل
      </button>
    </div>
  </div>
</template>
