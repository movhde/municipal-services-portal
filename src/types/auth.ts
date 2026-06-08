export interface LoginForm {
  phone: string
  password: string
  rememberMe: boolean
}

export type LoginFormErrors = Partial<LoginForm>

export interface User {
  id: number
  firstName: string
  lastName: string
  phone: string
  nationalCode: string
  email: string
  password: string
}
