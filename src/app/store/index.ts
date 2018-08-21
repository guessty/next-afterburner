import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import thunk from 'redux-thunk'
//
import firebase from './../config/firebase'
import combinedReducers from './reducers'

const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
  updateProfileOnLogin: false,
}

const isServer = typeof window === 'undefined'

const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })]

const middlewareEnhancer = applyMiddleware(...middlewares)

const storeEnhancers = [middlewareEnhancer]

const initStore = (initialState = {}) => {
  let firebaseEnhancers =[];
  if (!isServer) {
    firebaseEnhancers = [
      reactReduxFirebase(firebase, rrfConfig),
      reduxFirestore(firebase, {})
    ];
  }
  return createStore(combinedReducers, initialState, composeWithDevTools(
    ...storeEnhancers,
    ...firebaseEnhancers
  ))
}

export default initStore
