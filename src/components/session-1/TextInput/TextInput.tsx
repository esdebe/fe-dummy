import { useInput } from '@mui/base'
import { unstable_useForkRef as useForkRef } from '@mui/utils'
import clsx from 'clsx'
import * as React from 'react'

import classes from './TextInput.module.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  endAdornment?: React.ReactNode
}

type Ref = HTMLInputElement

export const TextInput = React.forwardRef<Ref, Props>((props, ref) => {
  const { endAdornment, className, ...restProps } = props
  const { getRootProps, getInputProps, disabled } = useInput(restProps)

  const inputProps = getInputProps()

  inputProps.ref = useForkRef(inputProps.ref, ref)

  return (
    <div
      {...getRootProps()}
      className={clsx({
        [classes.root]: true,
        [classes.disabled]: disabled,
        [`${className}`]: className,
      })}
    >
      <input {...restProps} {...inputProps} className={classes.input} />
      {endAdornment}
    </div>
  )
})
