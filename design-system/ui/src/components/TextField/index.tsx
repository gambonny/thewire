import { useId, useRef, useEffect } from 'react'
import type { ComponentPropsWithoutRef } from 'react'
import type { Except } from 'type-fest'

type AllInputTypes = ComponentPropsWithoutRef<'input'>['type']

type SupportedInputTypes = Extract<
  AllInputTypes,
  'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
>

type InputProps = Except<ComponentPropsWithoutRef<'input'>, 'type'>

type TextFieldProps = {
  label: string
  autoFocus?: boolean
  type?: SupportedInputTypes
} & InputProps

export const TextField = ({
  label,
  autoFocus = false,
  type = 'text',
  ...props
}: TextFieldProps) => {
  const id = useId()
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus()
    }
  }, [autoFocus])

  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} ref={ref} {...props} />
    </p>
  )
}
