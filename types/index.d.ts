declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    __user?: User
  }
}

export type District = {
  id: string
  name: string
}

export type User = {
  id: string
  email: string
  emailVerified?: boolean
  name?: string
  nickname?: string
  picture?: string
  sid?: string
  sub?: string
  description?: string
  district: District
  updated_at?: string
}

export type Genre = {
  id: string
  name: string
  slug: string

}

export type Book = {
  id: number
  title: string
  author?: string
  price: number
  originalPrice?: number
  description: string
  pictures: string[]
  isSold: boolean
  genre: Genre
  user: User
}
