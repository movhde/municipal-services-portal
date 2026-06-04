export interface ServiceSection {
  tagTitle: string
  sectionTitle: string
  cards: ServiceCard[]
}

export interface ServiceCard {
  title: string
  image: string
  theme: ServiceCardTheme
  items: ServiceCardItem[]
}

export interface ServiceCardItem {
  title: string
  icon: string
}

export type ServiceCardTheme =
  | 'before-build'
  | 'under-construction'
  | 'after-build'
  | 'other'
  | 'business-process'
  | 'commercial'
  | 'default'

export type ServiceSections = ServiceSection[]
