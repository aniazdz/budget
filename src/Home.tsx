import { BudText } from '@components'

export function Home() {
  return (
    <view className="flex h-full w-full flex-col items-center justify-center bg-palette-background">
      <BudText>primary</BudText>
      <BudText style="secondary">secondary</BudText>
      <BudText style="accent">accent</BudText>
      <BudText style="error">error</BudText>
    </view>
  )
}
