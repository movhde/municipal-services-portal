<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import ProfileSidebar from '@/components/profile/ProfileSidebar.vue'
import ProfileAvatarCard from '@/components/profile/ProfileAvatarCard.vue'
import ProfileInfoCard from '@/components/profile/ProfileInfoCard.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-50 p-3 md:p-6">
    <div class="mb-6 md:mb-10">
      <AppHeader />
    </div>

    <div class="flex flex-col lg:flex-row gap-6">
      <ProfileSidebar />

      <div class="flex-1 rounded-3xl bg-white p-4 md:p-6 lg:p-10 shadow-sm">
        <div class="mb-8">
          <h1 class="text-2xl md:text-3xl xl:text-4xl font-extrabold text-[#0F2F75]">
            اطلاعات کاربری
          </h1>

          <p class="mt-2 text-sm md:text-base text-gray-400">اطلاعات شخصی و تماس شما</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          <ProfileAvatarCard />
          <ProfileInfoCard />
        </div>
      </div>
    </div>
  </div>
</template>
