import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@helpers/queryClient'
import { Splash } from '@components/Splash'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from '@components/Routes'

export const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Splash>
          <Routes />
        </Splash>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
