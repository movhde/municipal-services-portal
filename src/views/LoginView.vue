<script setup lang="ts">
import LoginForm from '@/components/form/LoginForm.vue'
import AppLogo from '@/components/ui/AppLogo.vue'
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-center gap-20 md:gap-36 p-4">
    <div
      class="w-full flex md:flex-row flex-col max-w-5xl rounded-2xl overflow-hidden shadow-lg border border-gray-100"
    >
      <!-- right panel -->
      <LoginForm />

      <!-- left panel -->
      <div
        class="w-full lg:w-1/2 bg-linear-to-br from-[#012467] via-[#013a8a] to-[#011a4a] flex flex-col items-start justify-center px-6 py-8 md:p-10 text-right gap-6 border-b lg:border-b-0 lg:border-l border-white/10"
      >
        <AppLogo />

        <div>
          <h1
            class="text-white text-xl md:text-2xl font-black leading-snug text-center md:text-right"
          >
            سامانه یکپارچه خدمات شهرسازی
          </h1>
          <p class="text-white/60 mt-3 md:leading-8 text-sm text-center md:text-right">
            برای دسترسی به خدمات شهرسازی، مدیریت درخواست‌ها و پیگیری امور خود وارد حساب کاربری شوید.
          </p>
        </div>

        <div class="hidden md:flex flex-col gap-3 mt-2">
          <div class="flex items-center gap-2">
            <i class="pi pi-file p-2 rounded-lg bg-cyan-400/20 text-cyan-400"></i>
            <span class="flex items-center gap-2 text-sm text-gray-400"
              >ثبت درخواست‌های شهرسازی</span
            >
          </div>
          <div class="flex items-center gap-2">
            <i class="pi pi-credit-card p-2 rounded-lg bg-cyan-400/20 text-cyan-400"></i>
            <span class="flex items-center gap-2 text-sm text-gray-400">پرداخت آنلاین عوارض</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="pi pi-megaphone p-2 rounded-lg bg-cyan-400/20 text-cyan-400"></i>
            <span class="flex items-center gap-2 text-sm text-gray-400">گزارش مردمی ۱۳۷</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="pi pi-shield p-2 rounded-lg bg-cyan-400/20 text-cyan-400"></i>
            <span class="flex items-center gap-2 text-sm text-gray-400">تصدیق گواهی‌های شهری</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
