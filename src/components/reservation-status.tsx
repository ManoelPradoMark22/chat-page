import { IReservationStatus } from '@/api/get-reservations'

interface IReservationStatusProps {
  status: IReservationStatus
}

export const reservationStatusMap: Record<IReservationStatus, string> = {
  pending: 'Pendente',
  approved: 'Aprovado',
  clientCanceled: 'Cancelado (Cliente)',
  storeCanceled: 'Cancelado (Loja)',
  selled: 'Vendido',
  partialSelled: 'Venda parcial',
  absent: 'Não compareceu',
  giveup: 'Desistência',
}

const pickColor = ({ status }: IReservationStatusProps) => {
  switch (status) {
    case 'pending':
      return 'bg-slate-400'
    case 'clientCanceled':
    case 'storeCanceled':
    case 'absent':
    case 'giveup':
      return 'bg-rose-500'
    case 'selled':
    case 'partialSelled':
      return 'bg-emerald-500'
    case 'approved':
      return 'bg-amber-500'
  }
}

export function ReservationStatus({ status }: IReservationStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        data-testid="badge"
        className={`h-2 w-2 rounded-full ${pickColor({ status })}`}
      />
      <span className="font-medium text-muted-foreground">
        {reservationStatusMap[status]}
      </span>
    </div>
  )
}
