import clsx from 'clsx'

import { ReactComponent as Add } from '@assets/images/session-1/add.svg'
import { ReactComponent as Clear } from '@assets/images/session-1/clear.svg'

import classes from './Icon.module.css'

type IconProps = {
  name: 'add' | 'clear'
}

const icons = {
  add: Add,
  clear: Clear,
} as const

export const Icon = ({ name }: IconProps) => {
  const Icons = icons[name]

  return <Icons className={clsx({ [classes.root]: true })} />
}
