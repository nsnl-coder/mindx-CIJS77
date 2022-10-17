import { Link } from 'react-router-dom'
import { REGISTER } from '../../constant/routes'

const Navigation = (props) => {
  const { url = REGISTER, text1 = ' Do not have an account?', text2 = 'Create One' } = props

  return (
    <div className='space-x-1 text-center'>
      <span>{text1}</span>
      <Link to={url} className='link inline-block text-sm'>
        {text2}
      </Link>
    </div>
  )
}

export default Navigation
