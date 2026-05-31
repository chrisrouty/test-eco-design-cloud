import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'glass' | 'link'
export type ButtonSize = 'sm' | 'md'

type BaseButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
}

export type ButtonAsButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
    disabled?: boolean
  }

export type ButtonAsAnchorProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    disabled?: boolean
  }

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps
