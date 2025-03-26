import type { ReactNode } from '@lynx-js/react'

interface Props {
  children: ReactNode
}

function BudSafeArea({ children }: Props) {
  return (
    <view className="safe-area-view flex h-full w-full bg-palette-background">
      {children}
    </view>
  )
}

export default BudSafeArea
