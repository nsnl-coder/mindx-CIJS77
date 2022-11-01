import React from 'react'
import { useEffect, useRef } from 'react'
import './ScrollContainer.css'

const ScrollContainer = (props: any) => {
  const scrollbar = useRef(null)

  return (
    <div
      id='scroll-container'
      className='overflow-y-auto h-0 flex-grow px-4 mr-1'
      ref={scrollbar}
    >
      {props.children}
    </div>
  )
}

export default ScrollContainer
