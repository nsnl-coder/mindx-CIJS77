import { useEffect } from 'react'

const Container = (props) => {
  const { className } = props
  return <div className={className}>{props.children}</div>
}

export default Container
