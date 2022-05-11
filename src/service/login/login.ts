import { IDataType, ILoginResult } from '@/store/login/types'
import httpRequest from '../index'
import { IAccount } from './types'

enum LoginApi {
  AccountLogin = '/login'
}

export function accoutLoginRequest(account: IAccount) {
  return httpRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}
