import axios from 'axios'

const instance = Symbol()
const buildRequest = Symbol()

class HttpProxy {
  constructor (axiosInstance) {
    this[instance] = axiosInstance ? axiosInstance : axios.create()
    this[buildRequest] = async(method, url, params) => {
      try {
        return await this[instance][method](url, params)
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }

  get (url, params) {
    return this[buildRequest]('get', url, params)
  }

  post (url, params) {
    return this[buildRequest]('post', url, params)
  }

  put (url, params) {
    return this[buildRequest]('put', url, params)
  }

  delete (url, params) {
    return this[buildRequest]('delete', url, params)
  }

  withoutPrefix () {
    return new HttpProxy()
  }
}

export const BoilerplateHttp = (headers) => {
  let axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })

  axiosInstance.interceptors.request.use(config => {
    if (headers) {
      config.headers = headers
    }
    return config
  })

  return new HttpProxy(axiosInstance)
}
