export {}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    __user?: User
  }
}

export type User = {
  email: string
  email_verified: boolean
  name: string
  nickname: string
  picture: string
  sid: string
  sub: string
  updated_at: string
}
