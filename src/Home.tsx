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
        className="jusitfy-evenly h-screen w-full space-y-2 bg-pink-200 p-4"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
          <list-item
            item-key={`list-item-${num}`}
            key={`list-item-${num}`}
            className="flex h-12 w-full items-center justify-center rounded-lg border border-gray-300 bg-white font-semibold text-lg shadow-md"
          >
            {num}
          </list-item>
        ))}
        {/* {Array.from({ length: 50 }).map((_, index) => {
        return (
          <list-item style={{
            backgroundColor: "purple"
          }}
            item-key={`list-item-${index}`}
            key={`list-item-${index}`}
          > {index + 1} </list-item>
        );
      })} */}
      </list>
    </view>
  )
}
