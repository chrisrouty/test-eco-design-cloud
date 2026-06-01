import { Product } from '../../../../types/products'

export interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  product: Product
}
