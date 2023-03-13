import { useQuery, QueryFunction } from '@tanstack/react-query'

import { api } from '@helpers/api'

import { PATH, ACTION, DEFAULT_QUERY_CONFIG } from './constant'
import { Product, ProductId } from './type'

type ShowProductQueryKey = [path: string, action: string, productId?: ProductId]

type ShowProduct = QueryFunction<Product, ShowProductQueryKey>

export const showProduct: ShowProduct = async ({ queryKey }) => {
  const [path, , productId] = queryKey

  const { data } = await api.get<Product>(`${path}/${productId}`)

  return data
}

export const useShowProduct = (productId?: number) => {
  return useQuery({
    ...DEFAULT_QUERY_CONFIG,
    enabled: productId !== undefined,
    queryFn: showProduct,
    queryKey: [PATH, ACTION.SHOW, productId],
  })
}
