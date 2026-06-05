import type { FooterItem } from '@/types/footer-item'

export const footerItems: FooterItem[] = [
  {
    id: 1,
    title: 'خدمات رسانه',
    subItems: [
      { id: 1, title: 'نقشه', icon: 'pi pi-map', href: '/' },
      { id: 2, title: 'ثبت درخواست‌های شهرسازی', icon: 'pi pi-file-edit', href: '/' },
      { id: 3, title: 'پرداخت عوارض', icon: 'pi pi-money-bill', href: '/' },
      { id: 4, title: 'گزارش مردمی', icon: 'pi pi-user-edit', href: '/' },
      { id: 5, title: 'تصدیق گواهی', icon: 'pi pi-check-square', href: '/' },
      { id: 6, title: 'خود اظهاری', icon: 'pi pi-file', href: '/' },
      { id: 7, title: 'کیف ملک', icon: 'pi pi-home', href: '/' },
      { id: 8, title: 'پیام‌ها و ابلاغیه‌ها', icon: 'pi pi-envelope', href: '/' },
    ],
  },
  {
    id: 2,
    title: 'لینک‌های مفید',
    subItems: [
      { id: 1, title: 'سازمان مناطق آزاد ایران', icon: 'pi pi-link', href: '/' },
      { id: 2, title: 'منطقه آزاد چابهار', icon: 'pi pi-link', href: '/' },
      { id: 3, title: 'شورای عالی مناطق آزاد', icon: 'pi pi-link', href: '/' },
      { id: 4, title: 'پایگاه خبری مناطق آزاد', icon: 'pi pi-link', href: '/' },
      {
        id: 5,
        title: 'سازمان سرمایه‌گذاری و کمک‌های اقتصادی و فنی',
        icon: 'pi pi-link',
        href: '/',
      },
    ],
  },
  {
    id: 3,
    title: 'تماس با ما',
    subItems: [
      { id: 1, title: '۰۵۴۳۵۳۱۲۲۰۰', icon: 'pi pi-phone', href: '/' },
      { id: 2, title: '۳۰۰۰۵۰۵۱', icon: 'pi pi-phone', href: '/' },
      { id: 3, title: '۰۵۴۳۵۳۱۲۲۲۹', icon: 'pi pi-phone', href: '/' },
      { id: 4, title: 'info@cfzo.ir', icon: 'pi pi-envelope', href: '/' },
      { id: 5, title: 'شورای عالی مناطق آزاد', icon: 'pi pi-map-marker', href: '/' },
      { id: 6, title: 'شناسه ملی سازمان: ۱۰۱۰۰۴۰۴۲۰۰', icon: 'pi pi-tag', href: '/' },
    ],
  },
]
