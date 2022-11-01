import Expense from '../types/Expense'

interface Params {
  expenses: Expense[]
  year: number
  type: 'deposite' | 'withdraw'
  isAsc: boolean
}

const getTopExpenses = (params: Params): Expense[] => {
  const { expenses, year, type, isAsc } = params

  const spendingInYears = expenses.filter(
    (expense) =>
      new Date(expense.date).getFullYear() === year && expense.type === type
  )

  let sortedTopSpending = spendingInYears.sort((a, b) => a.amount - b.amount)
  if (!isAsc) sortedTopSpending = sortedTopSpending.reverse()

  return sortedTopSpending
}

export default getTopExpenses
