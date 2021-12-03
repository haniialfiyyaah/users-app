import * as types from '../types'
import { nextStep } from './stepAction'
const API_URL = 'http://localhost:4000'

// INITIALIZES SIGN UP USER
export const signUp = (dataUser) => {
  return async (dispatch) => {
    try {
      if (dataUser.password !== dataUser.confirm_password)
        throw new Error('Not match')
      const body = new FormData()
      body.append('name', dataUser.name)
      body.append('email', dataUser.email)
      body.append('password', dataUser.password)
      body.append('avatar', dataUser.avatar)
      const response = await fetch(API_URL + '/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body, // body data type must match "Content-Type" header
      })
      const data = await response.json()
      dispatch({
        type: types.SIGNUP,
        payload: data,
      })
      dispatch({
        type: types.NEXT,
        payload: data,
      })
      const newInput = {
        name: '',
        email: '',
        password: '',
        confirm_password: '',
      }
      dispatch(setUserInput(newInput))
      dispatch(nextStep(4))
    } catch (err) {
      console.log(err, 'errors')
    }
  }
}

export const setUserInput = (user) => {
  return (dispatch) => {
    console.log(user, '???')
    dispatch({
      type: types.USER_INPUT,
      payload: user,
    })
  }
}
