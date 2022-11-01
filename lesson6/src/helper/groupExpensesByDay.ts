import Expense from '../types/expense'

const groupExpensesByDay = (expenses: Expense[]) => {
  const result: any = []

  expenses.forEach((expense) => {
    const index = expense.date.slice(0, 10)
    if (result[index] === undefined) result[index] = []
    result[index].push(expense)
  })
  console.log(result)

  return result
}

export default groupExpensesByDay
