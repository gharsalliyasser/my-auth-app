import { REGISTER_SUCCESS } from './types'

export const addUser = (user) => {
  return {
    type: REGISTER_SUCCESS,
    payload: user
  }
}