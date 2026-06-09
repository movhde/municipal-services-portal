<script setup lang="ts">
import SignupForm from '@/components/form/SignupForm.vue'
import AppLogo from '@/components/ui/AppLogo.vue'
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-center gap-20 md:gap-36 p-4">
    <div
      class="w-full flex md:flex-row flex-col max-w-6xl rounded-2xl overflow-hidden shadow-lg border border-gray-100"
    >
      <!-- right panel -->
      <SignupForm />

      <!-- left panel -->
      <div
        class="w-full lg:w-1/2 bg-linear-to-br from-[#012467] via-[#013a8a] to-[#011a4a] flex flex-col md:items-start items-center px-6 py-8 md:p-10 text-right gap-6 border-b lg:border-b-0 lg:border-l border-white/10"
      >
        <AppLogo />

        <div>
          <h1
            class="text-white text-xl md:text-2xl font-black leading-snug text-center md:text-right"
          >
            ایجاد حساب کاربری
          </h1>
          <p class="text-white/70 mt-3 text-sm text-center md:text-right">
            با ایجاد حساب کاربری در سامانه شهروندیار از خدمات آنلاین شهرداری بهره مند شوید.
          </p>
        </div>

        <div class="hidden md:flex flex-col gap-3 mt-2">
          <div class="flex items-center gap-2">
            <i class="pi pi-file p-2 rounded-lg bg-cyan-400/20 text-cyan-400"></i>
            <span class="flex items-center gap-2 text-sm text-gray-400">ثبت درخواست‌های شهرسا</span>
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
        <img src="/images/yazd.svg" class="w-full hidden md:block" />
      </div>
    </div>
  </div>
</template>
