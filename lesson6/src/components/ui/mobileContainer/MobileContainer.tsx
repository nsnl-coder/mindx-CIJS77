import Footer from './Footer'
import Header from './Header'

const MobileContainer = (props: any) => {
  return (
    <div className='h-screen w-screen max-w-4xl max-h-screen relative shadow-lg flex flex-col justify-between mx-auto'>
      <Header />
      <div className='flex-grow'>{props.children}</div>
      <Footer />
    </div>
  )
}

export default MobileContainer
