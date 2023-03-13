import { Pagination } from '@helpers/type'

export interface PaginatedProduct {
  data: Product[]
  pagination: Pagination
}

export type ProductId = number

export interface Product {
  id: ProductId
  name: string
  quantity: number
}

export type CreateProductParams = Pick<Product, 'name' | 'quantity'>

export type UpdateProductParams = Product
