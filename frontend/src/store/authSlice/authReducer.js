import { createSlice } from '@reduxjs/toolkit'

const initialState = { token: '', user: {} }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

export default authSlice.reducer
export const {} = authSlice.actions
