import Expense from '../types/expense'

const getSortedTransactions = (transactions: Expense[]) => {
  const expensesArr = [...transactions]
  const sortedArray = expensesArr.sort(
    (objA: Expense, objB: Expense) =>
      Number(new Date(objB.date)) - Number(new Date(objA.date))
  )
  return sortedArray
}

export default getSortedTransactions
