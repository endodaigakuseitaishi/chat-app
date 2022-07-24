import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCWgaRARwT3SI1WFr69PQmpfnSpBLx4cBY",
  authDomain: "line-clone-b3973.firebaseapp.com",
  projectId: "line-clone-b3973",
  storageBucket: "line-clone-b3973.appspot.com",
  messagingSenderId: "895972601250",
  appId: "1:895972601250:web:86e5b409698f43795916fb"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth };