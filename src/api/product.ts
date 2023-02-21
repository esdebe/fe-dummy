import { get, post } from '../helpers/api'
import * as path from '../helpers/contants/path'

const SEARCH_PATH = '/search'
const ADD_PATH = 'add'

export const getProducts = (params: any) => {
  return get(path.PRODUCT, {
    params
  })
}

export const getSearchProducts = (params: any) => {
  const url = `${path.PRODUCT}/${SEARCH_PATH}`

  return get(url, {
    params
  })
}

export const postProduct = (params: any) => {
  const url = `${path.PRODUCT}/${ADD_PATH}`

  return post(url, {
    params
  })
}
