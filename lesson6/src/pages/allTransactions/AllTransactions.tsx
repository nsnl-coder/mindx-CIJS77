import React from 'react'
import ExpenseList from '../../components/expenses/ExpenseList'
import getSortedExpenses from '../../helper/getSortedExpenses'
import { useSelector } from 'react-redux'
import ScrollContainer from '../../components/ui/scrollContainer/ScrollContainer'

const AllTransactions = () => {
  const expenses = useSelector((store: any) => store.expense)
  const sortedExpenses = getSortedExpenses(expenses)
  const mostRecentExpenses = sortedExpenses.slice(0, 40)

  return (
    <div className='px-8 flex flex-col h-full'>
      <ul className='flex w-full justify-between pt-4 pb-10 flex-wrap gap-y-3 gap-x-2'>
        <li className='w-20 text-sm text-center bg-primary cursor-pointer rounded-xl py-2 text-white'>
          Day
        </li>
        <li className='hover:bg-gray-50 w-20 text-sm text-center cursor-pointer rounded-xl py-2'>
          Week
        </li>
        <li className='hover:bg-gray-50 w-20 text-sm text-center cursor-pointer rounded-xl py-2'>
          Month
        </li>
        <li className='hover:bg-gray-50 w-20 text-sm text-center cursor-pointer rounded-xl py-2'>
          Year
        </li>
      </ul>
      <ScrollContainer>
        <ExpenseList expenses={mostRecentExpenses} />
      </ScrollContainer>
    </div>
  )
}

export default AllTransactions
