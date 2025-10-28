// Redux/CounterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    upper: (state) => {
        state.value +=5
    }
  },
})

// Export actions for components to use
export const { increment, decrement,upper } = counterSlice.actions

// Export reducer to add to store
export default counterSlice.reducer
