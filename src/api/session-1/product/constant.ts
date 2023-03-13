export const PATH = '/product' as const

export const ACTION = {
  LIST: 'LIST',
  SHOW: 'SHOW',
} as const

export const DEFAULT_QUERY_CONFIG = {
  staleTime: Infinity,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
}
