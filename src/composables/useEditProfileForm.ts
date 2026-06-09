import { authService } from '@/services/authService'
import { useAuthStore } from '@/stores/auth'
import { reactive, ref } from 'vue'

export function useProfileForm() {
  const authStore = useAuthStore()
  const editForm = reactive({
    firstName: '',
    lastName: '',
    phone: '',
    nationalCode: '',
    email: '',
  })

  const isEditing = ref(false)

  const startEdit = () => {
    const user = authStore.user
    if (!user) return

    editForm.firstName = user.firstName
    editForm.lastName = user.lastName
    editForm.email = user.email
    editForm.phone = user.phone
    editForm.nationalCode = user.nationalCode

    isEditing.value = true
  }

  const saveProfile = async () => {
    if (!authStore.user) return

    try {
      const updatedUser = await authService.updateUser(authStore.user?.id, editForm)
      authStore.login(updatedUser)

      isEditing.value = false
    } catch (error) {
      console.error(error)
    }
  }

  const cancelEdit = () => {
    isEditing.value = false
  }

  return {
    isEditing,
    editForm,
    startEdit,
    saveProfile,
    cancelEdit,
  }
}
