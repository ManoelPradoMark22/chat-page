import { Button, ButtonProps } from './ui/button'

interface IButtonIcon extends ButtonProps {
  icon: JSX.Element
  label?: string
}

export function ButtonIcon({ icon, label, ...props }: IButtonIcon) {
  return (
    <Button type="button" variant="ghost" className="h-full" {...props}>
      <div className="flex flex-col items-center gap-1">
        {icon}
        {label && <span>{label}</span>}
      </div>
    </Button>
  )
}
