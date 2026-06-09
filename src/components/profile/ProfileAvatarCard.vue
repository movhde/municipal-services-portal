<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useAvatarUpload } from '@/composables/useAvatarUpload'
import { authService } from '@/services/authService'

const authStore = useAuthStore()

const fileInput = ref<HTMLInputElement | null>(null)

const { avatarPreview, error, handleImageUpload, reset } = useAvatarUpload()

const fullName = computed(() => {
  const user = authStore.user
  if (!user) return ''
  return `${user.firstName} ${user.lastName}`
})

const avatarSrc = computed(() => {
  return avatarPreview.value || authStore.user?.avatar || '/images/defaultAvatar.svg'
})
const saveAvatar = async () => {
  if (!authStore.user || !avatarPreview.value) return

  try {
    const updatedUser = await authService.updateUser(authStore.user.id, {
      avatar: avatarPreview.value,
    })

    authStore.login(updatedUser)
    reset()

    if (fileInput.value) {
      fileInput.value.value = ''
    }
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <div class="lg:col-span-4 order-1 lg:order-2">
    <div class="rounded-3xl border border-slate-200 p-6 md:p-8 text-center">
      <img
        :src="avatarSrc"
        alt="avatar"
        class="mx-auto h-28 w-28 md:h-40 md:w-40 rounded-full object-cover"
      />

      <h3 class="mt-4 text-xl md:text-2xl font-bold text-slate-800">
        {{ fullName }}
      </h3>

      <input
        ref="fileInput"
        type="file"
        accept="image/*"
        class="hidden"
        @change="handleImageUpload"
      />

      <span class="mt-3 inline-block rounded-full px-4 py-2 text-sm bg-blue-100 text-blue-700">
        کاربر سامانه
      </span>

      <button
        @click="fileInput?.click()"
        class="mt-5 w-full rounded-xl border border-blue-500 py-3 text-blue-600"
      >
        انتخاب تصویر
      </button>

      <div
        v-if="error"
        class="mt-3 w-full rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-200"
      >
        {{ error }}
      </div>

      <button
        v-if="avatarPreview"
        @click="saveAvatar"
        class="mt-3 w-full rounded-xl bg-blue-600 py-3 text-white"
      >
        ذخیره تصویر
      </button>

      <p class="mt-4 text-xs text-slate-400">JPG, PNG - حداکثر 2MB</p>
    </div>
  </div>
</template>
