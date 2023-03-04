import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@helpers/queryClient'
import { useListProduct, useCreateProduct } from '@api/product'

const List = () => {
  const q = useListProduct()

  return (
    <div>
      <p>{q.isSuccess ? q.data.pagination.total_data : 0}</p>
      {q.isSuccess && (
        <div>
          {q.data.data.map((product) => (
            <div key={product.id}>
              <span>{product.name}</span>
              <span>{product.quantity}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const Form = () => {
  const m = useCreateProduct()

  const handleClick = () => {
    m.mutate({ name: 'name2', quantity: 2 })
  }

  return (
    <div>
      <button onClick={handleClick} type="button">
        Tambah {!!m.isLoading && 'load'}
      </button>
    </div>
  )
}

export const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Form />
      <List />
    </QueryClientProvider>
  )
}
