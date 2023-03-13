import { useListProduct } from '@api/session-1/product'

import { Empty } from '../Empty'
import { Item } from '../Item'
import { Loading } from '../Loading'

import classes from './List.module.css'

export const List = () => {
  const listProduct = useListProduct()

  return (
    <div>
      <p>{listProduct.isSuccess ? listProduct.data.pagination.total_data : 0}</p>
      <table className={classes.table}>
        <tbody>
          {listProduct.isSuccess &&
            (listProduct?.data?.pagination?.total_data ? (
              listProduct.data.data.map((product) => <Item key={product.id} product={product} />)
            ) : (
              <Empty />
            ))}
          {listProduct.isLoading ? <Loading /> : null}
        </tbody>
      </table>
    </div>
  )
}
