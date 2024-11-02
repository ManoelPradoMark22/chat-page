import React from 'react'
import { Control, useController } from 'react-hook-form'

import { Input, InputProps } from './input'

interface InputNumberProps extends InputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  name: string
  className?: string
  maxLimit?: number
}

const InputNumber: React.FC<InputNumberProps> = ({
  control,
  name,
  className,
  maxLimit,
  ...rest
}) => {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name,
    control,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value

    inputValue = inputValue.replace(/\D/g, '')

    if (maxLimit) {
      const numericValue = parseFloat(inputValue)
      if (numericValue > maxLimit) {
        return
      }
    }

    onChange(inputValue)
  }

  const handleBlur = () => {
    const numericValue = parseFloat(value.replace(/\D/g, ''))
    onChange(numericValue)
    onBlur()
  }

  return (
    <Input
      ref={ref}
      value={value}
      onChange={handleChange}
      onBlur={value && typeof value === 'string' ? handleBlur : undefined}
      className={className}
      {...rest}
    />
  )
}

export { InputNumber }
