export interface Item {
  id: number
  title: string
  icon: string
  link: string
}

export interface NavSubItem {
  id: number
  title: string
  bgColor: string
  icon: string
  link: string
  items: Item[]
}

export interface NavItem {
  id: number
  name: string
  icon: string
  link: string
  subItems: NavSubItem[]
}
