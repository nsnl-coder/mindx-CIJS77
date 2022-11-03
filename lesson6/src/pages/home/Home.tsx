import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import ExpenseList from '../../components/expenses/ExpenseList'
import { Link } from 'react-router-dom'

import getSortedTransactions from '../../helper/getSortedExpenses'
import AccountSummary from './AccountSummary'
import ScrollContainer from '../../components/ui/scrollContainer/ScrollContainer'
import MobileContainer from '../../components/ui/mobileContainer/MobileContainer'

const Home = () => {
  const expenses = useSelector((store: any) => store.expense.data)

  const sortedExpenses = getSortedTransactions(expenses)
  const mostRecentExpenses = sortedExpenses.slice(0, 10)

  return (
    <MobileContainer>
      <div className='flex flex-col h-full'>
        <AccountSummary />
        <div className='mt-16  font-semibold text-base flex flex-col h-full'>
          <div className='flex justify-between items-center pt-4 pb-1 px-4'>
            <h2>Transaction History</h2>
            <Link to='all-transaction'>
              <p className='text-xs text-gray-500 cursor-pointer'>See all</p>
            </Link>
          </div>
          <ScrollContainer className='px-8'>
            <ExpenseList expenses={mostRecentExpenses} />
          </ScrollContainer>
        </div>
      </div>
    </MobileContainer>
  )
}

export default Home
