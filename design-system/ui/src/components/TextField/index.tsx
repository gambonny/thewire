import { useId, useRef, useEffect } from 'react'
import type { ComponentPropsWithoutRef } from 'react'
import type { Except } from 'type-fest'

type AllInputTypes = ComponentPropsWithoutRef<'input'>['type']

type SupportedInputTypes = Extract<
  AllInputTypes,
  'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
>

type InputProps = Except<
  ComponentPropsWithoutRef<'input'>,
  'type' | 'autoFocus'
>

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
  const ref = useRef<HTMLInputElement>(null)
  const id = useId()

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus()
    }
  }, [autoFocus])

  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} ref={ref} autoFocus={autoFocus} {...props} />
    </p>
  )
}
