const Label = (props: any) => {
  const { text } = props

  return (
    <label className='inline-block font-medium text-gray-500 uppercase mb-1 text-sm'>
      {text}
    </label>
  )
}

export default Label
