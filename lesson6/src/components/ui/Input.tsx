import React from 'react'
import Label from './Label'

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
    <div className='w-full'>
      {label && <Label text={label} />}
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className='mb-2 w-full rounded border px-4 py-2 outline-primary outline-1'
        defaultValue={defaultValue}
      />
      <p className='mb-3 text-sm text-red-400'>{errors[name]?.message}</p>
    </div>
  )
}

export default Input
