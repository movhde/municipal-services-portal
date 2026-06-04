import type { ServiceCardTheme, ServiceSections } from '@/types/service-section'

export const serviceSections: ServiceSections = [
  {
    tagTitle: 'ثبت درخواست های شهرسازی',
    sectionTitle: 'در چه مرحله ای از ساخت هستید؟',
    cards: [
      {
        title: 'پیش از ساخت',
        image: 'beforeBuild.svg',
        theme: 'before-build',
        items: [
          {
            title: 'صدور پروانه',
            icon: 'file-edit',
          },
          {
            title: 'توقف مجوز کسب و پیشه',
            icon: 'circle-fill',
          },
          {
            title: 'دریاقت مفاصا',
            icon: 'file-plus',
          },
        ],
      },
      {
        title: 'درحال ساخت',
        image: 'underConstruction.svg',
        theme: 'under-construction',
        items: [
          {
            title: 'تمدید/تجدید پروانه',
            icon: 'file-plus',
          },
          {
            title: 'اصلاح پروانه',
            icon: 'file-plus',
          },
          {
            title: 'عدم خلاف',
            icon: 'file-plus',
          },
        ],
      },
      {
        title: 'پس از ساخت',
        image: 'afterBuild.svg',
        theme: 'after-build',
        items: [
          {
            title: 'توسعه بنا/اضافه اشکوب',
            icon: 'building',
          },
          {
            title: 'پایان کار',
            icon: 'home',
          },
          {
            title: 'تعلیق مجوز کسب و پیشه',
            icon: 'file-plus',
          },
        ],
      },
      {
        title: 'سایر درخواست‌ها',
        image: 'others.svg',
        theme: 'other',
        items: [
          {
            title: 'استعلام',
            icon: 'search-plus',
          },
        ],
      },
    ],
  },
  {
    tagTitle: 'ثبت درخواست های تجاری',
    sectionTitle: 'صاحب کسب و کار هستید؟',
    cards: [
      {
        title: 'فرآیندهای صنفی',
        image: 'businessProcess.svg',
        theme: 'business-process',
        items: [],
      },
      {
        title: 'بازرگانی و بهره‌بردرای',
        image: 'commercial.svg',
        theme: 'commercial',
        items: [],
      },
    ],
  },
]

export const themeMap: Record<
  ServiceCardTheme,
  {
    text: string
    bg: string
  }
> = {
  'before-build': {
    text: 'text-[#249a86]',
    bg: 'bg-[#249a86]',
  },

  'under-construction': {
    text: 'text-[#4977D1]',
    bg: 'bg-[#4977D1]',
  },

  'after-build': {
    text: 'text-[#F5A623]',
    bg: 'bg-[#F5A623]',
  },

  other: {
    text: 'text-[#28C3D4]',
    bg: 'bg-[#28C3D4]',
  },

  'business-process': {
    text: 'text-[#F5A623]',
    bg: 'bg-[#F5A623]',
  },

  commercial: {
    text: 'text-[#8a5cf5]',
    bg: 'bg-[#8a5cf5]',
  },

  default: {
    text: 'text-[#6d29d9]',
    bg: 'bg-[#6d29d9]',
  },
}
