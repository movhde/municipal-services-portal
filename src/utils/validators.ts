export function validatePhone(phone: string): string {
  if (!phone.trim()) {
    return 'شماره موبایل را وارد کنید'
  }

  if (!/^09\d{9}$/.test(phone)) {
    return 'شماره موبایل معتبر نیست'
  }

  return ''
}

export function validatePassword(password: string): string {
  if (!password.trim()) {
    return 'رمز عبور را وارد کنید'
  }

  if (password.length < 8) {
    return 'رمز عبور باید حداقل ۸ کاراکتر باشد'
  }

  return ''
}

export function validateFirstName(firstName: string): string {
  if (!firstName.trim()) {
    return 'نام را وارد کنید'
  }

  if (firstName.trim().length < 2) {
    return 'نام باید حداقل ۲ کاراکتر باشد'
  }

  return ''
}

export function validateLastName(lastName: string): string {
  if (!lastName.trim()) {
    return 'نام خانوادگی را وارد کنید'
  }

  if (lastName.trim().length < 2) {
    return 'نام خانوادگی باید حداقل ۲ کاراکتر باشد'
  }

  return ''
}

export function validateEmail(email: string): string {
  if (!email.trim()) {
    return ''
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return emailRegex.test(email) ? '' : 'ایمیل معتبر نیست'
}

export function validateNationalCode(nationalCode: string): string {
  if (!nationalCode.trim()) {
    return 'کد ملی را وارد کنید'
  }

  if (!/^\d{10}$/.test(nationalCode)) {
    return 'کد ملی باید ۱۰ رقم باشد'
  }

  if (/^(\d)\1{9}$/.test(nationalCode)) {
    return 'کد ملی معتبر نیست'
  }

  const checkDigit = Number(nationalCode[9])

  const sum = nationalCode
    .slice(0, 9)
    .split('')
    .reduce((acc, digit, index) => acc + Number(digit) * (10 - index), 0)

  const remainder = sum % 11

  const isValid =
    (remainder < 2 && checkDigit === remainder) || (remainder >= 2 && checkDigit === 11 - remainder)

  return isValid ? '' : 'کد ملی معتبر نیست'
}

export function validateConfirmPassword(password: string, confirmPassword: string): string {
  if (!confirmPassword.trim()) {
    return 'تکرار رمز عبور را وارد کنید'
  }

  if (password !== confirmPassword) {
    return 'رمزهای عبور یکسان نیستند'
  }

  return ''
}
