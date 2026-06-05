<script setup lang="ts">
import 'primeicons/primeicons.css'
import AppLogo from '../ui/AppLogo.vue'
import SearchBox from '../ui/SearchBox.vue'
import LoginButton from '../ui/LoginButton.vue'
</script>

<template>
  <div class="w-full flex items-center gap-2 md:gap-6 px-4 py-4 md:py-2">
    <app-logo />
    <search-box />
    <login-button />
  </div>
</template>
