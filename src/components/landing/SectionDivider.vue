<script setup lang="ts">
defineProps<{ tagTitle?: string; sectionTitle?: string; titleColor?: string; titleSize?: string }>()
</script>

<template>
  <div class="w-full flex flex-col justify-start">
    <div
      v-if="tagTitle"
      class="w-fit bg-[#249a86] text-[#f5f5f5] text-xs md:text-base px-2 py-1 rounded-tl-xl"
    >
      {{ tagTitle ?? 'ثبت درخواست' }}
    </div>
    <div
      class="w-full h-1 bg-linear-to-r from-10% from-[#c1d6d7] via-50% via-[#249a86] to-90% to-[#c1d6d7] flex items-center justify-center"
    >
      <div
        :class="`hidden md:block bg-[#f5f5f5] p-2 ${titleSize ?? 'text-base'} ${titleColor ?? 'text-gray-400'}`"
      >
        {{ sectionTitle ?? 'در چه مرحله ای هستید؟' }}
      </div>
    </div>
  </div>
</template>
