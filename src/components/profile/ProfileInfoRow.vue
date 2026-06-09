<script setup lang="ts">
defineProps<{
  label: string
  value?: string
}>()
</script>

<template>
  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-4 md:p-6">
    <span class="font-medium text-slate-500">
      {{ label }}
    </span>

    <span class="font-semibold break-all">
      {{ value || '-' }}
    </span>
  </div>
</template>
