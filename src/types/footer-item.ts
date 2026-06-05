export interface FooterSubItem {
  id: number
  title: string
  icon: string
  href: string
}

export interface FooterItem {
  id: number
  title: string
  subItems: FooterSubItem[]
}
