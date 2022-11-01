import MobileContainer from '../../components/ui/mobileContainer/MobileContainer'
import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import TransactionForm from './TransactionForm'
import ScrollContainer from '../../components/ui/scrollContainer/ScrollContainer'

const AddTransactions = () => {
  const [formState, setFormState] = useState({
    amount: 0,
    date: Date.now(),
    note: '',
  })
  const handleChange = (e: any, name: string) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: e.target.value,
      }
    })
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileContainer heading='Add Transaction'>
          <div className='px-10 py-6 h-[125%]'>
            <div className='px-4 border shadow-lg py-6 rounded-xl bg-white -mt-24 h-full flex flex-col'>
              <div className='flex bg-gray-100 rounded-full py-1 px-5 mb-4'>
                <div className='flex-grow text-center py-2.5 font-medium rounded-full hover:bg-mygreen/10 cursor-pointer hover:text-mygreen'>
                  Income
                </div>
                <div className='flex-grow text-center py-2.5 font-medium rounded-full cursor-pointer hover:bg-myred/10 hover:text-myred'>
                  Transaction
                </div>
              </div>
              <ScrollContainer>
                <TransactionForm />
              </ScrollContainer>
            </div>
          </div>
        </MobileContainer>
      </LocalizationProvider>
    </>
  )
}

export default AddTransactions
