const Tab = () => {
  return (
    <div className='flex bg-gray-100 rounded-full py-1 px-5 mb-4'>
      <div className='flex-grow text-center py-2.5 font-medium rounded-full hover:bg-mygreen/10 cursor-pointer hover:text-mygreen'>
        Income
      </div>
      <div className='flex-grow text-center py-2.5 font-medium rounded-full cursor-pointer hover:bg-myred/10 hover:text-myred'>
        Transaction
      </div>
    </div>
  )
}

export default Tab
