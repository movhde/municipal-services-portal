<script setup lang="ts">
import 'primeicons/primeicons.css'
import type { ServiceCard } from '@/types/service-section'
import { themeMap } from '@/data/service-sections'
import AnimatedCard from '../ui/AnimatedCard.vue'

defineProps<{
  cards: ServiceCard[]
}>()
</script>

<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 w-full">
    <AnimatedCard
      v-for="(card, i) in cards"
      :key="card.title"
      :style="{ transitionDelay: `${i * 80}ms` }"
      class="bg-white border border-gray-200 flex flex-col gap-2 rounded-xl"
    >
      <div class="flex flex-col items-center gap-4 p-2 md:p-6">
        <div class="w-20 h-20 md:w-32 md:h-32">
          <img :src="`images/${card.image}`" />
        </div>
        <div :class="`w-full h-0.5 flex items-center justify-center ${themeMap[card.theme].bg}`">
          <span
            :class="`px-2 bg-white text-base md:text-lg font-bold ${themeMap[card.theme].text}`"
            >{{ card.title ?? 'ثبت درخواست' }}</span
          >
        </div>
      </div>

      <div class="flex flex-col">
        <template v-if="card.items.length">
          <div
            v-for="item in card.items"
            :key="item.title"
            class="flex gap-2 items-center border-b border-gray-200 p-2 md:px-6 md:py-4 cursor-pointer"
          >
            <i :class="`pi pi-${item.icon} ${themeMap[card.theme].text}`"></i>
            <span class="text-black text-xs md:text-sm">
              {{ item.title }}
            </span>
          </div>
        </template>

        <div v-else class="w-full p-3 bg-[#f5f5f5] flex items-center justify-center cursor-pointer">
          <div
            class="w-full bg-white shadow-md flex items-center justify-center gap-2 p-2 rounded-lg"
          >
            <span :class="`md:text-sm text-xs ${themeMap[card.theme].text}`"
              >نمایش لیست درخواست‌ها</span
            >
            <i
              :class="`pi pi-chevron-down ${themeMap[card.theme].text}`"
              style="font-size: 0.6rem"
            ></i>
          </div>
        </div>
      </div>
    </AnimatedCard>
  </div>
</template>
