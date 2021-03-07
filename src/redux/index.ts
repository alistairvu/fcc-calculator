import { configureStore } from "@reduxjs/toolkit"
import calculatorReducer from "./calculatorSlice"

const store = configureStore({
  reducer: calculatorReducer,
})

export type rootState = ReturnType<typeof store.getState>
export default store
