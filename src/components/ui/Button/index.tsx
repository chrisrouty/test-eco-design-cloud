import clsx from 'clsx'
import { JSX } from 'react'
import { ButtonProps, ButtonSize, ButtonVariant } from './type'

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'border border-primary/70 bg-primary text-content-main shadow-sm hover:bg-primary-hover focus-visible:ring-primary',
  link: 'border border-transparent px-2! bg-transparent text-content-main hover:text-content-muted focus-visible:ring-white',
}

const sizeStyles: Record<ButtonSize, string> = {
  md: 'h-11 rounded-lg px-4 text-sm',
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
