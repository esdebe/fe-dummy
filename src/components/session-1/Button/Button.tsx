import { useButton } from '@mui/base'
import clsx from 'clsx'
import * as React from 'react'

import classes from './Button.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

type Ref = HTMLButtonElement

export const Button = React.forwardRef<Ref, Props>((props, ref) => {
  const { children, className, type, ...restProps } = props
  const { focusVisible, getRootProps, active, disabled } = useButton({
    ...restProps,
    ref,
  })

  return (
    <button
      {...getRootProps()}
      type={type || 'button'} // eslint-disable-line react/button-has-type
      className={clsx({
        buttonRoot: true,
        [classes.root]: true,
        [classes.focusVisible]: focusVisible,
        [classes.active]: active,
        [classes.disabled]: disabled,
        [`${className}`]: className,
      })}
    >
      <span className={clsx({ [classes.ripple]: true, [classes.activeRipple]: active })} />
      {children}
    </button>
  )
})
