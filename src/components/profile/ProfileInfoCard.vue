<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import ProfileInfoRow from './ProfileInfoRow.vue'

const authStore = useAuthStore()

const fullName = computed(() => {
  const user = authStore.user

  if (!user) return ''

  return `${user.firstName} ${user.lastName}`
})
</script>

<template>
  <div class="lg:col-span-8 order-2 lg:order-1">
    <div class="divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200">
      <ProfileInfoRow label="نام و نام خانوادگی" :value="fullName" />

      <ProfileInfoRow label="کد ملی" :value="authStore.user?.nationalCode" />

      <ProfileInfoRow label="شماره موبایل" :value="authStore.user?.phone" />

      <ProfileInfoRow label="ایمیل" :value="authStore.user?.email" />
    </div>

    <button
      class="mt-6 w-full rounded-2xl bg-[#0A43D1] py-4 font-bold text-white hover:bg-[#0836aa] transition cursor-pointer"
    >
      <i class="pi pi-pencil ml-2"></i>
      ویرایش اطلاعات
    </button>
  </div>
</template>
