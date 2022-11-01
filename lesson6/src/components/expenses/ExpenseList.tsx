import React from 'react'
import ExpenseItem from './ExpenseItem'
import Expense from '../../types/Expense'

interface Props {
  expenses: Expense[]
  title?: string
  expenseBackground?: boolean
}

const ExpenseList = (props: Props) => {
  return (
    <div>
      {props.title && (
        <h1 className='font-semibold mb-2 text-base'>{props.title}</h1>
      )}
      <div className={props.expenseBackground ? 'space-y-4' : ''}>
        {props.expenses.map((expense) => (
          <ExpenseItem
            expense={expense}
            key={expense.id}
            className={props.expenseBackground ? 'bg-gray-50' : ''}
          />
        ))}
      </div>
    </div>
  )
}

export default ExpenseList
