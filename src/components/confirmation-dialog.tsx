import { Button, IVariantButtonProps } from '@/components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

type IConfirmationDialog = {
  title: string
  description?: string
  submitTitle?: string
  type?: IVariantButtonProps
  confirmationFn?: () => void
  onCloseFn: () => void
}

export function ConfirmationDialog({
  title,
  description,
  type = 'success',
  submitTitle = 'Confimar',
  confirmationFn,
  onCloseFn,
}: IConfirmationDialog) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        {description && <DialogDescription>{description}</DialogDescription>}
      </DialogHeader>

      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="ghost" onClick={onCloseFn}>
            Cancelar
          </Button>
        </DialogClose>
        <Button type="button" variant={type} onClick={confirmationFn}>
          {submitTitle}
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
