import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "Increment",
    initialState: {
      counter: 0,
    },
    reducers: { 
      incrementCounter: (state) => {
        state.counter += 1; 
      },
      decrementCounter: (state) => {
        state.counter -= 1; 
      },
    },
  });
  
  export const { incrementCounter, decrementCounter } = counterSlice.actions;
  export default counterSlice.reducer;
