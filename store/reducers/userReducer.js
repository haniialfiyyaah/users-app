import * as types from '../types'

const initialState = {
  user: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SIGNUP:
      return { ...state, user: payload }
    case types.USER_INPUT:
      return { ...state, user: payload }
    default:
      return state
  }
}
