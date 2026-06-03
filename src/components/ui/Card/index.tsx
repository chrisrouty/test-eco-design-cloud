import clsx from 'clsx'
import { JSX } from 'react'
import { CardProps, CardVariant } from './type'

const variantStyles: Record<CardVariant, string> = {
  default: 'border-white/10 bg-white/10',
}

export const Card = ({
  children,
  variant = 'default',
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={clsx(
        'rounded-lg border p-4 text-content-main',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      { children }
    </div>
  )
}
