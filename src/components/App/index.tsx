import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

import { Routes } from '@components/Routes'
import { queryClient } from '@helpers/queryClient'

export const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </BrowserRouter>
  )
}
