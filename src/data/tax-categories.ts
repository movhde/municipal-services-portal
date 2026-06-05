import type { TaxCategory } from '@/types/tax-categories'

export const taxCategories: TaxCategory[] = [
  {
    id: '1',
    title: 'عوارض نوسازی',
    description: 'پرداخت عوارض نوسازی ساختمان',
    image: 'renovationTax.svg',
    href: '/',
  },
  {
    id: '1',
    title: 'عوارض درآمدی',
    description: 'پرداخت عوارض درآمدی',
    image: 'incomeTax.svg',
    href: '/',
  },
  {
    id: '1',
    title: 'عوارض کسب و پیشه',
    description: 'پرداخت عوارض کسب‌وکار و مشاغل',
    image: 'businessTax.svg',
    href: '/',
  },
  {
    id: '1',
    title: 'رهگیری فیش',
    description: 'رهگیری فیش های عوارض',
    image: 'trackReceipt.svg',
    href: '/',
  },
]
