import { useEffect } from 'react'

const Container = (props) => {
  const { className } = props
  return <div className={`container ${className}`}>{props.children}</div>
}

export default Container
