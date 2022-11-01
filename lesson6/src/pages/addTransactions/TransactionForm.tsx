import { TextField } from '@mui/material'
import useForm from '../../hooks/useForm'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'

const initialFormValue = {
  amount: 0,
  date: new Date(),
  note: '',
}

const TransactionForm = () => {
  const { values, setValues, handleInputChange } = useForm(initialFormValue)

  const handleDateChange = (newDate: any) => {
    handleInputChange({ target: { name: 'date', value: newDate } })
  }

  const onSubmitHandler = (e: any) => {
    e.preventDefault()
  }

  return (
    <form
      action=''
      className='py-4 flex flex-col space-y-8'
      onSubmit={onSubmitHandler}
    >
      <div className='flex flex-col'>
        <label
          className='mb-1 uppercase text-sm font-medium text-gray-700'
          htmlFor='amount'
        >
          Amount
        </label>
        <TextField
          variant='outlined'
          value={values.amount}
          name='amount'
          onChange={handleInputChange}
          type='number'
        />
      </div>
      <div className='flex flex-col'>
        <label
          className='mb-1 uppercase text-sm font-medium text-gray-700'
          htmlFor='date'
        >
          Date
        </label>
        <MobileDatePicker
          inputFormat='ddd, DD MMM YYYY'
          value={values.date}
          onChange={handleDateChange}
          renderInput={(params: any) => <TextField {...params} name='date' />}
        />
      </div>
      <div className='flex flex-col'>
        <label
          className='mb-1 uppercase text-sm font-medium text-gray-700'
          htmlFor='note'
        >
          Note
        </label>
        <TextField
          variant='outlined'
          value={values.note}
          name='note'
          onChange={handleInputChange}
          placeholder='Extra info...'
        />
      </div>
      <button className='border border-primary text-primary py-3 rounded-full hover:bg-primary hover:text-white'>
        Add new transaction
      </button>
    </form>
  )
}

export default TransactionForm
