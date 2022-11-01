import NorthIcon from '@mui/icons-material/North'
import { useSelector } from 'react-redux'
import Expense from '../../types/expense'
import getSortedTransactions from '../../helper/getSortedTransactions'
import { useMemo } from 'react'
import ExpenseList from '../../components/expenses/ExpenseList'
import TransactionSummary from './TransactionSummary'

const Home = () => {
  const transactions = useSelector((store: any) => store.expense)

  const sortedExpenses = useMemo(
    () => getSortedTransactions(transactions),
    [transactions]
  )

  const mostRecentExpenses = sortedExpenses.slice(0, 10)

  return (
    <div className='flex flex-col h-full pb-10'>
      <TransactionSummary />
      <div className='mt-16  font-semibold text-base flex flex-col h-full'>
        <div className='flex justify-between items-center pt-4 pb-6 px-4'>
          <h2>Transaction History</h2>
          <p className='text-xs text-gray-500 cursor-pointer'>See all</p>
        </div>
        <ExpenseList expenses={mostRecentExpenses} />
      </div>
    </div>
  )
}

export default Home
