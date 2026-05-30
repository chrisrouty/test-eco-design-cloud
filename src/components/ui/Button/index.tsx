import clsx from 'clsx'
import { JSX } from 'react'
import { ButtonProps, ButtonSize, ButtonVariant } from './type'

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'border border-white/10 bg-primary text-content-main hover:bg-primary-hover focus-visible:ring-primary',
  link: 'border border-none text-content-main hover:underline hover:underline-offset-4',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-[28px] p-[4px] text-sm font-semibold flex items-center gap-2',
  md: 'h-[40px] rounded-[8px] px-[12px] py-[8px] text-sm font-semibold flex items-center',
}

export const Button = (props: ButtonProps): JSX.Element => {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled,
  } = props

  const classes = clsx(
    'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200',
    'cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:cursor-not-allowed disabled:opacity-50',
    variantStyles[variant],
    sizeStyles[size],
    className,
  )

  if (props.href) {
    return (
      <a
        aria-disabled={disabled}
        className={classes}
      >
        {children}
      </a>
    )
  }

  else {
    return (
      <button
        className={classes}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }


}
