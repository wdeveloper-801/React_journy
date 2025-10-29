// Redux/CounterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem('count') ,
  color: 'green',
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
      state.value += 5
    },
    multiply: (state) => {
      state.value *= 2
    },
    colorchange: (state) => {
      state.color = state.color === 'green' ? 'blue' : 'green' // toggle colors
    },
  },
})

// Export actions for components to use
export const { increment, decrement, upper, multiply, colorchange } = counterSlice.actions

// Export reducer to add to store
export default counterSlice.reducer
