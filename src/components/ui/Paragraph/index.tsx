import clsx from 'clsx'
import { JSX } from 'react'
import { ParagraphProps, ParagraphSize, ParagraphColor } from './type'

const sizeStyles: Record<ParagraphSize, string> = {
  sm: 'text-sm leading-6',
  md: 'text-base leading-7',
  lg: 'text-lg leading-8',
}

const colorStyles: Record<ParagraphColor, string> = {
  default: 'text-content-paragraph',
}

export const Paragraph = ({
  children,
  size = 'md',
  color = 'default',
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={
        clsx(
          sizeStyles[size],
          colorStyles[color], className
        )
      }
      {...props}
    >
      {children}
    </p>
  )
}
