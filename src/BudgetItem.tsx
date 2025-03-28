export default function BudgetItem() {
  return (
    <view className="flex h-full w-full flex-row justify-evenly gap-7 rounded-lg border border-gray-300 bg-color-white shadow-md">
      {' '}
      {/* budget item display */}
      <view>
        <text className="font-semibold text-3xl text-palette-text-primary">
          num
        </text>
      </view>
      <view>
        <text className="text-2xl text-palette-text-primary">
          {' '}
          Transaction Name{' '}
        </text>
        <text className="text-2xl text-palette-text-primary"> $$$ </text>
        <text className="text-2xl text-palette-text-primary">
          {' '}
          Thur. Mar 27, 2025{' '}
        </text>
      </view>
    </view>
  )
}
