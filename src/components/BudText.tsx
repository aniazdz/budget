import type { ReactNode } from '@lynx-js/react'

interface Props {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'error'
  className?: string
}

function BudText({ children, variant = 'primary', className = '' }: Props) {
  const _variant = {
    primary: 'text-palette-text-primary',
    secondary: 'text-palette-text-secondary',
    accent: 'text-palette-text-accent',
    error: 'text-palette-text-error',
  }
  return <text className={`${_variant[variant]} ${className}`}>{children}</text>
}

export default BudText
