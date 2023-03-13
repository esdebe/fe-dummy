import { useMutation, useQueryClient, MutationFunction } from '@tanstack/react-query'

import { api } from '@helpers/api'

import { PATH, ACTION } from './constant'
import { Product, UpdateProductParams } from './type'

type UpdateProduct = MutationFunction<Product, UpdateProductParams>

export const updateProduct: UpdateProduct = async ({ id, ...product }) => {
  const { data } = await api.post<Product>(`${PATH}/${id}`, product)

  return data
}

export const useUpdateProduct = () => {
  const client = useQueryClient()

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => client.refetchQueries({ queryKey: [PATH, ACTION.LIST] }),
  })
}
