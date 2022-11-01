import Expense from '../types/Expense'

const groupExpensesByDay = (expenses: Expense[]) => {
  const result: any = []

  expenses.forEach((expense) => {
    const index = expense.date.slice(0, 10)
    if (result[index] === undefined) result[index] = []
    result[index].push(expense)
  })

  return result
}

export default groupExpensesByDay
