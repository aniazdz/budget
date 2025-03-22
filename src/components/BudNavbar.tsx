import { type BudNavbarItem, BudSafeArea, BudText } from '@components'
import { useState } from '@lynx-js/react'

interface Props {
  navbarItems: Array<BudNavbarItem> // navbar items?
}

function BudNavbar({ navbarItems }: Props) {
  const [currentPage, setCurrentPage] = useState(0)
  return (
    <BudSafeArea>
      <view className="flex w-full flex-col justify-end bg-palette-background">
        <view className="flex-grow bg-palette-flame px-4 pt-4">
          {navbarItems[currentPage].page}
        </view>
        <view className="flex justify-evenly bg-palette-olivine p-2">
          {navbarItems.map((item) => (
            <view key={item.title}>
              <BudText>{item.title}</BudText>
            </view>
          ))}
        </view>
      </view>
    </BudSafeArea>
  )
}

export default BudNavbar
