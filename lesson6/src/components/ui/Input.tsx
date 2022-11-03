import React from 'react'
import Label from './Label'

import './input.css'

const Input = (props: any) => {
  const {
    register,
    errors,
    name,
    placeholder = '',
    label,
    type = 'text',
    defaultValue,
  } = props

  return (
    <div className='w-full px-1'>
      {label && <Label text={label} />}
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className='mb-2 w-full rounded border px-4 py-2 outline-none focus:border-primary focus:border-2 bg-transparent '
        defaultValue={defaultValue}
      />
      <p className='mb-3 text-sm text-red-400'>{errors[name]?.message}</p>
    </div>
  )
}

export default Input
