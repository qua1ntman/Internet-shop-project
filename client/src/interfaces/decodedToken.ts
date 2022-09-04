export interface IDecodedToken {
  id: number
  chatId: number | null
  email: string
  name: string
  surname: string
  phone: number
  role: string
  subscribed: boolean

  exp: number
  iat: number
}