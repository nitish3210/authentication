import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAE1eSMRREPH34fNckG_IsKttAGc7G4Uzc",
    authDomain: "authentication-c1e39.firebaseapp.com",
    projectId: "authentication-c1e39",
    storageBucket: "authentication-c1e39.appspot.com",
    messagingSenderId: "444830226149",
    appId: "1:444830226149:web:54532c622faa74f474a60c"
  });


const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseConfig.firestore();


export { auth,provider,  db};