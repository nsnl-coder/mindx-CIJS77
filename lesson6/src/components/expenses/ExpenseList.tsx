import React from 'react'
import Expense from '../../types/expense'
import ExpenseItem from './ExpenseItem'

interface Props {
  expenses: Expense[]
}

const ExpenseList = (props: Props) => {
  return (
    <div className='space-y-5'>
      {props.expenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
    </div>
  )
}

export default ExpenseList
