import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAoPwJLOohpv3OuKl5_ZrxZq-lP9v0J-WM',
  authDomain: 'eventsss-24d16.firebaseapp.com',
  projectId: 'eventsss-24d16',
  storageBucket: 'eventsss-24d16.appspot.com',
  messagingSenderId: '445764556276',
  appId: '1:445764556276:web:db7071d78a4d32501f95a1',
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
