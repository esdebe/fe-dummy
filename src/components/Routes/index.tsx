import { Routes as BaseRoutes, Route } from 'react-router-dom'

import { Home } from '@pages/example_1/home'
import { NotFound } from '@components/NotFound'

export const Routes = () => {
  return (
    <BaseRoutes>
      <Route element={<Home />} path="/" />
      <Route element={<NotFound />} path="*" />
    </BaseRoutes>
  )
}
