import SouthIcon from '@mui/icons-material/South'
import NorthIcon from '@mui/icons-material/South'

const TransactionSummary = () => {
  return (
    <div className='w-full px-4 absolute top-0 mt-8'>
      <div className='w-full bg-primary-dark p-3 rounded-xl text-white brightness-105 py-6'>
        <div>
          <h3 className='text-xs font-medium'>Total balance</h3>
          <p className='text-2xl font-semibold'>$2,548.00</p>
        </div>
        <div className='mt-6 flex justify-between mx-2'>
          <div>
            <div className='flex mb-0.5 items-center space-x-2'>
              <div className='h-6 w-6 bg-gray-200/20 rounded-full items-center justify-center flex text-sm'>
                <NorthIcon fontSize='inherit' />
              </div>
              <span className='text-sm  font-light'>Income</span>
            </div>
            <h4 className='font-medium'>$1,840.00</h4>
          </div>
          <div>
            <div className='flex mb-0.5 items-center space-x-2'>
              <div className='h-6 w-6 bg-gray-200/20 rounded-full items-center justify-center flex text-sm'>
                <SouthIcon fontSize='inherit' className='text-accent' />
              </div>
              <span className='text-sm  font-light'>Income</span>
            </div>
            <h4 className='font-medium text-accent'>$1,840.00</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionSummary
