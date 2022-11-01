import { useDispatch, useSelector } from 'react-redux'
import AccountSummary from '../types/accountSummary'
import Expense from '../types/Expense'

const getAccountSummary = (): AccountSummary => {
  const expenses = useSelector((store: any) => store.expense.data)
  let totalExpense = 0
  let totalIncome = 0

  expenses.forEach((expense: Expense) => {
    if (expense.type === 'deposite') totalIncome += expense.amount
    else totalExpense += expense.amount
  })
  const accountBalance = totalIncome - totalExpense
  return { totalExpense, totalIncome, accountBalance }
}

export default getAccountSummary
