export type ProductScoreFilter = 'all' | 'A-B' | 'C-D' | 'E'

export interface ProductFilterProps {
  value: ProductScoreFilter
  onChange: (value: ProductScoreFilter) => void
}
