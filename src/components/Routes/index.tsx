import { Routes as BaseRoutes, Route } from 'react-router-dom'

import { NotFound } from '@components/NotFound'
import { Home } from '@pages/home'
import { Session1 } from '@pages/session-1'

export const Routes = () => {
  return (
    <BaseRoutes>
      <Route element={<Session1 />} path="/session-1" />
      <Route element={<Home />} path="/" />
      <Route element={<NotFound />} path="*" />
    </BaseRoutes>
  )
}
