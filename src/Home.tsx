import { BudText } from '@components'

export function Home() {
  return (
    <view className="flex h-screen w-screen items-center justify-center bg-palette-background">
      <view className="flex flex-col items-center justify-center">
        <BudText>primary</BudText>
        <BudText style="secondary">secondary</BudText>
        <BudText style="accent">accent</BudText>
        <BudText style="error">error</BudText>
      </view>
    </view>
  )
}
