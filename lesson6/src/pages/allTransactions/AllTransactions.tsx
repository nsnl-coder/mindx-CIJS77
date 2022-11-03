import React, { useEffect, useMemo, useState } from 'react'
import ExpenseList from '../../components/expenses/ExpenseList'
import getSortedExpenses from '../../helper/getSortedExpenses'
import { useSelector } from 'react-redux'

import ScrollContainer from '../../components/ui/scrollContainer/ScrollContainer'
import MobileContainer from '../../components/ui/mobileContainer/MobileContainer'
import groupExpensesByDay from '../../helper/groupExpensesByDay'
import groupExpensesByWeek from '../../helper/groupExpensesByWeek'
import groupExpensesByMonth from '../../helper/groupExpensesByMonth'
import groupExpensesByYear from '../../helper/groupExpensesByYear'
import getAccountSummary from '../../helper/getAccountSummary'

type Filter = 'day' | 'week' | 'month' | 'year'

const AllTransactions = () => {
  const [filter, setFilter] = useState<Filter>('day')
  const [renderList, setRenderList] = useState<any>({})

  const expenses = useSelector((store: any) => store.expense.data)
  const sortedExpenses = getSortedExpenses(expenses)
  const { totalIncome, totalExpense } = getAccountSummary()

  useEffect(() => {
    switch (filter) {
      case 'day':
        setRenderList(groupExpensesByDay(sortedExpenses))
        break
      case 'week':
        setRenderList(groupExpensesByWeek(sortedExpenses))
        break
      case 'month':
        setRenderList(groupExpensesByMonth(sortedExpenses))
        break
      case 'year':
        setRenderList(groupExpensesByYear(sortedExpenses))
        break
    }
  }, [filter])

  const renderExpenses = () => {
    const arr = []
    for (let prop in renderList) {
      arr.push(
        <ExpenseList expenses={renderList[prop]} key={prop} title={prop} />
      )
    }
    return arr
  }

  const tabClassName = (tab: Filter) => {
    if (tab === filter)
      return 'w-20 text-sm text-center bg-primary cursor-pointer rounded-xl py-2 text-white'
    return 'hover:bg-gray-100 w-20 text-sm text-center cursor-pointer rounded-xl py-2 duration-150'
  }

  return (
    <MobileContainer isHeaderContainerBg={false} heading='All transactions'>
      <div className='px-6 flex flex-col h-full'>
        <ul className='flex w-full justify-between pt-4 flex-wrap gap-y-3 gap-x-2'>
          <li className={tabClassName('day')} onClick={() => setFilter('day')}>
            Day
          </li>
          <li
            className={tabClassName('week')}
            onClick={() => setFilter('week')}
          >
            Week
          </li>
          <li
            className={tabClassName('month')}
            onClick={() => setFilter('month')}
          >
            Month
          </li>
          <li
            className={tabClassName('year')}
            onClick={() => setFilter('year')}
          >
            Year
          </li>
        </ul>
        <div className='flex justify-between py-4'>
          <div className='bg-gray-100 pl-4 pr-8 py-4 rounded-xl'>
            <h2 className='text-sm'>Income</h2>
            <p className='text-md font-bold text-primary'>
              ${totalIncome.toFixed(2)}
            </p>
          </div>
          <div className='bg-gray-100 pl-8 pr-4 py-4 rounded-xl'>
            <h2>Expense</h2>
            <p className='text-md font-bold text-myred'>
              ${totalExpense.toFixed(2)}
            </p>
          </div>
        </div>
        <ScrollContainer>
          <div className='space-y-8'>{renderExpenses()}</div>
        </ScrollContainer>
      </div>
    </MobileContainer>
  )
}

export default AllTransactions
