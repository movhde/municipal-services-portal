<script setup lang="ts">
import { footerItems } from '@/data/footer-items'
import { ref } from 'vue'

const expandedSection = ref<number | null>(null)

const toggle = (id: number) => {
  expandedSection.value = expandedSection.value === id ? null : id
}
</script>

<template>
  <footer class="w-full bg-[#012467] p-6 md:p-8">
    <div class="flex flex-col gap-10 lg:flex-row xl:gap-24">
      <section class="w-full lg:w-1/3 flex flex-col items-center text-center lg:text-right mb-8">
        <h1
          class="bg-linear-to-tr from-cyan-500 via-[#7c96e5] to-[#4ac8e6] bg-clip-text text-transparent font-black text-5xl md:text-6xl leading-normal"
        >
          شهروندیار
        </h1>
        <h3
          class="bg-linear-to-tr from-cyan-500 via-[#7c96e5] to-[#4ac8e6] bg-clip-text text-transparent text-2xl leading-normal tracking-widest"
        >
          خدمتگذار هوشمند شهر
        </h3>
        <p class="hidden md:block text-gray-300 text-sm mt-4 leading-7 text-center lg:text-justify">
          سامانه «شهروندیار» بستر یکپارچه ارائه خدمات شهرسازی و امور مرتبط با املاک و ساخت و ساز به
          شهروندان است در این سامانه حفظ حریم خصوصی و امنیت اطلاعات در اولویت قرار داشته و دسترسی به
          اطلاعات مالکیت و جزئیات املاک صرفاً پس از احراز هویت معتبر و تنها برای مالک امکان پذیر
          است.
        </p>
      </section>

      <section
        class="hidden lg:grid w-full lg:w-2/3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        <div v-for="item in footerItems" :key="item.id" class="flex flex-col gap-4">
          <h2 class="text-white font-bold text-base">{{ item.title }}</h2>
          <div class="flex flex-col gap-2">
            <div v-for="sub in item.subItems" :key="sub.id" class="flex items-center gap-2 group">
              <i :class="`${sub.icon} text-gray-400 group-hover:text-white transition`"></i>
              <RouterLink
                :to="sub.href"
                class="text-gray-300 text-sm group-hover:text-white transition"
                >{{ sub.title }}</RouterLink
              >
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="lg:hidden flex flex-col" dir="rtl">
      <div v-for="item in footerItems" :key="item.id" class="border-b border-white/10">
        <button
          @click="toggle(item.id)"
          class="w-full flex items-center justify-between py-4 text-white font-bold text-base"
        >
          <span>{{ item.title }}</span>
          <i
            class="pi pi-chevron-down text-white/60 transition-transform duration-300"
            :class="{ 'rotate-180': expandedSection === item.id }"
          ></i>
        </button>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 max-h-0"
          enter-to-class="opacity-100 max-h-96"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 max-h-96"
          leave-to-class="opacity-0 max-h-0"
        >
          <div v-if="expandedSection === item.id" class="overflow-hidden pb-4">
            <div class="flex flex-col gap-3">
              <div
                v-for="sub in item.subItems"
                :key="sub.id"
                class="flex items-center gap-2 pr-4 group"
              >
                <i
                  :class="`${sub.icon} text-gray-400 group-hover:text-white transition text-sm `"
                ></i>
                <RouterLink
                  :to="sub.href"
                  class="text-sm text-gray-300 group-hover:text-white transition"
                >
                  {{ sub.title }}
                </RouterLink>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </footer>
</template>
