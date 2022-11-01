interface Expense {
  name: string
  type: 'deposite' | 'withdraw'
  date: Date
  amount: number
}

export default Expense
