import { memo } from 'react'
import { Select } from '../../../../components/ui/Input/Select/intex'
import { ProductSortProps, ProductSortValue } from './type'

const sortOptions: Array<{
  label: string;
  value: ProductSortValue;
}> = [
  { label: 'Score croissant', value: 'score-asc' },
  { label: 'Score décroissant', value: 'score-desc' },
  { label: 'Nom', value: 'name' },
  { label: 'Date', value: 'date' },
]

export const ProductSort = memo(({ value, onChange }: ProductSortProps) => {

  return (
    <Select
      onChange={onChange}
      options={sortOptions}
      value={value}
      size="md"
    />
  )
})
