import { useEffect } from 'react'

const Page = (props) => {
  const { title, className } = props

  useEffect(() => {
    document.title = title || 'Please provide page title'
    window.scrollTo(0, 0)
  }, [])

  return <div className={className}>{props.children}</div>
}

export default Page
