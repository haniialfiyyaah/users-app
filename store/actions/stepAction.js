import * as types from '../types'

// INCREMENT COUNTER BY 1
export const nextStep = (count) => ({
  type: types.NEXT,
  payload: +count,
})

// DECREMENT COUNTER BY 1
export const previousStep = (count) => ({
  type: types.PREVIOUS,
  payload: +count,
})

// RESET COUNTER
export const resetStep = () => ({ type: types.RESET })
