export type ProductSortValue = 'score-asc' | 'score-desc' | 'name' | 'date'

export interface ProductSortProps {
  value: ProductSortValue
  onChange: (value: ProductSortValue) => void
}
