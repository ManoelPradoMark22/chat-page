import { Bell } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { NotificationsList } from './notifications-list'

export function Notifications() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Bell className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
          <span className="sr-only">Notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <NotificationsList className="border-0" />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
