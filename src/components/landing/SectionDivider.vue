<script setup lang="ts">
defineProps<{ tagTitle: string; dividerTitle: string }>()
</script>

<template>
  <div class="w-full flex flex-col justify-start px-8">
    <div class="w-fit bg-[#249a86] text-[#f5f5f5] px-2 py-1 rounded-tl-xl">
      {{ tagTitle ?? 'ثبت درخواست' }}
    </div>
    <div
      class="w-full h-1 bg-linear-to-r from-10% from-[#0a0a0a] via-50% via-[#249a86] to-90% to-[#c1d6d7] flex items-center justify-center"
    >
      <div class="text-gray-400 bg-[#f5f5f5] p-2">
        {{ dividerTitle ?? 'در چه مرحله ای هستید؟' }}
      </div>
    </div>
  </div>
</template>
