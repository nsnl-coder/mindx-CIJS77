import RoundedReact from './../../../assets/images/roundedRect.png'

const Header = () => {
  return (
    <div className='h-36 w-full'>
      <img src={RoundedReact} alt='' className='opacity-90 w-full h-36' />
      {/* <div className='flex absolute w-full top-0 items-center text-white py-4 text-sm'>
            <span className='absolute hover:text-gray-200 cursor-pointer p-4'>
              <KeyboardArrowLeftIcon />
            </span>
            <h1 className='flex-grow text-center capitalize text-gray-100'>
              Add transaction
            </h1>
          </div> */}
    </div>
  )
}

export default Header
