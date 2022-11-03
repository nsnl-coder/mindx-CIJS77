import MobileContainer from '../../components/ui/mobileContainer/MobileContainer'
import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import ScrollContainer from '../../components/ui/scrollContainer/ScrollContainer'
import Form from './Form'

const AddTransactions = () => {
  const [action, setAction] = useState<'deposite' | 'withdraw'>('deposite')

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileContainer heading='Add Transaction'>
          <div className='px-10 py-6 h-[125%]'>
            <div className='px-4 border shadow-lg py-6 rounded-xl bg-white -mt-24 h-full flex flex-col'>
              <div className='flex bg-gray-100 rounded-full py-1 px-5 mb-4'>
                <div
                  className={
                    (action === 'deposite'
                      ? 'bg-mygreen/10 text-mygreen'
                      : '') +
                    ' flex-grow text-center py-2.5 font-medium rounded-full hover:bg-mygreen/10 cursor-pointer hover:text-mygreen'
                  }
                  onClick={() => setAction('deposite')}
                >
                  Deposite
                </div>
                <div
                  className={
                    (action === 'withdraw' ? 'bg-myred/10 text-myred' : '') +
                    ' flex-grow text-center py-2.5 font-medium rounded-full hover:bg-myred/10 cursor-pointer hover:text-myred'
                  }
                  onClick={() => setAction('withdraw')}
                >
                  Withdraw
                </div>
              </div>
              <ScrollContainer>
                <Form action={action} />
              </ScrollContainer>
            </div>
          </div>
        </MobileContainer>
      </LocalizationProvider>
    </>
  )
}

export default AddTransactions
