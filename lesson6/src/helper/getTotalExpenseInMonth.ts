import { useSelector } from 'react-redux'
import Expense from '../types/Expense'

const getTotalExpenseInMonth = ({ expenses, year, type }: any) => {
  const filterArray = expenses
    .filter(
      (expense: Expense) =>
        new Date(expense.date).getFullYear() === year && expense.type === type
    )
    .reverse()

  const expenseObj: any = {}

  filterArray.forEach((expense: any) => {
    const month = new Date(expense.date).toLocaleString('en-Us', {
      month: 'long',
    })
    const name = month.slice(0, 3)
    if (expenseObj[name] === undefined) expenseObj[name] = 0
    expenseObj[name] += expense.amount
  })

  let data = []
  for (let prop in expenseObj) {
    const chartData = { name: prop, total: expenseObj[prop] }
    data.push(chartData)
  }

  return data
}

export default getTotalExpenseInMonth
