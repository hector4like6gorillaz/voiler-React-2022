import { AxiosInstance, AxiosRequestConfig } from 'axios'

export class API {
  api: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.api = instance
  }

  get(url: string, options?: AxiosRequestConfig) {
    return this.api.get(url, options)
  }

  post(url: string, data?: any, options?: AxiosRequestConfig) {
    return this.api.post(url, data, options)
  }

  put(url: string, data?: any, options?: AxiosRequestConfig) {
    return this.api.put(url, data, options)
  }
}
