// import { BudText } from '@components'

export function Home() {
  return (
    <view className="flex h-full w-full flex-col items-center justify-center bg-palette-background">
      {/* <BudText>primary</BudText>
      <BudText style="secondary">secondary</BudText>
      <BudText style="accent">accent</BudText>
      <BudText style="error">error</BudText> */}
      <list
        list-type="single"
        span-count={1}
        scroll-orientation="vertical"
        scroll-bar-enable={true}
        enable-scroll={true}
        className="h-full w-full"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
          <list-item
            item-key={`list-item-${num}`}
            key={`list-item-${num}`}
            className="flex h-1/6 w-full items-center justify-center bg-palette-background"
          >
            <view className="flex h-full w-full flex-row justify-evenly gap-7 rounded-lg border border-gray-300 bg-color-white shadow-md">
              {' '}
              {/* budget item display */}
              <view>
                <text className="font-semibold text-3xl text-palette-text-primary">
                  {num}
                </text>
              </view>
              <view>
                <text className="text-2xl text-palette-text-primary">
                  {' '}
                  Transaction Name{' '}
                </text>
                <text className="text-2xl text-palette-text-primary">
                  {' '}
                  $$${' '}
                </text>
                <text className="text-2xl text-palette-text-primary">
                  {' '}
                  Thur. Mar 27, 2025{' '}
                </text>
              </view>
            </view>
          </list-item>
        ))}
      </list>
    </view>
  )
}
