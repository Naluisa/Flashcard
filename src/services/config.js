// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClr84q8imocMB7LJ4iuO9FO_CGqlmQKQM",
  authDomain: "flashcard-7b03e.firebaseapp.com",
  projectId: "flashcard-7b03e",
  storageBucket: "flashcard-7b03e.appspot.com",
  messagingSenderId: "552130816974",
  appId: "1:552130816974:web:e075b49d0ca9213e65d99f"
};



// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const database = getDatabase();




export { auth, db, database };

