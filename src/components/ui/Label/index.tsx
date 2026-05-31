import clsx from 'clsx'
import { JSX } from 'react'
import { LabelColor, LabelProps } from './type'

const colorStyles: Record<LabelColor, string> = {
  default: 'text-content-main',
}

export const Label = ({
  color = 'default',
  className,
  children,
  ...props
}: LabelProps): JSX.Element => {
  return (
    <label
      className={clsx(
        'font-medium text-xs',
        colorStyles[color],
        className
      )}
      {...props}
    >
      {children}
    </label>
  )
}
