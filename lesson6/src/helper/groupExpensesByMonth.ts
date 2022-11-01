import Expense from '../types/Expense'

const groupExpensesByMonth = (sortedExpense: Expense[]) => {
  const result: any = []
  sortedExpense.forEach((expense) => {
    const monthAndYear = getMonthAndYearFromDate(expense.date)

    if (result[monthAndYear] === undefined) result[monthAndYear] = []
    result[monthAndYear].push(expense)
  })

  return result
}

const getMonthAndYearFromDate = (date: string) => {
  const dateObj = new Date(date)
  const isCurrentYear = dateObj.getFullYear() === new Date().getFullYear()

  let options: any = {
    month: 'long',
  }

  if (!isCurrentYear) {
    options = {
      year: 'numeric',
      month: 'long',
    }
  }

  return dateObj.toLocaleString('en-US', options)
}

export default groupExpensesByMonth
