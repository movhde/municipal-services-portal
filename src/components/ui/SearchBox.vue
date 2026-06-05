<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
</script>

<template>
  <div
    class="w-full rounded-3xl border border-[#4f9ab1] px-4 py-2 hover:shadow-md hover:shadow-[#d7e7ec] transition-shadow duration-300 flex items-center gap-4 justify-between"
  >
    <input
      v-model="searchQuery"
      placeholder="جستجو در سایت (صفحه، خدمت، عوارض...)"
      class="focus:outline-none w-full placeholder:text-gray-400 text-xs md:text-base"
    />
    <i class="pi pi-search text-[#4f9ab1]"></i>
  </div>
</template>
