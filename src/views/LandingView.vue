<script setup lang="ts">
import HeroSection from '@/components/landing/HeroSection.vue'
import ServiceSection from '@/components/landing/ServiceSection.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import { serviceSections } from '@/data/service-sections'
import FaqSection from '@/components/landing/FaqSection.vue'
import TaxCategories from '@/components/landing/TaxCategories.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
</script>

<template>
  <div class="bg-[#f5f5f5] w-full min-h-screen flex flex-col">
    <AppHeader />
    <AppNavbar />
    <HeroSection />
    <ServiceSection :sections="serviceSections" />
    <TaxCategories />
    <FaqSection />
    <AppFooter />
  </div>
</template>
