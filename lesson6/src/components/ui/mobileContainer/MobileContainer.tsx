import React from 'react'
import Footer from './Footer'
import Header from './Header'

const MobileContainer = (props: any) => {
  const { heading, isHeaderContainerBg } = props

  return (
    <div className='my-hundred h-screen h-screen-mobile w-screen max-w-4xl max-h-screen relative shadow-lg flex flex-col justify-between mx-auto overflow-y-hidden'>
      <Header heading={heading} isHeaderContainerBg={isHeaderContainerBg} />
      <div className='flex-grow'>{props.children}</div>
      <Footer />
    </div>
  )
}

export default MobileContainer
