import './App.css'
import { Home } from './Home.jsx'

// entry point and setup for application
export function App() {
  // const [alterLogo, setAlterLogo] = useState(false)

  // useEffect(() => {
  //   console.info('Hello, ReactLynx')
  // }, [])

  // const onTap = useCallback(() => {
  //   'background only'
  //   setAlterLogo(!alterLogo)
  // }, [alterLogo])

  return <Home />
  // return (
  //   <view>
  //     <view className="Background" />
  //     <view className="App">
  //       <view className="Banner">
  //         <view className="Logo" bindtap={onTap}>
  //           {alterLogo ? (
  //             <image src={reactLynxLogo} className="Logo--react" />
  //           ) : (
  //             <image src={lynxLogo} className="Logo--lynx" />
  //           )}
  //         </view>
  //         <text className="font-semibold text-5xl text-palette-accent">
  //           bruh
  //         </text>
  //         <text className="Subtitle">on Lynx</text>
  //       </view>
  //       <view className="Content">
  //         <image src={arrow} className="Arrow" />
  //         <text className="Description">Tap the logo and have fun!</text>
  //         <text className="Hint">
  //           Edit<text style={{ fontStyle: 'italic' }}>{' src/App.tsx '}</text>
  //           to see updates!
  //         </text>
  //       </view>
  //       <view style={{ flex: 1 }} />
  //     </view>
  //   </view>
  // )
}
