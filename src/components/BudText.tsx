import type { ReactNode } from '@lynx-js/react'

interface Props {
  children: ReactNode
  style?: 'primary' | 'secondary' | 'accent' | 'error'
}

export function BudText({ children, style = 'primary' }: Props) {
  return <text className={`text-palette-text-${style}`}>{children}</text>
}
