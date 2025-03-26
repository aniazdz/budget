import { useState } from '@lynx-js/react'

import type { BudNavbarItem } from '@components'
import { BudSafeArea, BudText } from '@components'

interface Props {
  navbarItems: Array<BudNavbarItem>
}

function BudNavbar({ navbarItems }: Props) {
  const [currentPage, setCurrentPage] = useState(0)

  const isHighlighted = (idx: number) =>
    currentPage === idx ? 'accent' : 'primary'

  return (
    <BudSafeArea>
      <view className="flex w-full flex-col justify-end bg-palette-background">
        <view className="flex-grow bg-palette-background px-4 pt-4">
          {navbarItems[currentPage].page}
        </view>
        <view className="flex justify-evenly bg-palette-background p-2">
          {navbarItems.map((item, idx) => (
            <view
              key={item.title}
              className={'flex w-16 flex-col items-center justify-center'}
              bindtap={() => setCurrentPage(idx)}
            >
              <BudText variant={isHighlighted(idx)}>{item.icon}</BudText>
              <BudText variant={isHighlighted(idx)} className="text-xs">
                {item.title}
              </BudText>
            </view>
          ))}
        </view>
      </view>
    </BudSafeArea>
  )
}

export default BudNavbar
