import type { User } from '@/types/auth'

const BASE_URL = 'http://localhost:3001'

export type CreateUserDto = Omit<User, 'id'>

export const authService = {
  login: async (phone: string, password: string) => {
    try {
      const response = await fetch(`${BASE_URL}/users`)

      if (!response.ok) {
        throw new Error('مشکلی در ارتباط با سرور وجود دارد')
      }

      const data: User[] = await response.json()
      const user = data.find((u) => u.phone === phone && u.password === password)

      if (user) {
        return user
      } else {
        throw new Error('رمز عبور یا شماره موبایل اشتباه است')
      }
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  },
  signup: async (userData: CreateUserDto) => {
    try {
      const checkResponse = await fetch(`${BASE_URL}/users`)
      if (!checkResponse.ok) throw new Error('مشکلی در ارتباط با سرور وجود دارد')

      const users = await checkResponse.json()

      if (users.find((u: any) => u.phone === userData.phone))
        throw new Error('این شماره موبایل قبلا ثبت شده')

      if (users.find((u: any) => u.nationalCode === userData.nationalCode))
        throw new Error('این کد ملی قبلا ثبت شده')

      const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      })

      if (!response.ok) throw new Error('مشکلی در ارتباط با سرور وجود دارد')

      return response.json()
    } catch (error) {
      console.error('Signup error:', error)
      throw error
    }
  },
  updateUser: async (id: number, data: Partial<User>) => {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    return response.json()
  },
}
