import * as types from '../types'

export default (state = 0, { type, payload }) => {
  const count = payload || 1
  console.log(payload, '//???')
  switch (type) {
    case types.NEXT:
      return state + count
    case types.PREVIOUS:
      return state - count
    case types.RESET:
      return 0
    default:
      return state
  }
}
