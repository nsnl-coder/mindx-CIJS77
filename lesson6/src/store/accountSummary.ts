import { createSlice } from '@reduxjs/toolkit'
import Expense from '../types/Expense'

interface AccountSummary {
  totalIncome: number
  totalExpense: number
  topIncome?: Expense
  topExpense?: Expense
}

const initialState: AccountSummary = {
  totalIncome: 0,
  totalExpense: 0,
}

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
})

export default accountSlice.reducer
export const {} = accountSlice.actions
