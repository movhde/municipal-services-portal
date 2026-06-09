import { ref } from 'vue'

export function useAvatarUpload() {
  const avatarPreview = ref<string>('')
  const error = ref<string>('')

  const clearError = () => {
    error.value = ''
  }

  const reset = () => {
    avatarPreview.value = ''
    error.value = ''
  }
  const handleImageUpload = (event: Event) => {
    error.value = ''

    const target = event.target as HTMLInputElement
    const file = target.files?.[0]

    target.value = ''

    if (!file) return

    if (!file.type.startsWith('image/')) {
      error.value = 'فقط فایل تصویری مجاز است'
      return
    }

    if (file.size > 2 * 1024 * 1024) {
      error.value = 'حداکثر حجم تصویر 2 مگابایت است'
      return
    }

    const reader = new FileReader()

    reader.onload = () => {
      avatarPreview.value = reader.result as string
    }

    reader.onerror = () => {
      error.value = 'خطا در خواندن فایل'
    }

    reader.readAsDataURL(file)
  }

  return {
    avatarPreview,
    error,
    handleImageUpload,
    reset,
    clearError,
  }
}
