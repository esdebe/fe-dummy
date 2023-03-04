import { Pagination } from '@helpers/type'

export interface PaginatedProduct {
  data: Product[]
  pagination: Pagination
}

export interface Product {
  id: number
  name: string
  quantity: number
}

export type CreateProduct = Pick<Product, 'name' | 'quantity'>
