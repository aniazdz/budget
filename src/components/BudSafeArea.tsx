import type { ReactNode } from '@lynx-js/react'

interface Props {
  children: ReactNode
}

// HACK: need to grab safe area from native device (swiftui, or whatver android uses)

function BudSafeArea({ children }: Props) {
  return (
    <view className="flex h-full w-full bg-palette-background pt-16 pb-8">
      {children}
    </view>
  )
}

export default BudSafeArea
