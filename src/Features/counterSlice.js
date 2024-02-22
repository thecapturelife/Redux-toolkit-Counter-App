import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  count : 0
}
const counterSlice = createSlice ({
  name : 'counter' ,
  initialState,
  reducers : {
     increment : (state) => {
       state.count = state.count +1
     },
     decrement : (state) => {
      state.count = state.count > 0 ? state.count -1:state.count
     }
  }
})
export default counterSlice.reducer
export const {increment , decrement} = counterSlice.actions