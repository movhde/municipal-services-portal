import { authService } from '@/services/authService'
import { useAuthStore } from '@/stores/auth'
import type { LoginForm, LoginFormErrors } from '@/types/auth'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

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

  const validatePhone = () => {
    if (!form.phone.trim()) errors.phone = 'شماره موبایل را وارد کنید'
    else if (!/^09\d{9}$/.test(form.phone))
      errors.phone = 'شماره موبایل معتبر نیست (مثال: 09123456789)'
    else errors.phone = ''
  }

  const validatePassword = () => {
    if (!form.password.trim()) errors.password = 'رمز عبور را وارد کنید'
    else if (form.password.length < 8) errors.password = 'رمز عبور باید حداقل ۸ کاراکتر باشد'
    else errors.password = ''
  }

  const isValid = () => {
    validatePhone()
    validatePassword()
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

  return { handleSubmit, serverError, form, errors, validatePhone, validatePassword, loading }
}
