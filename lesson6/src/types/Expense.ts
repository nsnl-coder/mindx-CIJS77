interface Expense {
  id: string
  name: string
  type: 'deposite' | 'withdraw'
  date: string
  amount: number
}

export default Expense
