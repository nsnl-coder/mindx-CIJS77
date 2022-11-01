import { createSlice } from '@reduxjs/toolkit'
import MOCK_DATA from '../mock_data/expenses.json'

interface InitialState {
  data: any
  isAddExpenseSuccess: undefined | true | false
}

const initialState: InitialState = {
  data: MOCK_DATA,
  isAddExpenseSuccess: undefined,
}

const expenseSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    addExpenses: (state, action) => {
      state.data.push(action.payload)
      state.isAddExpenseSuccess = true
    },
    resetIsAddExpenseSuccess: (state) => {
      state.isAddExpenseSuccess = undefined
    },
  },
})

export default expenseSlice.reducer
export const { addExpenses, resetIsAddExpenseSuccess } = expenseSlice.actions
