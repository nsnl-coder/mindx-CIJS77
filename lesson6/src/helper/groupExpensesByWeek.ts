import Expense from '../types/expense'
import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek'

const groupExpensesByWeek = (expenses: Expense[]) => {
  const result: any = []

  expenses.forEach((expense) => {
    const weekRange = getWeekRangeByDate(expense.date)

    if (result[weekRange] === undefined) result[weekRange] = []
    result[weekRange].push(expense)
  })

  return result
}

const getWeekRangeByDate = (date: string) => {
  const isDateCurrentYear =
    new Date(date).getFullYear() === new Date().getFullYear()

  const options: any = isDateCurrentYear
    ? {
        month: 'long',
        day: 'numeric',
      }
    : {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }

  const startOfTheWeek = startOfWeek(new Date(date)).toLocaleDateString(
    'en-US',
    options
  )

  const endOfTheWeek = endOfWeek(new Date(date)).toLocaleDateString(
    'en-US',
    options
  )

  return `${startOfTheWeek} - ${endOfTheWeek}`
}

export default groupExpensesByWeek
