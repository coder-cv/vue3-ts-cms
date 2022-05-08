import HttpRequest from './request'

import { BASE_URL, TIME_OUT } from './request/config'
const httpRequest = new HttpRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
export default httpRequest
