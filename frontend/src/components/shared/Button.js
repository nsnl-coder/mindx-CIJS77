const Button = (props) => {
  const { text = 'Please provide "text"', className = '', type = 'button' } = props
  return (
    <button type={type} className={`w-full rounded bg-black py-2 text-sm text-white ${className}`}>
      {text}
    </button>
  )
}

export default Button
