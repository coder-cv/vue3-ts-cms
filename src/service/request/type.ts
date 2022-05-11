import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HTTPRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface HTTPRequestConfig extends AxiosRequestConfig {
  interceptors?: HTTPRequestInterceptors
  showLoading?: boolean
}
