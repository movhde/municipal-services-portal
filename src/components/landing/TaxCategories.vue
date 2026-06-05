<script setup lang="ts">
import { taxCategories } from '@/data/tax-categories'
import SectionDivider from './SectionDivider.vue'
</script>

<template>
  <section class="w-full p-4 md:p-8 flex flex-col gap-8">
    <SectionDivider
      tag-title="پرداخت عوارض"
      section-title="عوارض ساختمان و کسب‌وکار  خود را آنلاین مدیریت کنید"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
      <RouterLink
        v-for="tax in taxCategories"
        :key="tax.id"
        :to="tax.href"
        class="flex flex-row items-center gap-2 border border-gray-200 bg-white px-2 py-2 md:py-4 rounded-xl"
      >
        <img class="w-20 h-20 md:w-32 md:h-32" :src="`/images/${tax.image}`" />
        <div class="flex flex-col">
          <h2 class="text-blue-950 font-bold text-base md:text-lg">{{ tax.title }}</h2>
          <span class="text-sm md:text-base text-gray-400">{{ tax.description }}</span>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
