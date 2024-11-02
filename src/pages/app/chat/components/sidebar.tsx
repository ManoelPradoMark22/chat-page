import { MoreHorizontal, SquarePen } from 'lucide-react'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { buttonVariants } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

import { Message } from '../data/data'

interface SidebarProps {
  isCollapsed: boolean
  chats: {
    name: string
    messages: Message[]
    avatar: string
    variant: 'secondary' | 'ghost'
  }[]
  onClick?: () => void
  isMobile: boolean
}

export function Sidebar({
  chats,
  isCollapsed,
  isMobile,
  onClick,
}: SidebarProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group relative flex h-full flex-col gap-4 bg-muted/10 p-2 data-[collapsed=true]:p-2 dark:bg-muted/20 "
    >
      {!isCollapsed && (
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2 text-2xl">
            <p className="font-medium">Chats</p>
            <span className="text-zinc-300">({chats.length})</span>
          </div>

          <div>
            {/* Substitua Link por uma div clicável */}
            <div
              onClick={onClick} // Se precisar de ação
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'icon' }),
                'h-9 w-9 cursor-pointer',
              )}
            >
              <MoreHorizontal size={20} />
            </div>

            <div
              onClick={onClick} // Se precisar de ação
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'icon' }),
                'h-9 w-9 cursor-pointer',
              )}
            >
              <SquarePen size={20} />
            </div>
          </div>
        </div>
      )}
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {chats.map((chat, index) =>
          isCollapsed ? (
            <TooltipProvider key={index}>
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  {/* Substitua Link por uma div clicável */}
                  <div
                    onClick={onClick} // Se precisar de ação
                    className={cn(
                      buttonVariants({ variant: chat.variant, size: 'icon' }),
                      'h-11 w-11 cursor-pointer md:h-16 md:w-16',
                      chat.variant === 'secondary' &&
                        'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white',
                    )}
                  >
                    <Avatar className="flex items-center justify-center">
                      <AvatarImage
                        src={chat.avatar}
                        alt={chat.avatar}
                        width={6}
                        height={6}
                        className="h-10 w-10 "
                      />
                    </Avatar>
                    <span className="sr-only">{chat.name}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {chat.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <div
              key={index}
              onClick={onClick} // Se precisar de ação
              className={cn(
                buttonVariants({ variant: chat.variant, size: 'xl' }),
                chat.variant === 'secondary' &&
                  'shrink dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
                'cursor-pointer justify-start gap-4',
              )}
            >
              <Avatar className="flex items-center justify-center">
                <AvatarImage
                  src={chat.avatar}
                  alt={chat.avatar}
                  width={6}
                  height={6}
                  className="h-10 w-10 "
                />
              </Avatar>
              <div className="flex max-w-28 flex-col">
                <span>{chat.name}</span>
                {chat.messages.length > 0 && (
                  <span className="truncate text-xs text-zinc-300 ">
                    {chat.messages[chat.messages.length - 1].name.split(' ')[0]}
                    :{' '}
                    {chat.messages[chat.messages.length - 1].isLoading
                      ? 'Typing...'
                      : chat.messages[chat.messages.length - 1].message}
                  </span>
                )}
              </div>
            </div>
          ),
        )}
      </nav>
    </div>
  )
}
