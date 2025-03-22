import type { ReactNode } from '@lynx-js/react'

interface Props {
  children: ReactNode
  style?: 'primary' | 'secondary' | 'accent' | 'error'
}

function BudText({ children, style = 'primary', ...props }: Props) {
  const variant = {
    primary: 'text-palette-text-primary',
    secondary: 'text-palette-text-secondary',
    accent: 'text-palette-text-accent',
    error: 'text-palette-text-error',
  }
  return (
    <text className={variant[style]} {...props}>
      {children}
    </text>
  )
}

export default BudText
