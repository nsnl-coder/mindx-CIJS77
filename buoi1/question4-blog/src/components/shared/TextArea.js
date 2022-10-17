import Label from './Label'

const TextArea = (props) => {
  const { register, errors, name, placeholder = '', label, type } = props

  return (
    <div>
      {label && <Label text={label} />}
      <textarea
        type={type || 'text'}
        placeholder={placeholder}
        {...register(name)}
        className='mb-2 h-40 w-full rounded border px-4 py-2 outline-0'
      />
      <p className='text-sm text-red-400'>{errors[name]?.message}</p>
    </div>
  )
}

export default TextArea
