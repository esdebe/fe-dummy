import { useMutation, useQueryClient, MutationFunction } from '@tanstack/react-query'

import { api } from '@helpers/api'

import { PATH, ACTION } from './constant'
import { CreateProductParams, Product } from './type'

type CreateProduct = MutationFunction<Product, CreateProductParams>

export const createProduct: CreateProduct = async (product) => {
  const { data } = await api.post<Product>(PATH, product)

  return data
}

export const useCreateProduct = () => {
  const client = useQueryClient()

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => client.refetchQueries({ queryKey: [PATH, ACTION.LIST] }),
  })
}
