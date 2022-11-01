import React from 'react'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import ExpenseList from '../../components/expenses/ExpenseList'

import getSortedTransactions from '../../helper/getSortedExpenses'
import AccountSummary from './AccountSummary'
import ScrollContainer from '../../components/ui/scrollContainer/ScrollContainer'

const Home = () => {
  const expenses = useSelector((store: any) => store.expense)
  const sortedExpenses = getSortedTransactions(expenses)

  const mostRecentExpenses = sortedExpenses.slice(0, 10)

  return (
    <div className='flex flex-col h-full pb-10'>
      <AccountSummary />
      <div className='mt-16  font-semibold text-base flex flex-col h-full'>
        <div className='flex justify-between items-center pt-4 pb-6 px-4'>
          <h2>Transaction History</h2>
          <p className='text-xs text-gray-500 cursor-pointer'>See all</p>
        </div>
        <ScrollContainer>
          <ExpenseList expenses={mostRecentExpenses} />
        </ScrollContainer>
      </div>
    </div>
  )
}

export default Home
