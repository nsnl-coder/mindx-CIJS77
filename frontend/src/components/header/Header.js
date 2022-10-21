import { Link } from 'react-router-dom'

import { LOGIN, REGISTER, ALL_POSTS, NEW_POST } from './../../constant/routes'
import Container from '../shared/Container'

const Header = () => {
  return (
    <Container>
      <nav className='mb-16 flex items-center justify-between border-b py-4'>
        <div className='w-32'>
          <Link to='/'>
            <img src='https://i.ibb.co/7RHXRtX/logo.jpg' alt='' />
          </Link>
        </div>
        <ul className='flex'>
          <li>
            <Link className='p-4' to={LOGIN}>
              Login
            </Link>
          </li>
          <li>
            <Link className='p-4' to={REGISTER}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link className='p-4' to={ALL_POSTS}>
              All post
            </Link>
          </li>
          <li>
            <Link className='p-4' to={NEW_POST}>
              Create New Post
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Header
