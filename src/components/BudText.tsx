import type { ReactNode } from '@lynx-js/react'

interface Props {
  children: ReactNode
  style?: 'primary' | 'secondary' | 'accent' | 'error'
}

export function BudText({ children, style = 'primary' }: Props) {
  const variant = {
    primary: 'text-palette-text-primary',
    secondary: 'text-palette-text-secondary',
    accent: 'text-palette-text-accent',
    error: 'text-palette-text-error',
  }
  return <text className={variant[style]}>{children}</text>
}
