interface Expense {
  id: string
  name: string
  type: 'deposite' | 'withdraw'
  date: Date
  amount: number
}

export default Expense
