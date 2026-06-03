import clsx from 'clsx'
import { JSX } from 'react'
import { TitleLevel, TitleProps, TitleTag } from './type'



const levelStyles: Record<TitleLevel, string> = {
  1: 'text-[30px] font-semibold leading-tight',
  2: 'text-4xl font-semibold leading-tight',
  3: 'text-3xl font-semibold leading-snug',
  4: 'text-2xl font-semibold leading-snug',
}

const titleTags: Record<TitleLevel, TitleTag> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
}

export const Title = ({
  children,
  level = 1,
  className,
  ...props
}: TitleProps) => {
  const Component = titleTags[level]

  return (
    <Component
      className={
        clsx(
          'text-content-main',
          levelStyles[level], className
        )
      }
      {...props}
    >
      {children}
    </Component>
  )
}
