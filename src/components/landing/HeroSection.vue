<script setup lang="ts">
import heroSec1 from '@/assets/images/heroSec1.png'
import heroSec2 from '@/assets/images/heroSec2.png'
import heroSec3 from '@/assets/images/heroSec3.png'
</script>

<template>
  <div class="flex md:flex-row flex-col gap-2 lg:gap-4 px-4 lg:px-8">
    <div class="flex-2">
      <img :src="heroSec3" class="rounded-md w-full h-full" />
    </div>
    <div class="flex-1 flex flex-col gap-2 lg:gap-4">
      <img :src="heroSec1" class="rounded-md h-full" />
      <img :src="heroSec2" class="rounded-md h-full" />
    </div>
  </div>
</template>
