import firebase from 'firebase'
import 'firebase/firestore'

const prodConfig = {
  apiKey: '<api-key>',
  authDomain: '<auth-domain>',
  databaseURL: '<database-url',
  projectId: '<project-id>',
  storageBucket: '<storage-bucket>',
  messagingSenderId: '<message-sender-id>',
}

const devConfig = {
  apiKey: '<api-key>',
  authDomain: '<auth-domain>',
  databaseURL: '<database-url',
  projectId: '<project-id>',
  storageBucket: '<storage-bucket>',
  messagingSenderId: '<message-sender-id>',
}

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const firestore = firebase.firestore()
const settings = {
  timestampsInSnapshots: true,
}
firestore.settings(settings)


export default firebase
