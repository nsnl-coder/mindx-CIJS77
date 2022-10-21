import Label from './Label'

const Input = (props) => {
  const { register, errors, name, placeholder = '', label, type = 'text' } = props

  return (
    <div>
      {label && <Label text={label} />}
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className='mb-2 w-full rounded border px-4 py-2 outline-0'
      />
      <p className='mb-3 text-sm text-red-400'>{errors[name]?.message}</p>
    </div>
  )
}

export default Input
