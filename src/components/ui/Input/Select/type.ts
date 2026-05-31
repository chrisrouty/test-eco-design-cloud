import { SelectHTMLAttributes } from 'react'

export type SelectSize = 'sm' | 'md'

export type SelectOption<Value extends string = string> = {
  label: string
  value: Value
}

export interface SelectProps<Value extends string = string>
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'size'> {
  options: SelectOption<Value>[]
  value: Value
  onChange: (value: Value) => void
  size?: SelectSize
}
