<script setup lang="ts">
import HeroSection from '@/components/landing/HeroSection.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
</script>

<template>
  <div class="bg-[#f5f5f5] w-full min-h-screen flex flex-col gap-14">
    <div class="flex flex-col gap-4">
      <AppHeader />
      <HeroSection />
    </div>
  </div>
</template>
