import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import RoundedReact from './../../../assets/images/roundedRect.png'

const Header = (props) => {
  const { heading, isHeaderContainerBg = true } = props

  return (
    <div className={isHeaderContainerBg ? 'h-36' : ''}>
      {isHeaderContainerBg && (
        <img
          src={RoundedReact}
          alt=''
          className='opacity-90 w-full h-36 absolute top-0 -z-10'
        />
      )}
      <div className={!isHeaderContainerBg ? 'text-base' : 'text-gray-100'}>
        <div className='flex w-full items-center py-4 text-sm'>
          <span className='absolute hover:text-gray-400 cursor-pointer p-4'>
            {heading && <KeyboardArrowLeftIcon />}
          </span>
          <h1 className='flex-grow text-center capitalize font-medium text-lg'>
            {heading}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Header
