import { FilterIcon } from 'lucide-react'
import { memo } from 'react'
import { Select } from '../../../../components/ui/Input/Select/intex'
import { ProductFilterProps, ProductScoreFilter } from './type'

const filterOptions: Array<{
  label: string;
  value: ProductScoreFilter;
}> = [
  { label: 'Tous', value: 'all' },
  { label: 'A-B', value: 'A-B' },
  { label: 'C-D', value: 'C-D' },
  { label: 'E', value: 'E' },
]

export const ProductFilter = memo(({ value, onChange }: ProductFilterProps) => {

  return (
    <div className="inline-flex items-center gap-2">
      <FilterIcon aria-hidden="true" className="size-4" />
      <Select
        onChange={onChange}
        options={filterOptions}
        value={value}
        size="md"
      />
    </div>
  )
})
