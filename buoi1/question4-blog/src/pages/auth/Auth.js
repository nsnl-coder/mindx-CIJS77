import Login from './Login'
import Register from './Register'

import { LOGIN, REGISTER } from '../../constant/routes'
import Page from '../../components/shared/Page'
import RightColumn from './RightColumn'
import Container from '../../components/shared/Container'
import Card from './Card'

const Auth = () => {
  const route = window.location.pathname

  return (
    <Page title='Login' className='flex h-screen items-center justify-center bg-indigo-50'>
      <Container className='shadow-al flex w-full max-w-3xl divide-x border bg-white'>
        <Card>
          {route === LOGIN && <Login />}
          {route === REGISTER && <Register />}
        </Card>
        <Card>
          <RightColumn />
        </Card>
      </Container>
    </Page>
  )
}

export default Auth
