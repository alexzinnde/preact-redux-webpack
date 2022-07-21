import { createSlice } from '@reduxjs/toolkit'


// A "slice" contains the reducer logic and actions related to a specific feature / section of the Redux state
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {state.value += 1},
    decrement: state => {state.value -= 1},
    incrementByAmount: (state, action) => {state.value += action.payload}
  }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer