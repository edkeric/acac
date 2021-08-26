import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDt5emgPQplZqIrHuA_86RsQGyNd-NA_f0',
  authDomain: 'eventcuntz.firebaseapp.com',
  projectId: 'eventcuntz',
  storageBucket: 'eventcuntz.appspot.com',
  messagingSenderId: '292175626160',
  appId: '1:292175626160:web:a70b9386a4e8d5b617e075',
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
