import { authService } from '@/services/authService'
import { useAuthStore } from '@/stores/auth'
import type { LoginForm, LoginFormErrors } from '@/types/auth'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { validatePhone, validatePassword } from '@/utils/validators'

export function useLoginForm() {
  const router = useRouter()
  const authStore = useAuthStore()

  const form: LoginForm = reactive({
    phone: '',
    password: '',
    rememberMe: false,
  })

  const errors: LoginFormErrors = reactive({
    phone: '',
    password: '',
  })

  const serverError = ref('')
  const loading = ref(false)

  const validatePhoneField = () => {
    errors.phone = validatePhone(form.phone)
  }
  const validatePasswordField = () => {
    errors.password = validatePassword(form.password)
  }

  const isValid = () => {
    validatePhoneField()
    validatePasswordField()
    return !errors.phone && !errors.password
  }

  const handleSubmit = async () => {
    console.log('Submitting form with:', form)
    serverError.value = ''
    if (!isValid()) return

    try {
      loading.value = true
      const user = await authService.login(form.phone, form.password)
      authStore.login(user)
      router.push('/')
    } catch (e: any) {
      serverError.value = e.message
    } finally {
      loading.value = false
    }
  }

  return {
    handleSubmit,
    serverError,
    form,
    errors,
    validatePhone: validatePhoneField,
    validatePassword: validatePasswordField,
    loading,
  }
}
