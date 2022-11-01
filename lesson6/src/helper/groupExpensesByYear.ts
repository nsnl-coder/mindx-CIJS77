import Expense from '../types/Expense'

const groupExpensesByYear = (sortedExpense: Expense[]) => {
  const result: any = []
  sortedExpense.forEach((expense) => {
    const year = ' ' + new Date(expense.date).getFullYear()
    if (result[year] === undefined) result[year] = []
    result[year].push(expense)
  })

  return result
}

export default groupExpensesByYear
