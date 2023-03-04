import { PropsWithChildren } from 'react'
import { useBootstrap } from '@helpers/bootstrap'

type SplashProps = {}

export const Splash = ({ children }: PropsWithChildren<SplashProps>) => {
  const { isFinished, percentage } = useBootstrap()
  return isFinished ? <div>{children}</div> : <div>Loading {percentage}</div>
}
