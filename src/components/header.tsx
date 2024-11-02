import { Home, MessagesSquare, Pizza, ShoppingBag, Store } from 'lucide-react'

import { Notifications } from './header-notifications/notifications'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <MessagesSquare className="h-4 w-4" />
            Chat
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Notifications />
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
