import { Minus, Plus } from 'lucide-react'
import React from 'react'

import { InputProps } from './input'

interface IInputIncrement extends InputProps {
  value: number
  min?: number
  max?: number
  decreaseFn: () => void
  increaseFn: () => void
}

const InputIncrement: React.FC<IInputIncrement> = ({
  value,
  min,
  max,
  disabled,
  decreaseFn,
  increaseFn,
}) => {
  const isMinDisabled = min !== undefined && value <= min
  const isMaxDisabled = max !== undefined && value >= max

  return (
    <div className="flex h-[1.875rem] select-none items-center rounded border">
      <button
        onClick={decreaseFn}
        className="px-2 py-1 disabled:cursor-not-allowed disabled:opacity-40"
        disabled={disabled || isMinDisabled}
      >
        <Minus size={10} />
      </button>
      <input
        type="number"
        value={value}
        disabled
        className="w-12 bg-transparent text-center outline-none"
        min={min}
        max={max}
      />
      <button
        onClick={increaseFn}
        className="px-2 py-1 disabled:cursor-not-allowed disabled:opacity-40"
        disabled={disabled || isMaxDisabled}
      >
        <Plus size={10} />
      </button>
    </div>
  )
}

export { InputIncrement }
