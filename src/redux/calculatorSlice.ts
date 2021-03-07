import { createSlice } from "@reduxjs/toolkit"
import { evaluate } from "mathjs"

const initialState = {
  expression: "0",
  display: "0",
  solved: false,
}

const operations = ["+", "-", "*", "/"]

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: initialState,

  reducers: {
    addNumberKey: (state, action) => {
      if (action.payload === "." && state.display.includes(".")) {
        return
      }

      if (operations.indexOf(state.display) !== -1) {
        state.expression += action.payload
        state.display = action.payload
        return
      }

      if (state.display === "0" && state.expression === "0") {
        state.display = action.payload
        state.expression = action.payload
        return
      }

      if (
        action.payload === "0" &&
        state.display === "0" &&
        state.expression.length > 0
      ) {
        return
      }

      if (state.solved) {
        state.expression = ""
        state.display = ""
        state.solved = false
      }

      state.expression += action.payload
      state.display += action.payload
    },

    addOperationKey: (state, action) => {
      if (action.payload !== "-" && state.display.length === 0) {
        return
      }

      if (state.solved) {
        state.expression = state.display + action.payload
        state.display = action.payload
        state.solved = false
        return
      }

      if (
        state.expression.length >= 2 &&
        state.expression[state.expression.length - 1] === "-" &&
        operations.indexOf(state.expression[state.expression.length - 1]) !==
          -1 &&
        action.payload !== "-"
      ) {
        state.expression =
          state.expression.substring(0, state.expression.length - 2) +
          action.payload
      } else if (
        operations.indexOf(state.expression[state.expression.length - 1]) !==
          -1 &&
        action.payload !== "-"
      ) {
        state.expression =
          state.expression.substring(0, state.expression.length - 1) +
          action.payload
      } else {
        state.expression += action.payload
      }
      state.display = action.payload
    },

    calculateResult: (state) => {
      if (state.expression.length > 0) {
        const result = evaluate(state.expression)
        state.expression += `=${result}`
        state.display = result.toString()
        state.solved = true
      }
    },

    clearScreen: () => initialState,
  },
})

const { actions, reducer: calculatorReducer } = calculatorSlice
export const {
  clearScreen,
  calculateResult,
  addNumberKey,
  addOperationKey,
} = actions
export default calculatorReducer
