const BASE_URL = 'http://localhost:3001'
export const authService = {
  login: async (phone: string, password: string) => {
    try {
      const response = await fetch(`${BASE_URL}/users`)

      if (!response.ok) {
        throw new Error('مشکلی در ارتباط با سرور وجود دارد')
      }

      const data = await response.json()
      const user = data.find((u: any) => u.phone === phone && u.password === password)

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
}
