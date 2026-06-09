import { reactive, ref } from 'vue'
import { type SignupFormErrors, type SignupForm } from '@/types/auth'
import { authService } from '@/services/authService'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import {
  validatePhone,
  validatePassword,
  validateFirstName,
  validateLastName,
  validateEmail,
  validateNationalCode,
  validateConfirmPassword,
} from '@/utils/validators'

export function useSignupForm() {
  const authStore = useAuthStore()
  const router = useRouter()

  const form = reactive<SignupForm>({
    firstName: '',
    lastName: '',
    phone: '',
    nationalCode: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const errors = reactive<SignupFormErrors>({
    firstName: '',
    lastName: '',
    phone: '',
    nationalCode: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const serverError = ref('')
  const loading = ref(false)

  const validatePhoneField = () => {
    errors.phone = validatePhone(form.phone)
  }
  const validatePasswordField = () => {
    errors.password = validatePassword(form.password)
  }
  const validateFirstNameField = () => {
    errors.firstName = validateFirstName(form.firstName)
  }
  const validateLastNameField = () => {
    errors.lastName = validateLastName(form.lastName)
  }
  const validateEmailField = () => {
    errors.email = validateEmail(form.email)
  }
  const validateNationalCodeField = () => {
    errors.nationalCode = validateNationalCode(form.nationalCode)
  }
  const validateConfirmPasswordField = () => {
    errors.confirmPassword = validateConfirmPassword(form.password, form.confirmPassword)
  }

  const isValid = () => {
    validatePhoneField()
    validatePasswordField()
    validateFirstNameField()
    validateLastNameField()
    validateEmailField()
    validateNationalCodeField()
    validateConfirmPasswordField()
    return (
      !errors.phone &&
      !errors.password &&
      !errors.firstName &&
      !errors.lastName &&
      !errors.email &&
      !errors.confirmPassword &&
      !errors.nationalCode
    )
  }

  const handleSubmit = async () => {
    serverError.value = ''
    if (!isValid()) return

    try {
      loading.value = true
      const user = await authService.signup(form)
      authStore.login(user)
      router.push('/')
    } catch (error) {
      if (error instanceof Error) {
        serverError.value = error.message
      } else {
        serverError.value = 'خطا در ثبت‌نام'
      }
    } finally {
      loading.value = false
    }
  }

  return {
    handleSubmit,
    serverError,
    form,
    errors,
    loading,
    validatePhone: validatePhoneField,
    validatePassword: validatePasswordField,
    validateFirstName: validateFirstNameField,
    validateLastName: validateLastNameField,
    validateEmail: validateEmailField,
    validateConfirmPassword: validateConfirmPasswordField,
    validateNationalCode: validateNationalCodeField,
  }
}
