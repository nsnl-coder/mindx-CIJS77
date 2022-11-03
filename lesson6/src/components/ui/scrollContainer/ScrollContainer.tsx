import React from 'react'
import { useEffect, useRef } from 'react'
import './ScrollContainer.css'

const ScrollContainer = (props: any) => {
  const { className } = props
  const scrollbar = useRef(null)

  return (
    <div
      id='scroll-container'
      className={`overflow-y-auto h-16 flex-grow flex-2 mr-1 py-4 ${className}`}
      ref={scrollbar}
    >
      {props.children}
    </div>
  )
}

export default ScrollContainer
