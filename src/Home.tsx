import { BudText } from '@components'

export function Home() {
  return (
    <view className="flex h-full w-full flex-col items-center justify-center bg-palette-background">
      <BudText>primary</BudText>
      <BudText variant="secondary">secondary</BudText>
      <BudText variant="accent">accent</BudText>
      <BudText variant="error">error</BudText>
    </view>
  )
}
