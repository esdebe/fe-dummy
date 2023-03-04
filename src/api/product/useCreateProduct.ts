import { api } from '@helpers/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { PATH } from './constant'
import { CreateProduct, Product } from './type'

export const useCreateProduct = () => {
  const client = useQueryClient()

  return useMutation({
    mutationFn: async (product: CreateProduct) => {
      const { data } = await api.post<CreateProduct, AxiosResponse<Product>>(PATH, product)
      console.log({ data }) // eslint-disable-line
      return data
    },
    onSuccess: () => {
      client.refetchQueries({ queryKey: [PATH] })
    },
  })
}
