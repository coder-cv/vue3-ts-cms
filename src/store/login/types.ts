export interface ILoginState {
  token: string
  userInfo: any
}

export interface ILoginResult {
  id: string
  name: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}
