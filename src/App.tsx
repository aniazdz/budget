import './App.css'

import type { BudNavbarItem } from '@components'
import { BudNavbar } from '@components'
import { Icon, iconMap } from '@icons'

import { Home } from './Home.jsx'

const items: BudNavbarItem[] = [
  {
    title: 'Overview',
    icon: <Icon variant="light" icon={iconMap.house} className="text-4xl" />,
    page: <Home />,
  },
  {
    title: 'History',
    icon: <Icon variant="light" icon={iconMap.list} className="text-4xl" />,
    page: <text className="text-black">TODO: History</text>,
  },
  {
    title: 'New',
    icon: (
      <Icon variant="light" icon={iconMap.plusSquare} className="text-4xl" />
    ),
    page: <text className="text-black">TODO: New</text>,
  },
  {
    title: 'Statistics',
    icon: (
      <Icon variant="light" icon={iconMap.chartLine} className="text-4xl" />
    ),
    page: <text className="text-black">TODO: Statistics</text>,
  },
  {
    title: 'Settings',
    icon: <Icon variant="light" icon={iconMap.sliders} className="text-4xl" />,
    page: <text className="text-black">TODO: Settings</text>,
  },
]

// entry point and setup for application
export function App() {
  return <BudNavbar navbarItems={items} />
}
