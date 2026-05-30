import { HTMLAttributes } from 'react'

export type ParagraphSize = 'sm' | 'md' | 'lg'
export type ParagraphColor = 'default'

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: ParagraphSize
  color?: ParagraphColor
}
