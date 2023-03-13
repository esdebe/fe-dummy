import * as React from 'react'

import { useDestroyProduct } from '@api/session-1/product'
import { Product } from '@api/session-1/product/type'
import { Button } from '@components/session-1/Button'
import { Icon } from '@components/session-1/Icon'

import classes from './Item.module.css'

type ItemProps = {
  product: Product
}

export const Item = ({ product }: ItemProps) => {
  const destroyProduct = useDestroyProduct()
  const [isDeleting, setIsDeleting] = React.useState(false)

  const handleDestroy = React.useCallback(() => {
    setIsDeleting(true)
    destroyProduct.mutate(product.id, {
      onSettled: () => setIsDeleting(false),
    })
  }, [destroyProduct, product.id])

  return (
    <tr key={product.id}>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td className={classes.action}>
        <Button disabled={isDeleting} onClick={handleDestroy}>
          <Icon name="clear" />
        </Button>
      </td>
    </tr>
  )
}
