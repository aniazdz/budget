import { useState } from '@lynx-js/react'

export function Home() {
  const [hello, setHello] = useState(true)

  return (
    <view
      className="flex h-screen w-screen items-center justify-center bg-palette-background"
      bindtap={() => {
        'background only'
        setHello(!hello)
      }}
    >
      <view className="flex flex-col items-center justify-center">
        <text className="text-palette-text">{hello ? 'Hello' : 'Bye'}</text>
      </view>
    </view>
  )
}
