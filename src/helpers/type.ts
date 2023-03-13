export interface Pagination {
  current_page: number
  next_page: number | null
  per_page: number
  prev_page: number | null
  total_data: number
  total_page: number
}

export interface Params {
  page: number
  per_page: number
}
