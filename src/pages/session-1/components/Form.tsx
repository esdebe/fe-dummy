import { useCreateProduct } from '@api/session-1/product'
import { Button } from '@components/session-1/Button'
import { Icon } from '@components/session-1/Icon'
import { TextInput } from '@components/session-1/TextInput'
import { useFormStore } from '@store/session-1/form'

export const Form = () => {
  const createProduct = useCreateProduct()

  const name = useFormStore((state) => state.name)
  const setName = useFormStore((state) => state.setName)
  const quantity = useFormStore((state) => state.quantity)
  const setQuantity = useFormStore((state) => state.setQuantity)

  const handleClick = () => createProduct.mutate({ name, quantity })

  return (
    <div>
      <TextInput value={name} onChange={setName} />
      <TextInput value={quantity} onChange={setQuantity} />
      <Button onClick={handleClick}>
        <Icon name="add" />
      </Button>
    </div>
  )
}
