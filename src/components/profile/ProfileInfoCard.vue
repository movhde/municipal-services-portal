<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import ProfileInfoRow from './ProfileInfoRow.vue'
import { useProfileForm } from '@/composables/useEditProfileForm.ts'
import { InputText } from 'primevue'

const authStore = useAuthStore()
const { isEditing, editForm, saveProfile, cancelEdit, startEdit } = useProfileForm()

const fullName = computed(() => {
  const user = authStore.user

  if (!user) return ''

  return `${user.firstName} ${user.lastName}`
})
</script>

<template>
  <div class="lg:col-span-8 order-2 lg:order-1">
    <div v-if="isEditing" class="space-y-5 rounded-3xl border border-slate-200 p-6">
      <div class="grid md:grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-500"> نام </label>

          <InputText v-model="editForm.firstName" class="w-full" />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-500"> نام خانوادگی </label>

          <InputText v-model="editForm.lastName" class="w-full" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-500"> شماره موبایل </label>

        <InputText v-model="editForm.phone" class="w-full" />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-500"> کد ملی </label>

        <InputText v-model="editForm.nationalCode" class="w-full" />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-500"> ایمیل </label>

        <InputText v-model="editForm.email" class="w-full" />
      </div>
    </div>

    <div
      v-else
      class="divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200"
    >
      <ProfileInfoRow label="نام و نام خانوادگی" :value="fullName" />
      <ProfileInfoRow label="کد ملی" :value="authStore.user?.nationalCode" />
      <ProfileInfoRow label="شماره موبایل" :value="authStore.user?.phone" />
      <ProfileInfoRow label="ایمیل" :value="authStore.user?.email" />
    </div>

    <div v-if="isEditing" class="mt-6 flex flex-col md:flex-row gap-3">
      <button
        @click="saveProfile"
        class="w-full rounded-2xl bg-[#0A43D1] py-4 font-bold text-white hover:bg-[#0836aa] transition cursor-pointer"
      >
        ذخیره
      </button>

      <button
        @click="cancelEdit"
        class="w-full rounded-2xl bg-[#828898] py-4 font-bold text-white hover:bg-[#565963] transition cursor-pointer"
      >
        انصراف
      </button>
    </div>

    <button
      v-else
      @click="startEdit"
      class="mt-6 w-full rounded-2xl bg-[#0A43D1] py-4 font-bold text-white hover:bg-[#0836aa] transition cursor-pointer"
    >
      <i class="pi pi-pencil ml-2"></i>
      ویرایش اطلاعات
    </button>
  </div>
</template>
