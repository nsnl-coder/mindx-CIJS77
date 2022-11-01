import React from 'react'
import Expense from '../../types/expense'
import ExpenseItem from './ExpenseItem'

interface Props {
  expenses: Expense[]
  title?: string
}

const ExpenseList = (props: Props) => {
  console.log('HEHEH')

  return (
    <div>
      {props.title && (
        <h1 className='font-semibold mb-2 text-base'>{props.title}</h1>
      )}
      <div className=''>
        {props.expenses.map((expense) => (
          <ExpenseItem expense={expense} key={expense.id} />
        ))}
      </div>
    </div>
  )
}

export default ExpenseList
