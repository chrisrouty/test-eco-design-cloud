import { LabelHTMLAttributes } from 'react'

export type LabelColor = 'default'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  color?: LabelColor
}
