import { FcGoogle } from 'react-icons/fc'

const AuthWithGoogle = (props) => {
  const { text = 'Login with Google' } = props

  return (
    <div>
      <button
        type='button'
        className='flex w-full items-center justify-center space-x-2 rounded border py-2 text-sm font-semibold hover:bg-slate-50'
      >
        <FcGoogle size={24} />
        <span>{text}</span>
      </button>
      <p className='my-3 text-center text-sm'>or</p>
    </div>
  )
}

export default AuthWithGoogle
