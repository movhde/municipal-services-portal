export interface LoginForm {
  phone: string
  password: string
  rememberMe: boolean
}

export type LoginFormErrors = {
  phone?: string
  password?: string
}

export interface User {
  id: number
  firstName: string
  lastName: string
  phone: string
  nationalCode: string
  email: string
  password: string
  avatar?: string
}

export interface SignupForm {
  firstName: string
  lastName: string
  phone: string
  nationalCode: string
  email: string
  password: string
  confirmPassword: string
}

export type SignupFormErrors = {
  firstName?: string
  lastName?: string
  phone?: string
  nationalCode?: string
  email?: string
  password?: string
  confirmPassword?: string
}
