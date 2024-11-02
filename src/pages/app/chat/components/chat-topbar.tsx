import { Info, Phone, Video } from 'lucide-react'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { buttonVariants } from '@/components/ui/button'
import { ExpandableChatHeader } from '@/components/ui/chat/expandable-chat'
import { cn } from '@/lib/utils'

import { UserData } from '../data/data'

interface ChatTopbarProps {
  selectedUser: UserData
}

export const TopbarIcons = [{ icon: Phone }, { icon: Video }, { icon: Info }]

export default function ChatTopbar({ selectedUser }: ChatTopbarProps) {
  return (
    <ExpandableChatHeader>
      <div className="flex items-center gap-2">
        <Avatar className="flex items-center justify-center">
          <AvatarImage
            src={selectedUser.avatar}
            alt={selectedUser.name}
            width={6}
            height={6}
            className="h-10 w-10 "
          />
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{selectedUser.name}</span>
          <span className="text-xs">Active 2 mins ago</span>
        </div>
      </div>

      <div className="flex gap-1">
        {TopbarIcons.map((icon, index) => (
          // Substitua Link por uma div clicável
          <div
            key={index}
            onClick={() => {
              // Adicione funcionalidade de clique, se necessário
            }}
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'h-9 w-9 cursor-pointer',
            )}
          >
            <icon.icon size={20} className="text-muted-foreground" />
          </div>
        ))}
      </div>
    </ExpandableChatHeader>
  )
}
