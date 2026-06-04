<script setup lang="ts">
import { computed, ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import { Button } from 'primevue'

import SectionDivider from './SectionDivider.vue'
import { faqItems } from '@/data/faq-items'

const isExpanded = ref(false)

const visibleFaqs = computed(() => {
  return isExpanded.value ? faqItems : faqItems.slice(0, 5)
})

const hasMoreFaqs = computed(() => {
  return faqItems.length > 5
})

const showMore = () => {
  isExpanded.value = true
}

const showLess = () => {
  isExpanded.value = false
}
</script>

<template>
  <section class="w-full p-4 md:p-8 flex flex-col gap-8">
    <SectionDivider
      section-title="سوالات متداول"
      title-color="text-[#249a86]"
      title-size="text-2xl"
    />

    <div class="w-full md:px-16">
      <div class="w-full bg-[#fafafa] rounded-lg py-4 md:py-10 px-4 md:px-8 flex flex-col gap-4">
        <Accordion :value="null" class="flex flex-col gap-4">
          <AccordionPanel v-for="item in visibleFaqs" :key="item.id" :value="item.id">
            <AccordionHeader class="bg-transparent! border-0!">
              <span class="text-xs md:text-base text-black font-bold">
                {{ item.question }}
              </span>
            </AccordionHeader>

            <AccordionContent class="border-0! border-none! rounded-lg!">
              <div class="bg-white rounded-lg pt-6 pb-2">
                <p class="text-sm md:text-base text-gray-500">
                  {{ item.answer }}
                </p>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <div v-if="hasMoreFaqs" class="flex justify-center">
          <Button
            v-if="!isExpanded"
            severity="secondary"
            class="w-full gap-2 text-sm! md:text-base!"
            @click="showMore"
          >
            مشاهده بیشتر
            <i class="pi pi-chevron-down" style="font-size: 0.7rem" />
          </Button>

          <Button
            v-else
            severity="secondary"
            class="w-full gap-2 text-sm! md:text-base!"
            @click="showLess"
          >
            نمایش کمتر
            <i class="pi pi-chevron-up" style="font-size: 0.7rem" />
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
