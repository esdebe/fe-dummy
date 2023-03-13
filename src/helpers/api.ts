import Axios from 'axios'
import qs from 'qs'

import { apiBaseURL, authBaseURL } from './env'

const paramsSerializer = (params: unknown) => qs.stringify(params, { encode: false })

export const api = Axios.create({ baseURL: apiBaseURL, paramsSerializer })

export const auth = Axios.create({ baseURL: authBaseURL, paramsSerializer })
