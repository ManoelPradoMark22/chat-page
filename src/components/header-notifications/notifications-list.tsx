import { BellRing, Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

const notifications = [
  {
    title: "A reserva 'reservation-12' foi cancelada.",
    date: '1 hour ago',
  },
  {
    title: "A reserva 'reservation-23' teve alguns itens cancelados.",
    date: '1 hour ago',
  },
  {
    title: "'Manoel' enviou uma nova mensagem no chat.",
    date: '2 hours ago',
  },
  {
    title: "A reserva 'reservation-12' foi cancelada.",
    date: '1 hour ago',
  },
  {
    title: "A reserva 'reservation-23' teve alguns itens cancelados.",
    date: '1 hour ago',
  },
  {
    title: "'Manoel' enviou uma nova mensagem no chat.",
    date: '2 hours ago',
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function NotificationsList({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        'scrollbar-custom max-h-[85vh] w-[380px] overflow-y-auto',
        className,
      )}
      {...props}
    >
      <CardHeader>
        <CardTitle>Notificações</CardTitle>
        <CardDescription>Você tem 3 notificações não lidas.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Notificações via Push
            </p>
            <p className="text-sm text-muted-foreground">
              Ativar notificações no dispositivo.
            </p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Marcar todas como Lidas
        </Button>
      </CardFooter>
    </Card>
  )
}
