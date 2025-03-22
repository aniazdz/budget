import type { ReactNode } from '@lynx-js/react'

interface Props {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'error'
}

function BudText({ children, variant = 'primary' }: Props) {
  const _variant = {
    primary: 'text-palette-text-primary',
    secondary: 'text-palette-text-secondary',
    accent: 'text-palette-text-accent',
    error: 'text-palette-text-error',
  }
  return <text className={_variant[variant]}>{children}</text>
}

export default BudText
