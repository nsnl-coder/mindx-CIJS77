import { SiGoogleassistant } from 'react-icons/si'
import { AiFillBell, AiFillBuild } from 'react-icons/ai'

const Text = (props) => {
  const {
    title = 'Title test',
    body = ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia numquam quae ?',
    icon = <p>Provide an icon</p>,
  } = props

  return (
    <div className='flex space-x-2'>
      <div className='color-red-400 pt-1'>{icon}</div>
      <div>
        <h3 className='text-sm font-semibold'>{title}</h3>
        <p className='text-xs'>{body}</p>
      </div>
    </div>
  )
}

const RightColumn = () => {
  return (
    <div className='space-y-8'>
      <Text title='Create a post' icon={<SiGoogleassistant color='#2a75ff' />} />
      <Text title='View other people posts' icon={<AiFillBell color='#2a75ff' />} />
      <Text title='Do it now' icon={<AiFillBuild color='#2a75ff' />} />
    </div>
  )
}

export default RightColumn
