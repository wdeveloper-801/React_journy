// Redux/CounterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: Number(localStorage.getItem('count')) || 0,
  color: 'green',
  theme: 'black',
  sidebarOpen: false, // make sure spelling is correct
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    upper: (state) => { state.value += 5 },
    multiply: (state) => { state.value *= 2 },
    colorchange: (state) => { state.color = state.color === 'green' ? 'blue' : 'green' },
    changetheme: (state) => { state.theme = state.theme === 'black' ? 'green' : 'black' },
    toggleSidebar: (state) => { state.sidebarOpen = !state.sidebarOpen }, // fixed
  },
})

export const { increment, decrement, upper, multiply, colorchange, changetheme, toggleSidebar } = counterSlice.actions

export default counterSlice.reducer
