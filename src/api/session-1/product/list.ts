import { useQuery, QueryFunction } from '@tanstack/react-query'

import { api } from '@helpers/api'

import { PATH, ACTION } from './constant'
import { PaginatedProduct } from './type'

type ListProductQueryKey = [path: string, action: string, page: number, perPage: number]

type ListProduct = QueryFunction<PaginatedProduct, ListProductQueryKey>

export const listProduct: ListProduct = async ({ queryKey }) => {
  const [, , page, per_page] = queryKey

  const { data } = await api.get<PaginatedProduct>(PATH, {
    params: {
      page,
      per_page,
    },
  })

  return data
}

export const useListProduct = (page = 1, perPage = 15) => {
  return useQuery({
    queryFn: listProduct,
    queryKey: [PATH, ACTION.LIST, page, perPage],
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })
}
