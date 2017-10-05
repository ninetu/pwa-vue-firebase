import firebase from 'firebase'
import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import store from './store'

firebase.initializeApp({
  apiKey: 'AIzaSyBJAeo97dT_6rxXhTwTZmMT2GMIrb4ADuc',
  authDomain: 'nytu-e9e62.firebaseapp.com',
  databaseURL: 'https://nytu-e9e62.firebaseio.com',
  projectId: 'nytu-e9e62',
  storageBucket: 'nytu-e9e62.appspot.com',
  messagingSenderId: '1039983935962'
})

if (__DEV__) {
  window.firebase = firebase
}

export const ui = new firebaseui.auth.AuthUI(firebase.auth())

/**
 * Sync store.state.user with firebase.auth().currentUser
 *
 * This callback is called when firebase.auth() detects user changes,
 * so just update the vuex store with the new user object.
 */
firebase.auth().onAuthStateChanged(user => {
  store.commit('UPDATE_USER', user)
})

export default firebase
