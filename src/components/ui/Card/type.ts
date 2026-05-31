import { HTMLAttributes } from 'react'

export type CardVariant = 'default'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
}
