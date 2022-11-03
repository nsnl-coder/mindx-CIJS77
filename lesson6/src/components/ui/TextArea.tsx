import Label from './Label'

const TextArea = (props: any) => {
  const {
    register,
    errors,
    name,
    placeholder = '',
    label,
    type = 'text',
  } = props

  return (
    <div className='w-full px-1'>
      {label && <Label text={label} />}
      <textarea
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className='mb-2 w-full rounded border px-4 py-2 outline-none h-24 focus:border-primary focus:border-2'
      />
      <p className='mb-3 text-sm text-red-400'>{errors[name]?.message}</p>
    </div>
  )
}

export default TextArea
