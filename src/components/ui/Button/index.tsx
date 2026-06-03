import clsx from 'clsx'
import { JSX } from 'react'
import { ButtonProps, ButtonSize, ButtonVariant } from './type'

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'border border-white/10 bg-primary text-content-main hover:bg-primary-hover focus-visible:ring-primary',
  secondary: 'border border-black/20 bg-white text-black hover:bg-primary-hover focus-visible:ring-white',
  glass: 'border border-white/10 bg-glass/20 text-content-main hover:bg-primary-hover focus-visible:ring-primary',
  outlined: 'border border-white/10 bg-primary text-content-main hover:bg-primary-hover focus-visible:ring-primary',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-[32px] rounded-[8px] p-2 text-xs font-semibold flex items-center gap-2',
  md: 'h-[40px] rounded-[8px] px-4 py-2 text-sm font-semibold flex items-center',
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled,
    ...buttonProps
  } = props

  const classes = clsx(
    'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200',
    'cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:cursor-not-allowed disabled:opacity-50',
    variantStyles[variant],
    sizeStyles[size],
    className,
  )

  return (
    <button
      className={classes}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
