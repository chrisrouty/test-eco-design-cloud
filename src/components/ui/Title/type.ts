import { HTMLAttributes } from 'react'

export type TitleLevel = 1 | 2 | 3 | 4

export type TitleTag = 'h1' | 'h2' | 'h3' | 'h4'

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: TitleLevel
}
