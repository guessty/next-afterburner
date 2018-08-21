import { createReducer } from '@store/utils'
import * as constants from './constants'

const initialState = {
  currentUser: {},
}

export const signInUser = (state, payload) => ({
  ...state,
  authenticated: true,
  currentUser: payload.creds.email,
})

export const signOutUser = state => ({
  ...state,
  authenticated: false,
  currentUser: {},
})

export default createReducer(initialState, {
  [constants.SIGN_IN_USER]: signInUser,
  [constants.SIGN_OUT_USER]: signOutUser,
})
