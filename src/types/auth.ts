export interface LoginForm {
  phone: string
  password: string
  rememberMe: boolean
}

export type LoginFormErrors = Partial<LoginForm>
