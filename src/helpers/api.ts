import axios from 'axios'

const axiosApi = axios.create({
  baseURL: 'https://dummyjson.com'
  // headers: {
  //   uid: process.env['NEXT_PUBLIC_CLIENT_ID'],
  //   secret: process.env['NEXT_PUBLIC_CLIENT_SECRET']
  // }
})

axiosApi.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      // Remove sessions
    }
    return Promise.reject(error)
  }
)

export async function get(url: string, config = {}) {
  return await axiosApi.get(url, config).then(response => response)
}

export async function post(url: string, data = {}, config = {}) {
  return await axiosApi.post(url, data, config).then(response => response)
}

export async function formData(
  url: string,
  data = {},
  headers = {},
  method = 'POST'
) {
  const config = { method, url, data, headers }
  return await axiosApi(config).then(response => response)
}

export async function put(url: string, data = {}, config = {}) {
  return await axiosApi.put(url, data, config).then(response => response)
}

export async function del(url: string, config = {}) {
  return await axiosApi.delete(url, config).then(response => response)
}

export async function patch(url: string, data = {}, config = {}) {
  return await axiosApi.patch(url, data, config).then(response => response)
}
