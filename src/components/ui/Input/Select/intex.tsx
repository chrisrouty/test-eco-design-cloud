import clsx from 'clsx'
import { ChangeEvent, JSX, useCallback } from 'react'
import { SelectProps, SelectSize } from './type'

const sizeStyles: Record<SelectSize, string> = {
  sm: 'h-8 rounded-sm px-3 text-xs',
  md: 'h-10 rounded-lg px-3 text-sm',
}

export const Select = <Value extends string>({
  options,
  value,
  onChange,
  size = 'sm',
  className,
  ...props
}: SelectProps<Value>): JSX.Element => {

  const handleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Value)
  }, [onChange])

  return (
    <select
      className={clsx(
        'border border-white/10 bg-white/10 text-content-main transition-colors cursor-pointer',
        'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        sizeStyles[size],
        className,
      )}
      onChange={handleChange}
      value={value}
      {...props}
    >
      { options.map((option) => (
        <option className="bg-background text-content-main" key={option.value} value={option.value}>
          {option.label}
        </option>
      )) }
    </select>
  )
}
