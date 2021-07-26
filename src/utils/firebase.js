import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCM1MTc7sjfZioxkeP85mN0182xl-owLDE",
        authDomain: "testing-8bc78.firebaseapp.com",
        databaseURL: "https://testing-8bc78.firebaseio.com",
        projectId: "testing-8bc78",
        storageBucket: "testing-8bc78.appspot.com",
        messagingSenderId: "210345515655",
        appId: "1:210345515655:web:3ee0482abba88ba5977622",
        measurementId: "G-W6K44244S6"
    });
}

export const auth = firebase.auth()
export const googleProvider = firebase.auth.GoogleAuthProvider()
export const firestore = firebase.firestore()
export const storage = firebase.storage()