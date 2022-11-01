import { createSlice } from '@reduxjs/toolkit'
import MOCK_DATA from '../mock_data/expenses.json'

const initialState = MOCK_DATA

const expenseSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
})

export default expenseSlice.reducer
export const {} = expenseSlice.actions
