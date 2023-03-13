import { useMutation, useQueryClient, MutationFunction } from '@tanstack/react-query'

import { api } from '@helpers/api'

import { PATH, ACTION } from './constant'
import { Product, ProductId } from './type'

type DestroyProduct = MutationFunction<Product, ProductId>

export const destroyProduct: DestroyProduct = async (productId) => {
  const { data } = await api.delete<Product>(`${PATH}/${productId}`)

  return data
}

export const useDestroyProduct = () => {
  const client = useQueryClient()

  return useMutation({
    mutationFn: destroyProduct,
    onSuccess: () => client.refetchQueries({ queryKey: [PATH, ACTION.LIST] }),
  })
}
