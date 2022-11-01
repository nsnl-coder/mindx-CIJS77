import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined'
import AddIcon from '@mui/icons-material/Add'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='h-16 w-full bg-white relative border-t border-gray-100 flex items-center mt-8'>
      <NavLink to='/add-new'>
        <div className='w-10 h-10 absolute top-0 left-1/2 bg-primary rounded-full items-center justify-center flex text-white -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-primary/40 cursor-pointer'>
          <AddIcon />
        </div>
      </NavLink>
      <NavLink
        end
        to='/'
        className={({ isActive }) =>
          (isActive ? 'text-primary ' : '') +
          'w-1/2 flex justify-center cursor-pointer hover:bg-gray-50 h-full items-center'
        }
      >
        <HomeIcon />
      </NavLink>
      <NavLink
        to='/statistic'
        className={({ isActive }) =>
          (isActive ? 'text-primary ' : '') +
          'w-1/2 flex justify-center cursor-pointer hover:bg-gray-50 h-full items-center'
        }
      >
        <SignalCellularAltOutlinedIcon />
      </NavLink>
    </div>
  )
}

export default Footer
