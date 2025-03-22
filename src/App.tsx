import './App.css'
import { BudNavbar, type BudNavbarItem } from '@components'
import { Home } from './Home.jsx'

// entry point and setup for application
export function App() {
  const items: BudNavbarItem[] = [
    {
      title: 'Home',
      icon: '',
      page: <Home />,
    },
  ]
  return <BudNavbar navbarItems={items} />
}
