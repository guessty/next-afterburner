import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { reducer as toastrReducer } from 'react-redux-toastr'
//
import async from '@store/async/reducers'
import auth from '@store/auth/reducers'

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  toastr: toastrReducer,
  async,
  auth,
})
