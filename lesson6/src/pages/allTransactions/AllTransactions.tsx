import React, { useMemo, useState } from 'react'
import ExpenseList from '../../components/expenses/ExpenseList'
import getSortedExpenses from '../../helper/getSortedExpenses'
import { useSelector } from 'react-redux'
import ScrollContainer from '../../components/ui/scrollContainer/ScrollContainer'
import MobileContainer from '../../components/ui/mobileContainer/MobileContainer'
import groupExpensesByDay from '../../helper/groupExpensesByDay'
import Expense from '../../types/expense'

type Filter = 'day' | 'week' | 'month' | 'year'

const AllTransactions = () => {
  const [filer, setFiler] = useState<Filter>('day')
  // number of expenses
  const [num, setNum] = useState<number>(40)

  const expenses = useSelector((store: any) => store.expense)
  const sortedExpenses = getSortedExpenses(expenses)
  const loadedExpenses = sortedExpenses.slice(0, 200)

  const expensesByDay: any = useMemo(
    () => groupExpensesByDay(loadedExpenses),
    [loadedExpenses]
  )

  const renderExpenseByDay = () => {
    const arr = []
    for (let prop in expensesByDay) {
      arr.push(
        <ExpenseList expenses={expensesByDay[prop]} key={prop} title={prop} />
      )
    }
    return arr
  }

  return (
    <MobileContainer isHeaderContainerBg={false} heading='All transactions'>
      <div className='px-6 flex flex-col h-full'>
        <ul className='flex w-full justify-between pt-4 flex-wrap gap-y-3 gap-x-2'>
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
        <div className='flex justify-between py-4'>
          <div className='bg-gray-100 pl-4 pr-8 py-4 rounded-xl'>
            <h2 className='text-sm'>Income</h2>
            <p className='text-md font-bold text-primary'>$1,840.00</p>
          </div>
          <div className='bg-gray-100 pl-8 pr-4 py-4 rounded-xl'>
            <h2>Expense</h2>
            <p className='text-md font-bold text-myred'>$284.00</p>
          </div>
        </div>
        <ScrollContainer>
          <div className='space-y-8'>{renderExpenseByDay()}</div>
        </ScrollContainer>
      </div>
    </MobileContainer>
  )
}

export default AllTransactions
