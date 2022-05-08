import axios, { AxiosResponse } from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

interface HttpRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

interface HttpRequestConfig extends AxiosRequestConfig {
  interceptors?: HttpRequestInterceptors
}

class HttpRequest {
  instance: AxiosInstance
  interceptors?: HttpRequestInterceptors

  constructor(config: HttpRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request(config: HttpRequestConfig) {
    this.instance.request(config).then((res) => {})
  }
}
export default HttpRequest
