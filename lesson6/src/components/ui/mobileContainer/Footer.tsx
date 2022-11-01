import HomeIcon from '@mui/icons-material/Home'
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined'
import AddIcon from '@mui/icons-material/Add'

const Footer = () => {
  return (
    <div className='h-16 w-full bg-white relative border-t border-gray-100 flex items-center'>
      <div className='w-10 h-10 absolute top-0 left-1/2 bg-primary rounded-full items-center justify-center flex text-white -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-primary/40 cursor-pointer'>
        <AddIcon />
      </div>
      <div className='w-1/2 flex justify-center cursor-pointer text-primary hover:bg-gray-50 h-full items-center'>
        <HomeIcon />
      </div>
      <div className='w-1/2 flex justify-center cursor-pointer hover:bg-gray-50 h-full items-center'>
        <SignalCellularAltOutlinedIcon />
      </div>
    </div>
  )
}

export default Footer
