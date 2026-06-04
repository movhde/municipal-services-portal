<script setup lang="ts">
import type { ServiceSections } from '@/types/service-section.ts'
import SectionDivider from './SectionDivider.vue'
import ServiceCard from './ServiceCard.vue'

defineProps<{
  sections: ServiceSections
}>()
</script>

<template>
  <section
    v-for="section in sections"
    :key="section.tagTitle"
    class="w-full p-4 md:p-8 flex flex-col gap-8"
  >
    <SectionDivider :tag-title="section.tagTitle" :section-title="section.sectionTitle" />
    <ServiceCard :cards="section.cards" />
  </section>
</template>
