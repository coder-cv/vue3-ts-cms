import { ILoginResult } from '@/store/login/types'
import httpRequest from '../index'
import { IDataType } from '../types'
import { IAccount } from './types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accoutLoginRequest(account: IAccount) {
  return httpRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return httpRequest.get<IDataType>({
    url: LoginAPI.AccountLogin + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return httpRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
