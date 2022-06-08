import {initializeApp} from 'firebase/app';
import { initializeFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'; 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxXcnFYS7IEcYLC6n6gfMiCRA2-wVXV-M",
  authDomain: "flashcards-1a172.firebaseapp.com",
  projectId: "flashcards-1a172",
  storageBucket: "flashcards-1a172.appspot.com",
  messagingSenderId: "975622106993",
  appId: "1:975622106993:web:92ee821364346d6d6450d0",
  measurementId: "G-R83KFJSW34"
};



// Initialize Firebase
const firebaseApp =  initializeApp(firebaseConfig);
           
const db= initializeFirestore(firebaseApp, {experimentalForceLongPolling: true})
const auth = getAuth();

export {auth, db};

