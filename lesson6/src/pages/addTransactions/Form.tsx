import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'

import Input from '../../components/ui/Input'
import schema from './TransactionSchema'
import TextArea from '../../components/ui/TextArea'
import { format } from 'date-fns'
import { addExpenses, resetIsAddExpenseSuccess } from '../../store/expenseSlice'
import Expense from '../../types/Expense'
import CheckIcon from '@mui/icons-material/Check'

const Login = (props: any) => {
  const { action } = props

  const dispatch = useDispatch()
  const isAddExpenseSuccess = useSelector(
    (store: any) => store.expense.isAddExpenseSuccess
  )

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form

  const onSubmitHandler = (data: any) => {
    const { amount, date, note } = data

    console.log(date)

    const payload: Expense = {
      amount: +amount,
      date,
      name: note,
      type: action,
      id: new Date().toString(),
    }
    dispatch(addExpenses(payload))
    reset()
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetIsAddExpenseSuccess())
    }, 6000)
  }, [isAddExpenseSuccess])

  const defaultDate = format(new Date(), 'yyyy-MM-dd HH:mm')
    .split(' ')
    .join('T')

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className='py-4 flex flex-col max-w-xl mx-auto'
      >
        <Input
          register={register}
          errors={errors}
          placeholder='amount'
          name='amount'
          type='number'
          label='Amount'
        />
        <Input
          register={register}
          errors={errors}
          placeholder='date'
          name='date'
          type='datetime-local'
          label='date'
          defaultValue={defaultDate}
        />

        <TextArea
          register={register}
          errors={errors}
          placeholder='note'
          name='note'
          type='text'
          label='Note'
        />

        <button className='border border-primary text-primary py-3 rounded-full hover:bg-primary hover:text-white'>
          Add new transaction
        </button>
        {isAddExpenseSuccess && (
          <div className='fixed py-4 bg-black/80 space-x-4 text-white px-12 rounded-xl bottom-28 left-1/2 -translate-x-1/2 z-50 flex items-center'>
            <div> Expense Added Success Fully</div>
            <CheckIcon />
          </div>
        )}
        {isAddExpenseSuccess === false && (
          <div className='fixed h-12 bg-myred/10 space-x-4 text-myred px-12 rounded-xl bottom-28 left-1/2 -translate-x-1/2 z-50 flex items-center'>
            <span>Something wentwrong ! try again later</span>
            <span>X</span>
          </div>
        )}
      </form>
    </>
  )
}

export default Login
