<script setup lang="ts">
defineProps<{
  label: string
  error?: string
}>()
</script>

<template>
  <div class="w-full flex flex-col gap-1.5 sm:h-20">
    <label class="text-sm font-medium text-gray-700">{{ label }}</label>
    <slot />
    <Transition
      enter-active-class="transition-all duration-200"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
    >
      <span v-if="error" class="text-xs text-red-500">
        <i class="pi pi-exclamation-triangle" style="font-size: 0.6rem"></i>
        {{ error }}
      </span>
    </Transition>
  </div>
</template>
