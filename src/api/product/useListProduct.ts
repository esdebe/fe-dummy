import { useQuery } from '@tanstack/react-query'
import { api } from '@helpers/api'
import { AxiosResponse } from 'axios'
import { PATH } from './constant'
import { PaginatedProduct } from './type'

export const useListProduct = () => {
  return useQuery({
    queryFn: async () => {
      const { data } = await api.get<any, AxiosResponse<PaginatedProduct>, any>(PATH, {
        params: {
          page: '',
          per_page: 15,
        },
      })
      return data
    },
    queryKey: [PATH],
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })
}
