import firebase from 'firebase'
import 'firebase/firestore'

const prodConfig = {
  apiKey: 'AIzaSyDCkUyo5ZcUuU25wYwOBu6rsCWKVjJF2lU',
  authDomain: 'upkeep-dev.firebaseapp.com',
  databaseURL: 'https://upkeep-dev.firebaseio.com',
  projectId: 'upkeep-dev',
  storageBucket: 'upkeep-dev.appspot.com',
  messagingSenderId: '363617968883',
}

const devConfig = {
  apiKey: 'AIzaSyDCkUyo5ZcUuU25wYwOBu6rsCWKVjJF2lU',
  authDomain: 'upkeep-dev.firebaseapp.com',
  databaseURL: 'https://upkeep-dev.firebaseio.com',
  projectId: 'upkeep-dev',
  storageBucket: 'upkeep-dev.appspot.com',
  messagingSenderId: '363617968883',
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
