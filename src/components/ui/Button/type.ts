import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'primary' | 'link'
export type ButtonSize = 'md'

type BaseButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
}

export type ButtonAsButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

export type ButtonAsAnchorProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps
